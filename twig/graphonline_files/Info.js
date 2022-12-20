
/**
 * Information
 */
 function Dependency(source, target) {
    this.label = ''
    this.source = source;
    this.target = target;
    this.weight = 3;
    this.uid = "uid" + Math.random().toString(16).slice(2);
}
function Resource(link, description) {
    this.link = link
    this.description = description
    this.uid = "uid" + Math.random().toString(16).slice(2);
}
Resource.prototype.SaveToXML = function () {
    var ret = "<resource " +
        "link=\"" + encodeURIComponent(this.link) + "\" " +
        "description=\"" + encodeURIComponent(this.description) + "\" " +
        "uid=\"" + this.uid + "\" " +
        ">" + "</resource>\n";
    return ret;
}
Resource.prototype.LoadFromXML = function (xml) {
    this.link = xml.attr('link') == null ? 'saving error? contact admin' : xml.attr("link");
    this.link = decodeURIComponent(this.link)
    this.description = xml.attr('description') == null ? 'saving error? contact admin' : xml.attr("description");
    this.description = decodeURIComponent(this.description)
    this.uid = xml.attr('uid') == null ? 'saving error? contact admin' : xml.attr("uid");
}
function Tag(name) {
    this.name = name
}
Tag.prototype.SaveToXML = function () {
    var ret = "<tag " +
        "name=\"" + encodeURIComponent(this.name) + "\" " +
        ">" + "</tag>\n";
    return ret;
}
Tag.prototype.LoadFromXML = function (xml) {
    this.name = xml.attr('name') == null ? 'saving error? contact admin' : decodeURIComponent(xml.attr('name'));
}
function NodeInfo() {
    this.title = '';
    this.description = ''
    this.resources = []
    this.uid = "uid" + Math.random().toString(16).slice(2);
    this.tags = []
}
NodeInfo.prototype.SaveToXML = function () {
    var ret = "\t\t<topic " +
        "title=\"" + encodeURIComponent(this.title) + "\" " +
        "description=\"" + encodeURIComponent(this.description) + "\" " +
        "uid=\"" + encodeURIComponent(this.uid) + "\" " +
        ">\n"
    this.resources.forEach(function (item, index) {
        ret = ret + "\t\t\t" + item.SaveToXML();
    });
    this.tags.forEach(function (item, index) {
        ret = ret + "\t\t\t" + item.SaveToXML();
    })
    ret = ret + "\t\t</topic>\n";
    return ret;
}
NodeInfo.prototype.LoadFromXML = function (xml) {
    this.title = xml.attr('title') == null ? 'saving error? contact admin' : xml.attr("title");
    this.title = decodeURIComponent(this.title)
    this.description = xml.attr('description') == null ? 'saving error? contact admin' : xml.attr("description");
    this.description = decodeURIComponent(this.description)
    this.uid = xml.attr('uid') == null ? 'saving error? contact admin' : xml.attr("uid");
    resources = []
    $(xml.find('resource')).each(function () {
        var resource = new Resource();
        resource.LoadFromXML($(this));
        resources.push(resource);
    })
    this.resources = resources;
    tags = []
    $(xml.find('tag')).each(function () {
        var tag = new Tag();
        tag.LoadFromXML($(this));
        tags.push(tag);
    })
    this.tags = tags;
}