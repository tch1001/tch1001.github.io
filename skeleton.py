from bs4 import BeautifulSoup
from requests_html import HTMLSession
import json
from dotenv import dotenv_values
import os, openai
from pymongo import MongoClient

dotenv_values(".env")
openai.api_key = os.environ.get("OPENAI_API_KEY")
client = MongoClient(os.environ.get("MONGO_URL"))
infoDB = client['info-db']
infoCollection = infoDB['info-collection']

class Website:
    def __init__(self, url):
        self.url = url 
        self.title = None
        self.summary = None
        self.paragraphs = None
        self.links = None
        # try to retrieve info from database
        info = infoCollection.find_one({'url':self.url})
        if(info): 
            self.title = info['title']
            self.url = info['url']
            self.summary = info['summary']
            self.links = info['links']
            self.paragraphs = info['paragraphs']
            return
        self.html = self.render()
    def getTitle(self): 
        return f"title for {self.url}"
    def getSummary(self): 
        return f"summary for {self.url}"
    def render(self):
        session = HTMLSession()
        response = session.get(self.url)
        return response.html
        
class Wiki(Website):
    def __init__(self, url):
        url = url.split('#')[0]
        super().__init__(url)
        # if unsaved yet
        if(self.title == None): 
            # save() generates json for the first time
            self.save()
    def save(self):
        infoCollection.insert_one(self.exportToDB())
    def exportToDB(self):
        return {'title': self.getTitle(),
             'url': self.getURL(),
             'summary': self.getSummary(),
             'paragraphs': self.getParagraphs(), 
             'links': self.getLinks() }

    def getTitle(self):
        if(self.title): pass
        else: 
            try: self.title = self.html.find('#firstHeading')[0].text
            except: self.title = super().getTitle()
        return self.title
    def getURL(self): 
        return self.url
    def getSummary(self): # 
        if(self.summary): pass
        else: 
            try: self.summary = self.html.find('p')[1].text
            except: self.summary = super().getSummary()
        return self.summary
    def getParagraphs(self):
        if(self.paragraphs != None): return
        self.paragraphs = [i.text for i in self.html.find('p')]
        return self.paragraphs
    def getLinks(self):
        if(self.links != None): return
        self.links = list(self.html.absolute_links)
        return self.links
    def getJSON(self):
        return {'title': self.getTitle(),
             'url': self.getURL(),
             'summary': self.getSummary()}
    def getJSONString(self):
        info = self.getJSON()
        return json.dumps(info)

class Edge:
    def __init__(self, A, B):
        self.A = A
        self.B = B
class Node:
    def __init__(self, url):
        self.url = url
        self.obj = None
        self.edgesOut = []
        self.edgesIn = []
        if('en.wikipedia.org' in self.url): self.obj = Wiki(self.url)
    def addEdge(self, B):
        self.edgesOut.append(Edge(self,B))
        self.edgesIn.append(Edge(B,self))
class WikiCrawler:
    def __init__(self):
        self.nodes = []
        self.queue = []
    def stepBFS(self, node = None):
        if(node == None): node = self.queue[0]
        if(node in self.queue): self.queue.remove(node)
        if(node.obj == None): return
        print(f'bfs @ {node.url}')
        for nextLink in node.obj.links:
            next = Node(nextLink)
            node.addEdge(next)
            self.nodes.append(next)
            self.queue.append(next)
wc = WikiCrawler()
wc.stepBFS(Node('https://en.wikipedia.org/wiki/Quantum_field_theory'))

for i in range(10):
    wc.stepBFS()