from flask import Flask, request
from skeleton import Website, Wiki

app = Flask(__name__)
@app.route("/link/", methods=['GET'])
def link():
    url = request.args.get('url')
    print(url)
    if('en.wikipedia.org' in url):
        return Wiki(url).getJSONString()
    
    return 'blah'


# wiki = Wiki('https://en.wikipedia.org/wiki/Quantum_field_theory#:~:text=In%20theoretical%20physics%2C%20quantum%20field,to%20construct%20models%20of%20quasiparticles.')
# print(wiki.getTitle())
# print(wiki.getURL())
# print(wiki.getSummary())
# text.headers.date
# text.url
# text.html.absolute_links