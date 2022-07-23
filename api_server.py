from bs4 import BeautifulSoup
from requests_html import HTMLSession
from flask import Flask, request
import json

app = Flask(__name__)

class Website:
    def __init__(self, url):
        self.url = url
    def render(self):
        session = HTMLSession()
        response = session.get(self.url)
        return response.html
        
class Wiki(Website):
    def __init__(self, url):
        super().__init__(url)
        self.html = self.render()
    def getTitle(self):
        return self.html.find('#firstHeading')[0].text
    def getURL(self):
        return self.url.split('#')[0]
    def getSummary(self):
        return BeautifulSoup(self.html.find('.mw-parser-output')[0].html, 'html.parser').find_all('p')[1].text
    def getJSON(self):
        info = {'title': self.getTitle(),
             'url': self.getURL(),
             'summary': self.getSummary()}
        return json.dumps(info)

@app.route("/link/", methods=['GET'])
def link():
    url = request.args.get('url')
    print(url)
    if('en.wikipedia.org' in url):
        return Wiki(url).getJSON();
    return 'blah'
# wiki = Wiki('https://en.wikipedia.org/wiki/Quantum_field_theory#:~:text=In%20theoretical%20physics%2C%20quantum%20field,to%20construct%20models%20of%20quasiparticles.')
# print(wiki.getTitle())
# print(wiki.getURL())
# print(wiki.getSummary())
# text.headers.date
# text.url
# text.html.absolute_links