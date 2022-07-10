//
function FullObjectCopy(obj) {
    var newObj = Object.create(Object.getPrototypeOf(obj));

    return Object.assign(newObj, obj);
}

function FullArrayCopy(arr) {
    var res = [];

    arr.forEach(function (element) {

        var copyElement = FullObjectCopy(element);
        res.push(copyElement);
    });

    return res;
}/**
 *  Place here all tests constans.
 *
 */


var g_textsSelectAndMove = "Drag objects";
var g_moveCursorForMoving = "Move cursor";
var g_clickToAddVertex = "Click to add vertex";
var g_selectFisrtVertexToConnect = "Select first vertex to connect";
var g_selectSecondVertexToConnect = "Select second vertex to connect";
var g_selectStartVertexForShortPath = "Select start vertex for shortest path";
var g_selectFinishVertexForShortPath = "Select finish vertex for shortest path";
var g_shortestPathResult = "Shortest path is %d";
var g_pathNotExists = "Path does not exists";
var g_selectObjectToDelete = "Select object to delete";


var g_addEdge = "Add edge";
var g_orintEdge = "Orient";
var g_notOrintEdge = "not Orient";

var g_adjacencyMatrixText = "Adjacency Matrix";
var g_save = "Save";
var g_cancel = "Cancel";
var g_save_graph = "Save Graph";

var g_shortestDistance = "lowest-distance is ";
var g_incidenceMatrixText = "Incidence Matrix";

var g_save_dialog = "Save dialog";
var g_close = "close";
var g_sickConnectedComponent = "Sick connected component is ";
var g_connectedComponent = "Connected component is ";


var g_what_do_you_think = "What do you think about site?";
var g_name = "Name";
var g_feedback = "Feedback";
var g_send = "Send";
var g_write_to_us = "Write to us";

var g_fixMatrix = "Fix matrix";
var g_readMatrixHelp = "Matrix format help";
var g_matrixWrongFormat = "Matrix is wrong";

var g_save_image_dialog = "Save graph image";

var g_fullReport = "Full report";

var g_shortReport = "Short report";

var g_hasEulerianLoop = "Graph has Eulerian Loop";
var g_hasNotEulerianLoop = "Graph has not Eulerian Loop";

var g_hasEulerianPath = "Graph has Eulerian Path";
var g_hasNotEulerianPath = "Graph has not Eulerian Path";

var g_processing = "Processing...";

var g_customEnumVertex = "Custom";
var g_addVertex = "Add vertex";

var g_renameVertex = "Rename vertex";
var g_rename = "Rename";

var g_language = "en";

var g_editWeight = "Edit weight";

var g_noWeight = "No weight";
var g_groupRename = "Group rename";
var g_vote = "Vote";

var g_recommendAlgorithm = "Recommend algorithm";

var g_graphOfMinDist = "Graph of minimal distances.";
var g_checkToSave = "Check to save";
var g_showDistMatrix = "Show Distance matrix";
var g_minDistMatrixText = "Minimal distances matrix";

var g_selectStartVertexForMaxFlow = "Select source vertex for max flow";
var g_selectFinishVertexForMaxFlow = "Select sink vertex for max flow";
var g_maxFlowResult = "Maximum flow from %2 to %3 is %1";
var g_flowNotExists = "Flow from %1 to %2 does not exists";

var g_sourceVertex = "Source";
var g_sinkVertex = "Sink";

var g_hasHamiltonianLoop = "Graph has Hamiltonian Loop";
var g_hasNotHamiltonianLoop = "Graph has not Hamiltonian Loop";

var g_hasHamiltonianPath = "Graph has Hamiltonian Path";
var g_hasNotHamiltonianPath = "Graph has not Hamiltonian Path";

var g_startTraversal = "Select start traversal vector";
var g_traversalOrder = "Traversal order: ";

var g_curveEdge = "Curved edge";

var g_Undo = "Undo";
var g_default = "default";
var g_vertexDraw = "Vertex draw style";
var g_edgeDraw = "Edge draw style";
var g_backgroundStyle = "Bacgkround style";

var g_GrapsIsMultiMessage = "Graph is multigraph";
var g_GrapsIsGeneralMessage = "";
var g_DefaultWeightPreset = "no weight";
var g_dragGroupText = "Drag group.";
var g_selectGroupText = "Select using ctrl";
var g_copyGroupeButton = "Dublicate";
var g_removeGroupeButton = "Remove objects";

var g_BFSName = "Breadth-first search";
var g_ColoringName = "Graph coloring";
var g_findConnectedComponent = "Find connected components";
var g_DFSName = "Depth-first search";
var g_EulerinLoopName = "Find Eulerian cycle";
var g_EulerinPath = "Find Eulerian path";
var g_FloidName = "Floyd–Warshall algorithm";
var g_GraphReorder = "Arrange the graph";
var g_HamiltoianCycleName = "Find Hamiltonian cycle";
var g_HamiltonianPath = "Find Hamiltonian path";
var g_MaxFlowName = "Find Maximum flow";
var g_minimumSpanningTree = "Search of minimum spanning tree";
var g_modernGraphStyleName = "Visualisation based on weight";
var g_RadiusAndDiameter = "Search graph radius and diameter";
var g_findShortPathName = "Find shortest path using Dijkstra's algorithm";
var g_VerticesDegreeName = "Calculate vertexes degree";
var g_SpanningTreeResult = "Min Spanning Tree is";
var g_SpanningTreeIgnoreDir = "We ignored edges direction for calculation";
var g_SpanningTreeNotConnected = "Graph is not connected";

var g_selectFirstGraphIsomorphismCheck = "Select first graph for isomorphic check. Click to any node of graph";
var g_selectSecondGraphIsomorphismCheck = "Select second graph for isomorphic check. Click to any node of graph";

var g_selectFirstGraphPatternCheck = "Select a template graph by clicking to any node of graph";
var g_selectSecondGraphForSearchSubgraph = "Choose a graph in which we will look for isomorphic subgraphs. Click to any node of this graph";

// IsomorphismCheck.js
var g_graphsIsomorph = "Graphs are isomorphic";
var g_graphsNotIsomorph = "Graphs are not isomorphic";
var g_numberOfIsomorphSubgraphIs = "Number of isomorphic subgraphs are ";
var g_graphHasNoIsomorphSubgraph = "Graph don't contain isomorphic subgraphs";
var g_searchIsomorphSubgraph = "Search isomorphic subgraphs";
var g_subgraphNo = "Isomorphic subgraph # ";
var g_graphHasNoAtleast2Graphs = "To use the algorithm, you need to create 2 separate graphs";
var g_IsomorphismCheck = "Check Graphs Isomorphism";

// RadiusAndDiameter.js
var g_graphIsDisconnected = "Graph is disconnected";
var g_graphIsTrivial = "Graph contains only one vertex";
var g_graphRadius = "Graph radius";
var g_graphDiameter = "Graph diameter";
var g_vertexCentral = "Central";
var g_vertexPeripheral = "Peripheral";

// VerticesDegree.js
var g_maximumDegreeOfGraph = "The maximum degree of a graph is";

// Coloring.js
var g_colorNumber = "Color number is";

var g_done = "Done";

var g_action = "Action";
var g_commonEdgeStyle = "Common Edge Style";
var g_selectedEdgeStyle = "Selected Edge Style";
var g_commonVertexStyle = "Common Vertex Style";
var g_selectedVertexStyle = "Selected Vertex Style";

// FindAllPatches.js
var g_findAllPathes = "Find all pathes";
var g_numberOfPathesFrom = "Number of pathes from "
var g_to = " to ";
var g_are = " are ";
var g_pathN = "Path #";
var g_selectFinishVertex = "Select finish vertex";
var g_selectStartVertex = "Select start vertex";

// FindShortPatchsFromOne.js
var g_findAllPathesFromVertex = "Find all shortest paths from vertex";
var g_distanceFrom = "Distance from ";
var g_pathTo = "Path to ";

var g_useContextMenuText = "Use context menu for addition actions."

function loadTexts() {
    g_textsSelectAndMove = document.getElementById("SelectAndMoveObject").innerHTML;
    g_moveCursorForMoving = document.getElementById("MoveCursorForMoving").innerHTML;
    g_clickToAddVertex = document.getElementById("clickToAddVertex").innerHTML;
    g_selectFisrtVertexToConnect = document.getElementById("selectFisrtVertextToConnect").innerHTML;
    g_selectSecondVertexToConnect = document.getElementById("selectSecondVertextToConnect").innerHTML;
    g_selectStartVertexForShortPath = document.getElementById("selectStartShortPathVertex").innerHTML;
    g_selectFinishVertexForShortPath = document.getElementById("selectFinishShortPathVertex").innerHTML;
    g_shortestPathResult = document.getElementById("shortPathResult").innerHTML;
    g_pathNotExists = document.getElementById("pathNotExists").innerHTML;
    g_selectObjectToDelete = document.getElementById("selectObjectToDelete").innerHTML;

    g_addEdge = document.getElementById("AddEdge").innerHTML;
    g_orintEdge = document.getElementById("OrintEdge").innerHTML;
    g_notOrintEdge = document.getElementById("NotOrintdge").innerHTML;

    g_adjacencyMatrixText = document.getElementById("AdjacencyMatrixText").innerHTML;
    g_save = document.getElementById("Save").innerHTML;
    g_cancel = document.getElementById("Cancel").innerHTML;

    g_shortestDistance = document.getElementById("shortestDist").innerHTML;

    g_incidenceMatrixText = document.getElementById("IncidenceMatrixText").innerHTML;

    g_save_dialog = document.getElementById("saveDialogTitle").innerHTML;
    g_close = document.getElementById("closeButton").innerHTML;

    g_sickConnectedComponent = document.getElementById("sickConnectedComponentResult").innerHTML;
    g_connectedComponent = document.getElementById("connectedComponentResult").innerHTML;

    g_what_do_you_think = document.getElementById("whatDoYouThink").innerHTML;
    g_name = document.getElementById("name").innerHTML;
    g_feedback = document.getElementById("feedback").innerHTML;
    g_send = document.getElementById("send").innerHTML;
    g_write_to_us = document.getElementById("writeToUs").innerHTML;


    g_fixMatrix = document.getElementById("fixMatrixButton").innerHTML;
    g_readMatrixHelp = document.getElementById("matrixHelp").innerHTML;
    g_matrixWrongFormat = document.getElementById("wronMatrixTitle").innerHTML;

    g_save_image_dialog = document.getElementById("saveImageDialogTitle").innerHTML;

    g_fullReport = document.getElementById("fullReport").innerHTML;
    g_shortReport = document.getElementById("shortReport").innerHTML;


    g_hasEulerianLoop = document.getElementById("hasEulerianLoop").innerHTML;
    g_hasNotEulerianLoop = document.getElementById("hasNotEulerianLoop").innerHTML;

    g_processing = document.getElementById("processing").innerHTML;

    g_customEnumVertex = document.getElementById("customEnumVertex").innerHTML;

    g_addVertex = document.getElementById("addVertexText").innerHTML;

    g_renameVertex = document.getElementById("renameVertex").innerHTML;
    g_rename = document.getElementById("renameText").innerHTML;

    g_language = document.getElementById("currentLanguage").innerHTML;

    g_editWeight = document.getElementById("editWeight").innerHTML;

    g_noWeight = document.getElementById("noWeight").innerHTML;
    g_groupRename = document.getElementById("groupeRenameText").innerHTML;
    g_vote = document.getElementById("voteText").innerHTML;

    g_recommendAlgorithm = document.getElementById("recommend_algorithm").innerHTML;

    g_hasEulerianPath = document.getElementById("hasEulerianPath").innerHTML;
    g_hasNotEulerianPath = document.getElementById("hasNotEulerianPath").innerHTML;

    g_graphOfMinDist = document.getElementById("graphOfMinDist").innerHTML;
    g_checkToSave = document.getElementById("checkToSave").innerHTML;
    g_showDistMatrix = document.getElementById("showDistMatrix").innerHTML;
    g_minDistMatrixText = document.getElementById("distMatrixText").innerHTML;

    g_selectStartVertexForMaxFlow = document.getElementById("selectStartVertexForMaxFlow").innerHTML;
    g_selectFinishVertexForMaxFlow = document.getElementById("selectFinishVertexForMaxFlow").innerHTML;
    g_maxFlowResult = document.getElementById("maxFlowResult").innerHTML;
    g_flowNotExists = document.getElementById("flowNotExists").innerHTML;

    g_sourceVertex = document.getElementById("sourceVertex").innerHTML;
    g_sinkVertex = document.getElementById("sinkVertex").innerHTML;

    g_hasHamiltonianLoop = document.getElementById("hasHamiltonianLoop").innerHTML;
    g_hasNotHamiltonianLoop = document.getElementById("hasNotHamiltonianLoop").innerHTML;

    g_hasHamiltonianPath = document.getElementById("hasHamiltonianPath").innerHTML;
    g_hasNotHamiltonianPath = document.getElementById("hasNotHamiltonianPath").innerHTML;

    g_startTraversal = document.getElementById("startTraversal").innerHTML;
    g_traversalOrder = document.getElementById("traversalOrder").innerHTML;

    g_curveEdge = document.getElementById("curveEdge").innerHTML;

    g_Undo = document.getElementById("undoTranslate").innerHTML;
    g_save_graph = document.getElementById("saveGraph").innerHTML;
    g_default = document.getElementById("default").innerHTML;
    g_vertexDraw = document.getElementById("vertexDrawStyle").innerHTML;
    g_edgeDraw = document.getElementById("edgeDrawStyle").innerHTML;

    g_backgroundStyle = document.getElementById("backgroundStyle").innerHTML;

    g_GrapsIsMultiMessage = document.getElementById("graphIsMultiMessage").innerHTML;
    g_GrapsIsGeneralMessage = document.getElementById("graphIsGeneralMessage").innerHTML;
    g_DefaultWeightPreset = document.getElementById("defaultWeightPreset").innerHTML;

    var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    if (isMac)
        g_selectGroupText = document.getElementById("selectGroupMac").innerHTML;
    else
        g_selectGroupText = document.getElementById("selectGroupWin").innerHTML;

    g_dragGroupText = document.getElementById("dragSelectedGroup").innerHTML;
    g_copyGroupeButton = document.getElementById("copySelectedGroup").innerHTML;
    g_removeGroupeButton = document.getElementById("removeSelectedGroup").innerHTML;

    g_BFSName = document.getElementById("BFSName").innerHTML;
    g_ColoringName = document.getElementById("ColoringName").innerHTML;
    g_findConnectedComponent = document.getElementById("findConnectedComponent").innerHTML;
    g_DFSName = document.getElementById("DFSName").innerHTML;
    g_EulerinLoopName = document.getElementById("EulerinLoopName").innerHTML;
    g_EulerinPath = document.getElementById("EulerinPath").innerHTML;
    g_FloidName = document.getElementById("FloidName").innerHTML;
    g_GraphReorder = document.getElementById("GraphReorder").innerHTML;
    g_HamiltoianCycleName = document.getElementById("HamiltoianCycleName").innerHTML;
    g_HamiltonianPath = document.getElementById("HamiltonianPath").innerHTML;
    g_MaxFlowName = document.getElementById("MaxFlowName").innerHTML;
    g_minimumSpanningTree = document.getElementById("minimumSpanningTree").innerHTML;
    g_modernGraphStyleName = document.getElementById("modernGraphStyleName").innerHTML;
    g_RadiusAndDiameter = document.getElementById("RadiusAndDiameter").innerHTML;
    g_findShortPathName = document.getElementById("findShortPathName").innerHTML;
    g_VerticesDegreeName = document.getElementById("VerticesDegreeName").innerHTML;

    g_SpanningTreeResult = document.getElementById("MinSpanningTreeResult").innerHTML;
    g_SpanningTreeIgnoreDir = document.getElementById("MinSpanningIgnoreDir").innerHTML;
    g_SpanningTreeNotConnected = document.getElementById("MinSpanningNotConnected").innerHTML;

    g_selectFirstGraphIsomorphismCheck = document.getElementById("SelectFirstGraphIsomorphismCheck").innerHTML;
    g_selectSecondGraphIsomorphismCheck = document.getElementById("SelectSecondGraphIsomorphismCheck").innerHTML;

    g_selectFirstGraphPatternCheck = document.getElementById("SelectFirstGraphPatternCheck").innerHTML;
    g_selectSecondGraphForSearchSubgraph = document.getElementById("SelectSecondGraphForSearchSubgraph").innerHTML;

    // IsomorphismCheck.js
    g_graphsIsomorph = document.getElementById("GraphsIsomorph").innerHTML;
    g_graphsNotIsomorph = document.getElementById("GraphsNotIsomorph").innerHTML;
    g_numberOfIsomorphSubgraphIs = document.getElementById("NumberOfIsomorphSubgraphIs").innerHTML;
    g_graphHasNoIsomorphSubgraph = document.getElementById("GraphHasNoIsomorphSubgraph").innerHTML;
    g_searchIsomorphSubgraph = document.getElementById("SearchIsomorphSubgraph").innerHTML;
    g_subgraphNo = document.getElementById("SubgraphNo").innerHTML;
    g_graphHasNoAtleast2Graphs = document.getElementById("GraphHasNoAtleast2Graphs").innerHTML;
    g_IsomorphismCheck = document.getElementById("IsomorphismCheck").innerHTML;

    // RadiusAndDiameter.js
    g_graphIsDisconnected = document.getElementById("GraphIsDisconnected").innerHTML;
    g_graphIsTrivial = document.getElementById("GraphIsTrivial").innerHTML;
    g_graphRadius = document.getElementById("GraphRadius").innerHTML;
    g_graphDiameter = document.getElementById("GraphDiameter").innerHTML;
    g_vertexCentral = document.getElementById("VertexCentral").innerHTML;
    g_vertexPeripheral = document.getElementById("VertexPeripheral").innerHTML;

    // VerticesDegree.js
    g_maximumDegreeOfGraph = document.getElementById("MaximumDegreeOfGraph").innerHTML;

    // Coloring.js
    g_colorNumber = document.getElementById("ColorNumber").innerHTML;

    g_done = document.getElementById("Done").innerHTML;

    g_action = document.getElementById("ActionText").innerHTML;
    g_commonEdgeStyle = document.getElementById("CommonEdgeStyleText").innerHTML;
    g_selectedEdgeStyle = document.getElementById("SelectedEdgeStyleText").innerHTML;
    g_commonVertexStyle = document.getElementById("CommonVertexStyleText").innerHTML;
    g_selectedVertexStyle = document.getElementById("SelectedVertexStyleText").innerHTML;

    // FindAllPatches.js
    g_findAllPathes = document.getElementById("FindAllPathes").innerHTML;
    g_numberOfPathesFrom = document.getElementById("NumberOfPathesFrom").innerHTML;
    g_to = document.getElementById("To").innerHTML;
    g_are = document.getElementById("Are").innerHTML;
    g_pathN = document.getElementById("PathN").innerHTML;
    g_selectFinishVertex = document.getElementById("SelectFinishVertex").innerHTML;
    g_selectStartVertex = document.getElementById("SelectStartVertex").innerHTML;

    // FindShortPatchsFromOne.js
    g_findAllPathesFromVertex = document.getElementById("findAllPathsFromVertex").innerHTML;
    g_distanceFrom = document.getElementById("distanceFrom").innerHTML;
    g_pathTo = document.getElementById("pathTo").innerHTML;

    g_useContextMenuText = document.getElementById("UseContextMenuText").innerHTML;
}

/**
 * This is graph model used for hit test and draw.
 *
 */

const defaultVertexDiameter = 30;

function VertexModel() {
    this.diameter = globalApplication.GetDefaultVertexSize();
}

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
/**
 * This is base arc.
 *
 *
 */

function BaseEdge(vertex1, vertex2, isDirect, weight, upText) {
    this.vertex1 = vertex1;
    this.vertex2 = vertex2;
    this.arrayStyleStart = "";
    this.arrayStyleFinish = "";

    this.isDirect = isDirect;
    this.weight = 0;
    this.text = "";
    this.useWeight = false;
    this.id = 0;
    this.model = new EdgeModel();

    if (upText === undefined)
        this.upText = "";
    else
        this.upText = upText;

    if (weight !== undefined)
        this.SetWeight(weight);

    this.ownStyles = {};
}

BaseEdge.prototype.copyFrom = function (other) {
    this.vertex1 = other.vertex1;
    this.vertex2 = other.vertex2;
    this.arrayStyleStart = other.arrayStyleStart;
    this.arrayStyleFinish = other.arrayStyleFinish;

    this.isDirect = other.isDirect;
    this.weight = other.weight;
    this.text = other.text;
    this.useWeight = other.useWeight;
    this.id = other.id;
    this.model = new EdgeModel();
    this.model.copyFrom(other.model);

    this.upText = other.upText;

    this.ownStyles = FullObjectCopy(other.ownStyles);
}

BaseEdge.prototype.SaveToXML = function () {
    return "\t<edge " +
        "source=\"" + this.vertex1.id + "\" " +
        "target=\"" + this.vertex2.id + "\" " +
        "isDirect=\"" + this.isDirect + "\" " +
        "weight=\"" + this.weight + "\" " +
        "useWeight=\"" + this.useWeight + "\" " +
        "id=\"" + this.id + "\" " +
        "text=\"" + encodeURIComponent(this.text) + "\" " +
        "upText=\"" + encodeURIComponent(this.upText) + "\" " +
        "arrayStyleStart=\"" + this.arrayStyleStart + "\" " +
        "arrayStyleFinish=\"" + this.arrayStyleFinish + "\" " +
        ((Object.keys(this.ownStyles).length > 0) ? "ownStyles = \"" + encodeURIComponent(JSON.stringify(this.ownStyles)) + "\" " : "") +
        this.model.SaveToXML() +
        "></edge>\n";
}

BaseEdge.prototype.LoadFromXML = function (xml, graph) {
    var attr = xml.attr('vertex1');
    if (typeof attr === 'undefined') {
        attr = xml.attr('source');
    }
    this.vertex1 = graph.FindVertex(typeof attr !== 'undefined' ? attr : xml.attr('graph1'));
    var attr = xml.attr('vertex2');
    if (typeof attr === 'undefined') {
        attr = xml.attr('target');
    }
    this.vertex2 = graph.FindVertex(typeof attr !== 'undefined' ? attr : xml.attr('graph2'));
    this.isDirect = xml.attr('isDirect') == "true";
    this.weight = parseFloat(xml.attr('weight'));
    if (isNaN(this.weight)) {
        this.weight = 1;
    }
    this.hasPair = xml.attr('hasPair') == "true";
    this.useWeight = xml.attr('useWeight') == "true";
    this.id = xml.attr('id');
    this.text = xml.attr("text") == null ? "" : decodeURIComponent(xml.attr("text"));
    this.arrayStyleStart = xml.attr("arrayStyleStart") == null ? "" : xml.attr("arrayStyleStart");
    this.arrayStyleFinish = xml.attr("arrayStyleFinish") == null ? "" : xml.attr("arrayStyleFinish");
    this.upText = xml.attr('upText');
    if (typeof this.upText === 'undefined') {
        this.upText = "";
    }
    else {
        this.upText = decodeURIComponent(this.upText);
    }

    var ownStyle = xml.attr('ownStyles');
    if (typeof ownStyle !== 'undefined') {
        var parsedSave = decodeURIComponent(JSON.parse(ownStyle));

        for (var indexField in parsedSave) {
            var index = parseInt(indexField);
            this.ownStyles[index] = FullObjectCopy(this.getStyleFor(index));
            for (var field in parsedSave[indexField]) {
                if (this.ownStyles[index].ShouldLoad(field))
                    this.ownStyles[index][field] = parsedSave[indexField][field];
            }
        }
    }

    this.model.LoadFromXML(xml);
}

BaseEdge.prototype.GetPixelLength = function () {
    if (this.vertex1 == this.vertex2) {
        return this.model.GetLoopSize() * 2 * Math.PI;
    }
    else {
        return Point.distance(this.vertex1.position, this.vertex2.position);
    }
}

BaseEdge.prototype.GetWeight = function () {
    return this.useWeight ? this.weight : 1;
}

BaseEdge.prototype.GetText = function () {
    return this.text.length > 0 ? this.text : (this.useWeight ? this.weight.toString() : "");
}

BaseEdge.prototype.GetUpText = function () {
    return this.upText;
}

BaseEdge.prototype.GetStartEdgeStyle = function () {
    return this.arrayStyleStart;
}

BaseEdge.prototype.GetFinishEdgeStyle = function () {
    return (this.arrayStyleFinish != "" ? this.arrayStyleFinish : (this.isDirect ? "arrow" : ""));
}

BaseEdge.prototype.HitTest = function (pos) {
    var positions = this.GetEdgePositionsShift();
    return this.model.HitTest(positions[0], positions[1], pos);
}

BaseEdge.prototype.GetEdgePositionsShift = function () {
    return this.GetEdgePositions();
}

BaseEdge.prototype.GetEdgePositions = function () {
    var res = [];

    if (this.vertex1 == this.vertex2) {
        res.push(this.vertex1.position);
        res.push(this.vertex2.position);
        return res;
    }

    var position1 = this.vertex1.position;
    var position2 = this.vertex2.position;
    var diameter1 = this.vertex1.model.diameter + parseInt(this.vertex1.currentStyle.GetStyle({}, this.vertex1).lineWidth);
    var diameter2 = this.vertex2.model.diameter + parseInt(this.vertex2.currentStyle.GetStyle({}, this.vertex2).lineWidth);

    var direction = position1.subtract(position2);

    var direction1 = direction;
    var direction2 = direction;
    var d1 = diameter1;
    var d2 = diameter2;

    if (this.model.type == EdgeModels.cruvled) {
        var dist = position1.distance(position2);
        var point1 = this.model.GetCurvedPoint(position1, position2, 10.0 / dist);
        direction1 = position1.subtract(point1);

        var point2 = this.model.GetCurvedPoint(position1, position2, 1.0 - 10.0 / dist);
        direction2 = position2.subtract(point2);

        d2 = diameter2;
    }
    else {
        direction2 = direction2.multiply(-1);
    }

    direction1.normalize(1.0);
    direction2.normalize(1.0);

    var vertexes = [];
    vertexes.push({ vertex: this.vertex1, direction: direction1, position: position1, diameter: d1 });
    vertexes.push({ vertex: this.vertex2, direction: direction2, position: position2, diameter: d2 });

    vertexes.forEach(function (data) {
        var shape = data.vertex.currentStyle.GetStyle({}, data.vertex).shape;
        if (shape == VertexCircleShape) {
            var direction = data.direction.multiply(0.5);

            res.push(data.position.subtract(direction.multiply(data.diameter)));
        }
        else {
            var lineFinish1 = data.direction.multiply(-1).multiply(1000.0);

            var pointsVertex1 = GetPointsForShape(shape, data.diameter);
            pointsVertex1.push(pointsVertex1[0]);

            for (var i = 0; i < pointsVertex1.length - 1; i++) {
                var hitText = Point.hitTest(new Point(0, 0), lineFinish1, pointsVertex1[i], pointsVertex1[i + 1]);
                if (hitText != null) {
                    res.push(data.position.add(hitText));
                    break;
                }
            }
        }
    });


    return res;
}

BaseEdge.prototype.SetWeight = function (weight) {
    var useWeight = false;
    if (!isNaN(parseInt(weight, 10))) {
        useWeight = true;
    }
    weight = (!isNaN(parseInt(weight, 10)) && weight >= 0) ? weight : 1;

    this.weight = Number(weight);
    this.useWeight = useWeight;
}

BaseEdge.prototype.SetUpText = function (text) {
    this.upText = text;
}

BaseEdge.prototype.resetOwnStyle = function (index) {
    if (this.ownStyles.hasOwnProperty(index)) {
        delete this.ownStyles[index];
    }
}

BaseEdge.prototype.setOwnStyle = function (index, style) {
    this.ownStyles[index] = style;
}

BaseEdge.prototype.getStyleFor = function (index) {
    if (this.ownStyles.hasOwnProperty(index)) {
        return this.ownStyles[index];
    }
    else {
        var style = null;

        if (index == 0)
            style = globalApplication.GetStyle("edge", "common");
        else
            style = globalApplication.GetStyle("edge", "selected", undefined, index - 1);

        return style;
    }
}

BaseEdge.prototype.hasOwnStyleFor = function (index) {
    return this.ownStyles.hasOwnProperty(index);
}/**
 * Graph drawer.
 */

// Test graph: http://localhost:8080/?graph=oimDPgsdgiAjWGBHZZcst


// Vertex shape
const VertexCircleShape = 0,
    VertexSquareShape = 1,
    VertexTriangleShape = 2,
    VertexPentagonShape = 3,
    VertexHomeShape = 4;

// Common text position
const CommonTextCenter = 0,
    CommonTextUp = 1;

function GetSquarePoints(diameter) {
    var res = [];

    var a = diameter;
    res.push(new Point(-a / 2, - a / 2));
    res.push(new Point(a / 2, -a / 2));
    res.push(new Point(a / 2, a / 2));
    res.push(new Point(-a / 2, a / 2));

    return res;
}

function GetTrianglePoints(diameter) {
    var res = [];

    var effectiveDiameter = diameter * 1.5;
    var upOffset = effectiveDiameter / 2;
    var downOffset = effectiveDiameter / 4;
    var lrOffset = effectiveDiameter * 3 / (Math.sqrt(3) * 4);

    res.push(new Point(0, - upOffset));
    res.push(new Point(lrOffset, downOffset));
    res.push(new Point(- lrOffset, downOffset));

    return res;
}

function GetPentagonPoints(diameter) {
    var res = [];

    var baseValue = diameter / 2 * 1.2;

    res.push(new Point(0, - baseValue));
    res.push((new Point(0, - baseValue)).rotate(new Point(0, 0), 72));
    res.push((new Point(0, - baseValue)).rotate(new Point(0, 0), 72 * 2));
    res.push((new Point(0, - baseValue)).rotate(new Point(0, 0), 72 * 3));
    res.push((new Point(0, - baseValue)).rotate(new Point(0, 0), 72 * 4));
    res.push((new Point(0, - baseValue)).rotate(new Point(0, 0), 72 * 5));

    return res;
}

function GetPointsForShape(shape, diameter) {
    var pointsVertex1 = null;
    switch (parseInt(shape)) {
        case VertexSquareShape: pointsVertex1 = GetSquarePoints(diameter); break;
        case VertexTriangleShape: pointsVertex1 = GetTrianglePoints(diameter); break;
        case VertexPentagonShape: pointsVertex1 = GetPentagonPoints(diameter); break;
    }
    return pointsVertex1;
}

function GetSizeForShape(shape, diameter) {
    switch (parseInt(shape)) {
        case VertexSquareShape: return diameter; break;
        case VertexTriangleShape: return diameter * 1.5; break;
        case VertexPentagonShape: return diameter * 1.2; break;
    }
    return diameter;
}

function BaseVertexStyle() {
    this.baseStyles = [];
}

BaseVertexStyle.prototype.GetStyle = function (baseStyle, object) {
    this.baseStyles.forEach(function (element) {
        var styleObject = globalApplication.GetStyle("vertex", element, object);
        baseStyle = styleObject.GetStyle(baseStyle, object);
    });

    if (this.hasOwnProperty('lineWidth'))
        baseStyle.lineWidth = this.lineWidth;
    if (this.hasOwnProperty('strokeStyle'))
        baseStyle.strokeStyle = this.strokeStyle;
    if (this.hasOwnProperty('fillStyle'))
        baseStyle.fillStyle = this.fillStyle;
    if (this.hasOwnProperty('mainTextColor'))
        baseStyle.mainTextColor = this.mainTextColor;
    if (this.hasOwnProperty('shape'))
        baseStyle.shape = this.shape;
    if (this.hasOwnProperty('upTextColor'))
        baseStyle.upTextColor = this.upTextColor;
    if (this.hasOwnProperty('commonTextPosition'))
        baseStyle.commonTextPosition = this.commonTextPosition;

    baseStyle.lineWidth = parseInt(baseStyle.lineWidth);

    return this.FixNewFields(baseStyle);
}

BaseVertexStyle.prototype.FixNewFields = function (style) {
    if (!style.hasOwnProperty('shape'))
        style.shape = VertexCircleShape;

    if (!style.hasOwnProperty('commonTextPosition'))
        style.commonTextPosition = CommonTextCenter;

    return style;
}

BaseVertexStyle.prototype.Clear = function () {
    delete this.lineWidth;
    delete this.strokeStyle;
    delete this.fillStyle;
    delete this.mainTextColor;
    delete this.shape;
    delete this.upTextColor;
    delete this.commonTextPosition;
    delete this.lineWidth;
}

BaseVertexStyle.prototype.ShouldLoad = function (field) {
    return field != "baseStyles";
}

// Common style of Graphs.
function CommonVertexStyle() {
    BaseVertexStyle.apply(this, arguments);

    this.lineWidth = 2;
    this.strokeStyle = '#c7b7c7';
    this.fillStyle = '#68aeba';
    this.mainTextColor = '#f0d543';
    this.shape = VertexCircleShape;
    this.upTextColor = '#68aeba';
    this.commonTextPosition = CommonTextCenter;

    this.baseStyles = [];
}

CommonVertexStyle.prototype = Object.create(BaseVertexStyle.prototype);

function CommonPrintVertexStyle() {
    BaseVertexStyle.apply(this, arguments);

    this.strokeStyle = '#000000';
    this.fillStyle = '#FFFFFF';
    this.mainTextColor = '#000000';

    this.baseStyles.push("common");
}

function HoverVertexStyle() {
    BaseVertexStyle.apply(this, arguments);
    this.strokeStyle = '#f0d543';
    this.mainTextColor = '#f0d543';
    this.fillStyle = '#0000FF';

    this.baseStyles.push("common");
}
HoverVertexStyle.prototype = Object.create(BaseVertexStyle.prototype)

CommonPrintVertexStyle.prototype = Object.create(BaseVertexStyle.prototype);

// Selected style of Graphs.
function SelectedVertexStyle0() {
    BaseVertexStyle.apply(this, arguments);

    this.strokeStyle = '#f0d543';
    this.mainTextColor = '#f0d543';
    this.fillStyle = '#c7627a';

    this.baseStyles.push("common");
}

SelectedVertexStyle0.prototype = Object.create(BaseVertexStyle.prototype);

function SelectedVertexStyle1() {
    BaseVertexStyle.apply(this, arguments);

    this.strokeStyle = '#7a9ba0';
    this.mainTextColor = '#c3d2d5';
    this.fillStyle = '#534641';

    this.baseStyles.push("selected");
}

SelectedVertexStyle1.prototype = Object.create(BaseVertexStyle.prototype);

function SelectedVertexStyle2() {
    BaseVertexStyle.apply(this, arguments);

    this.strokeStyle = '#8C4C86';
    this.mainTextColor = '#dbbdd8';
    this.fillStyle = '#253267';

    this.baseStyles.push("selected");
}

SelectedVertexStyle2.prototype = Object.create(BaseVertexStyle.prototype);

function SelectedVertexStyle3() {
    BaseVertexStyle.apply(this, arguments);

    this.strokeStyle = '#6188FF';
    this.mainTextColor = '#6188FF';
    this.fillStyle = '#E97CF9';

    this.baseStyles.push("selected");
}

SelectedVertexStyle3.prototype = Object.create(BaseVertexStyle.prototype);

function SelectedVertexStyle4() {
    BaseVertexStyle.apply(this, arguments);

    this.strokeStyle = '#C6B484';
    this.mainTextColor = '#C6B484';
    this.fillStyle = '#E0DEE1';

    this.baseStyles.push("selected");
}

SelectedVertexStyle4.prototype = Object.create(BaseVertexStyle.prototype);

function SelectedPrintVertexStyle() {
    BaseVertexStyle.apply(this, arguments);

    this.strokeStyle = '#000000';
    this.mainTextColor = '#000000';
    this.fillStyle = '#AAAAAA';

    this.baseStyles.push("printed");
}

SelectedPrintVertexStyle.prototype = Object.create(BaseVertexStyle.prototype);

var DefaultSelectedGraphStyles = [new SelectedVertexStyle0(), new SelectedVertexStyle1(),
new SelectedVertexStyle2(), new SelectedVertexStyle3(), new SelectedVertexStyle4()];

var DefaultPrintSelectedGraphStyles = [new SelectedPrintVertexStyle()];

function BaseVertexDrawer(context) {
    this.context = context;
}

BaseVertexDrawer.prototype.Draw = function (baseGraph, graphStyle) {
    this.SetupStyle(graphStyle);
    this.DrawShape(baseGraph);

    if (this.currentStyle.lineWidth != 0)
        this.context.stroke();

    this.context.fill();

    var shapeSize = GetSizeForShape(graphStyle.shape, baseGraph.model.diameter + graphStyle.lineWidth);

    if (graphStyle.commonTextPosition == CommonTextCenter) {
        this.DrawCenterText(baseGraph.position, baseGraph.mainText, graphStyle.mainTextColor, graphStyle.fillStyle, true, true, 16);
        // Top text
        this.DrawCenterText(baseGraph.position.add(new Point(0, - shapeSize / 2.0 - 9.0)),
            baseGraph.upText, graphStyle.upTextColor, graphStyle.strokeStyle, false, false, 12.0);
    }
    else if (graphStyle.commonTextPosition == CommonTextUp) {
        this.DrawCenterText(baseGraph.position.add(new Point(0, - shapeSize / 2.0 - 7.0)), baseGraph.mainText, graphStyle.mainTextColor, graphStyle.fillStyle, true, false, 16);
        // Top text
        this.DrawCenterText(baseGraph.position.add(new Point(0, shapeSize / 2.0 + 9.0)), baseGraph.upText, graphStyle.upTextColor, graphStyle.strokeStyle, false, false, 12.0);
    }
    /*	
      // Bottom text
      this.DrawCenterText(baseGraph.position.add(new Point(0, + baseGraph.model.diameter / 2.0 + 7.0)), 
        "Text 2", graphStyle.fillStyle, false, 12.0);
    */
}

BaseVertexDrawer.prototype.SetupStyle = function (style) {
    this.currentStyle = style;
    this.context.lineWidth = style.lineWidth;
    this.context.strokeStyle = style.strokeStyle;
    this.context.fillStyle = style.fillStyle;
}

BaseVertexDrawer.prototype.DrawShape = function (baseGraph) {
    this.context.beginPath();
    if (this.currentStyle.shape == VertexCircleShape) {
        this.context.arc(baseGraph.position.x, baseGraph.position.y, baseGraph.model.diameter / 2.0, 0, 2 * Math.PI);
    }
    else {
        var points = GetPointsForShape(this.currentStyle.shape, baseGraph.model.diameter);

        this.context.moveTo(baseGraph.position.x + points[points.length - 1].x, baseGraph.position.y + points[points.length - 1].y);

        var context = this.context;

        points.forEach(function (point) {
            context.lineTo(baseGraph.position.x + point.x, baseGraph.position.y + point.y);
        });
    }

    this.context.closePath();
}

BaseVertexDrawer.prototype.DrawText = function (position, text, color, outlineColor, outline, font) {
    this.context.fillStyle = color;
    this.context.font = font;
    this.context.lineWidth = 4;
    this.context.strokeStyle = outlineColor;

    if (outline) {
        this.context.save();
        this.context.lineJoin = 'round';
        this.context.strokeText(text, position.x, position.y);
        this.context.restore();
    }

    this.context.fillText(text, position.x, position.y);
}

BaseVertexDrawer.prototype.DrawCenterText = function (position, text, color, outlineColor, bold, outline, size) {
    this.context.textBaseline = "middle";
    this.context.font = (bold ? "bold " : "") + size + "px sans-serif";
    var textWidth = this.context.measureText(text).width;
    this.DrawText(new Point(position.x - textWidth / 2, position.y), text, color, outlineColor, outline, this.context.font);
}

/**
 * Graph drawer.
 */


const lineDashTypes = [
    [],
    [4, 4],
    [12, 12],
    [16, 4, 4, 4],
];

// Common text position
const WeightTextCenter = 0,
    WeightTextUp = 1;

function BaseEdgeStyle() {
    this.baseStyles = [];
}

BaseEdgeStyle.prototype.GetStyle = function (baseStyle, object) {
    this.baseStyles.forEach(function (element) {
        var styleObject = globalApplication.GetStyle("edge", element, object);
        baseStyle = styleObject.GetStyle(baseStyle, object);
    });

    if (this.hasOwnProperty('weightText'))
        baseStyle.weightText = this.weightText;
    if (this.hasOwnProperty('strokeStyle'))
        baseStyle.strokeStyle = this.strokeStyle;
    if (this.hasOwnProperty('fillStyle'))
        baseStyle.fillStyle = this.fillStyle;
    if (this.hasOwnProperty('textPadding'))
        baseStyle.textPadding = this.textPadding;
    if (this.hasOwnProperty('textStrockeWidth'))
        baseStyle.textStrockeWidth = this.textStrockeWidth;
    if (this.hasOwnProperty('lineDash'))
        baseStyle.lineDash = this.lineDash;
    if (this.hasOwnProperty('additionalTextColor'))
        baseStyle.additionalTextColor = this.additionalTextColor;
    if (this.hasOwnProperty('weightPosition'))
        baseStyle.weightPosition = this.weightPosition;

    return this.FixNewFields(baseStyle);
}

BaseEdgeStyle.prototype.FixNewFields = function (style) {
    if (!style.hasOwnProperty('lineDash'))
        style.lineDash = 0;

    if (!style.hasOwnProperty('weightPosition'))
        style.weightPosition = WeightTextCenter;

    return style;
}

BaseEdgeStyle.prototype.Clear = function () {
    delete this.weightText;
    delete this.strokeStyle;
    delete this.fillStyle;
    delete this.textPadding;
    delete this.textStrockeWidth;
    delete this.lineDash;
    delete this.additionalTextColor;
    delete this.weightPosition;
}

BaseEdgeStyle.prototype.ShouldLoad = function (field) {
    return field != "baseStyles";
}

function CommonEdgeStyle() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#c7b7c7';
    this.weightText = '#f0d543';
    this.fillStyle = '#68aeba';
    this.textPadding = 4;
    this.textStrockeWidth = 2;
    this.lineDash = 0;
    this.additionalTextColor = '#c7b7c7';
    this.weightPosition = WeightTextCenter;
}

CommonEdgeStyle.prototype = Object.create(BaseEdgeStyle.prototype);

function CommonPrintEdgeStyle() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#000000';
    this.weightText = '#000000';
    this.fillStyle = '#FFFFFF';
    this.textPadding = 4;
    this.textStrockeWidth = 2;

    this.baseStyles.push("common");
}
CommonPrintEdgeStyle.prototype = Object.create(BaseEdgeStyle.prototype);

function SelectedEdgeStyle0() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#f0d543';
    this.weightText = '#f0d543';
    this.fillStyle = '#c7627a';

    this.baseStyles.push("common");
}
SelectedEdgeStyle0.prototype = Object.create(BaseEdgeStyle.prototype);

function SelectedEdgeStyle1() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#8FBF83';
    this.weightText = '#8FBF83';
    this.fillStyle = '#F9F9D5';

    this.baseStyles.push("selected");
}
SelectedEdgeStyle1.prototype = Object.create(BaseEdgeStyle.prototype);

function SelectedEdgeStyle2() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#8C4C86';
    this.weightText = '#8C4C86';
    this.fillStyle = '#253267';

    this.baseStyles.push("selected");
}
SelectedEdgeStyle2.prototype = Object.create(BaseEdgeStyle.prototype);


function SelectedEdgeStyle3() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#6188FF';
    this.weightText = '#6188FF';
    this.fillStyle = '#E97CF9';

    this.baseStyles.push("selected");
}
SelectedEdgeStyle3.prototype = Object.create(BaseEdgeStyle.prototype);


function SelectedEdgeStyle4() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#C6B484';
    this.weightText = '#C6B484';
    this.fillStyle = '#E0DEE1';

    this.baseStyles.push("selected");
}
SelectedEdgeStyle4.prototype = Object.create(BaseEdgeStyle.prototype);

function SelectedEdgePrintStyle() {
    BaseEdgeStyle.apply(this, arguments);

    this.strokeStyle = '#AAAAAA';
    this.weightText = '#000000';
    this.fillStyle = '#AAAAAA';

    this.baseStyles.push("printed");
}
SelectedEdgePrintStyle.prototype = Object.create(BaseEdgeStyle.prototype);

var DefaultSelectedEdgeStyles = [new SelectedEdgeStyle0(), new SelectedEdgeStyle1(),
new SelectedEdgeStyle2(), new SelectedEdgeStyle3(), new SelectedEdgeStyle4()];

var DefaultPrintSelectedEdgeStyles = [new SelectedEdgePrintStyle()];

function BaseEdgeDrawer(context, drawObjects) {
    if (drawObjects === undefined) {
        drawObjects = null;
    }

    this.context = context;

    this.drawObject = null;
    this.drawArc = null;
    this.startArrowDiretion = null;
    this.finishArrowDiretion = null;
    this.textCenterObject = null;
    this.getPointOnArc = null;

    if (drawObjects) {
        if (drawObjects.hasOwnProperty("drawObject"))
            this.drawObject = drawObjects.drawObject;
        if (drawObjects.hasOwnProperty("drawArc"))
            this.drawArc = drawObjects.drawArc;
        if (drawObjects.hasOwnProperty("startArrowDiretion"))
            this.startArrowDiretion = drawObjects.startArrowDiretion;
        if (drawObjects.hasOwnProperty("finishArrowDiretion"))
            this.finishArrowDiretion = drawObjects.finishArrowDiretion;
        if (drawObjects.hasOwnProperty("textCenterObject"))
            this.textCenterObject = drawObjects.textCenterObject;
        if (drawObjects.hasOwnProperty("getPointOnArc"))
            this.getPointOnArc = drawObjects.getPointOnArc;
    }
}

BaseEdgeDrawer.prototype.Draw = function (baseEdge, arcStyle) {
    if (this.drawObject && this.drawObject != this) {
        this.drawObject.Draw(baseEdge, arcStyle);
        return;
    }

    this.SetupStyle(baseEdge, arcStyle);

    var lengthArrow = Math.max(baseEdge.model.width * 4, 8);
    var widthArrow = Math.max(baseEdge.model.width * 2, 4);
    var position1 = baseEdge.vertex1.position;
    var position2 = baseEdge.vertex2.position;
    var direction = position1.subtract(position2);
    direction.normalize(1.0);
    var positions = baseEdge.GetEdgePositionsShift();

    var hasStartStyle = !position1.equals(position2) && baseEdge.GetStartEdgeStyle() != "";
    var hasFinishStyle = !position1.equals(position2) && baseEdge.GetFinishEdgeStyle() != "";

    var arcPos1 = positions[0];
    var arcPos2 = positions[1];

    if (hasStartStyle) {
        var dirArrow = this.GetStartArrowDiretion(positions[0], positions[1], lengthArrow);
        arcPos1 = arcPos1.add(dirArrow.multiply(lengthArrow / 2));
    }

    if (hasFinishStyle) {
        var dirArrow = this.GetFinishArrowDiretion(positions[0], positions[1], lengthArrow);
        arcPos2 = arcPos2.add(dirArrow.multiply(-lengthArrow / 2));
    }

    this.DrawArc(arcPos1, arcPos2, arcStyle);

    this.context.fillStyle = this.context.strokeStyle;
    this.context.lineWidth = 0;

    if (hasStartStyle) {
        this.DrawArrow(positions[0], this.GetStartArrowDiretion(positions[0], positions[1], lengthArrow), lengthArrow, widthArrow);
    }
    if (hasFinishStyle) {
        this.DrawArrow(positions[1], this.GetFinishArrowDiretion(positions[0], positions[1], lengthArrow), lengthArrow, widthArrow);
    }

    this.SetupStyle(baseEdge, arcStyle);

    if (arcStyle.weightPosition == WeightTextCenter) {
        if (baseEdge.GetText().length > 0) {
            this.DrawWeight(positions[0], positions[1], baseEdge.GetText(), arcStyle, false);
        }

        if (baseEdge.GetUpText().length > 0) {
            this.DrawUpText(positions[0], positions[1], baseEdge.GetUpText(), arcStyle, false, arcStyle.additionalTextColor, baseEdge.model.width / 2 + 20, null);
        }
    }
    else if (arcStyle.weightPosition == WeightTextUp) {
        if (baseEdge.GetText().length > 0) {
            this.DrawUpText(positions[0], positions[1], baseEdge.GetText(), arcStyle, false, arcStyle.weightText, baseEdge.model.width / 2 + 10, "16px");
        }

        if (baseEdge.GetUpText().length > 0) {
            this.DrawUpText(positions[0], positions[1], baseEdge.GetUpText(), arcStyle, false, arcStyle.additionalTextColor, - baseEdge.model.width / 2 - 15, null);
        }
    }
}


BaseEdgeDrawer.prototype.SetupStyle = function (baseEdge, arcStyle) {
    this.context.lineWidth = baseEdge.model.width;
    this.context.strokeStyle = arcStyle.strokeStyle;
    this.context.fillStyle = arcStyle.fillStyle;
    this.model = baseEdge.model;
    this.style = arcStyle;
}

BaseEdgeDrawer.prototype.DrawArc = function (position1, position2, arcStyle) {
    if (this.drawArc && this.drawArc != this) {
        this.drawArc.DrawArc(position1, position2, arcStyle);
        return;
    }

    this.context.setLineDash(lineDashTypes[arcStyle.lineDash]);
    if (position1.equals(position2)) {
        this.context.beginPath();
        this.context.arc(position1.x - Math.cos(this.model.GetLoopShiftAngel()) * this.model.GetLoopSize(),
            position1.y - Math.sin(this.model.GetLoopShiftAngel()) * this.model.GetLoopSize(), this.model.GetLoopSize(), 0, 2 * Math.PI);
        this.context.stroke();
    }
    else {
        this.context.beginPath();
        this.context.moveTo(position1.x, position1.y);
        this.context.lineTo(position2.x, position2.y);
        this.context.stroke();
    }
    this.context.setLineDash([]);
}

BaseEdgeDrawer.prototype.DrawWeight = function (position1, position2, text, arcStyle, hasPair) {
    var centerPoint = this.GetTextCenterPoint(position1, position2, hasPair, arcStyle);

    this.context.font = "bold 16px sans-serif";
    this.context.textBaseline = "middle";
    this.context.lineWidth = arcStyle.textStrockeWidth;
    this.context.fillStyle = arcStyle.fillStyle;

    var widthText = this.context.measureText(text).width;

    this.context.beginPath();
    this.context.rect(centerPoint.x - widthText / 2 - arcStyle.textPadding / 2,
        centerPoint.y - 8 - arcStyle.textPadding / 2,
        widthText + arcStyle.textPadding, 16 + arcStyle.textPadding);
    this.context.closePath();
    this.context.fill();
    this.context.stroke();

    this.context.fillStyle = arcStyle.weightText;
    this.context.fillText(text, centerPoint.x - widthText / 2, centerPoint.y);
}

BaseEdgeDrawer.prototype.DrawUpText = function (position1, position2, text, arcStyle, hasPair, color, offset, fontSize) {
    var centerPoint = this.GetTextCenterPoint(position1, position2, hasPair, arcStyle);

    this.context.font = fontSize == null ? "bold 12px sans-serif" : "bold " + fontSize + " sans-serif";
    this.context.textBaseline = "middle";

    var widthText = this.context.measureText(text).width;

    this.context.fillStyle = color;

    var vectorEdge = new Point(position2.x - position1.x, position2.y - position1.y);
    var angleRadians = Math.atan2(vectorEdge.y, vectorEdge.x);
    if (angleRadians > Math.PI / 2 || angleRadians < -Math.PI / 2) {
        vectorEdge = new Point(position1.x - position2.x, position1.y - position2.y);
        angleRadians = Math.atan2(vectorEdge.y, vectorEdge.x);
    }
    var normalize = vectorEdge.normal().normalizeCopy(offset);
    this.context.save();
    this.context.translate(centerPoint.x - normalize.x, centerPoint.y - normalize.y);
    this.context.rotate(angleRadians);
    this.context.textAlign = "center";

    this.context.fillText(text, 0, 0);

    this.context.restore();
}

BaseEdgeDrawer.prototype.DrawArrow = function (position, direction, length, width) {
    var normal = direction.normal();

    var pointOnLine = position.subtract(direction.multiply(length));
    var point1 = pointOnLine.add(normal.multiply(width));
    var point2 = pointOnLine.add(normal.multiply(-width));

    this.context.beginPath();
    this.context.moveTo(position.x, position.y);
    this.context.lineTo(point1.x, point1.y);
    this.context.lineTo(point2.x, point2.y);
    this.context.lineTo(position.x, position.y);
    this.context.closePath();
    this.context.fill();
}

BaseEdgeDrawer.prototype.GetStartArrowDiretion = function (position1, position2, lengthArrow) {
    if (this.startArrowDiretion && this.startArrowDiretion != this) {
        return this.startArrowDiretion.GetStartArrowDiretion(position1, position2, lengthArrow);
    }

    var direction = position1.subtract(position2);
    direction.normalize(1.0);
    return direction;
}

BaseEdgeDrawer.prototype.GetFinishArrowDiretion = function (position1, position2, lengthArrow) {
    if (this.finishArrowDiretion && this.finishArrowDiretion != this) {
        return this.finishArrowDiretion.GetFinishArrowDiretion(position1, position2, lengthArrow);
    }

    var direction = position2.subtract(position1);
    direction.normalize(1.0);
    return direction;
}

BaseEdgeDrawer.prototype.GetTextCenterPoint = function (position1, position2, hasPair, arcStyle) {
    if (this.textCenterObject && this.textCenterObject != this) {
        return this.textCenterObject.GetTextCenterPoint(position1, position2, hasPair, arcStyle);
    }

    var textShift = Math.min(12 / position1.subtract(position2).length(), 0.4);
    var centerPoint = Point.interpolate(position1, position2, 0.5);
    if (position1.equals(position2)) {
        centerPoint.y = centerPoint.y - Math.cos(this.model.GetLoopShiftAngel()) * this.model.GetLoopSize() * 2;
        centerPoint.x = centerPoint.x - Math.sin(this.model.GetLoopShiftAngel()) * this.model.GetLoopSize() * 2;
    }

    return centerPoint;
}

BaseEdgeDrawer.prototype.GetPointOnArc = function (position1, position2, procent) {
    if (this.getPointOnArc && this.getPointOnArc != this) {
        return this.getPointOnArc.GetPointOnArc(position1, position2, procent);
    }

    return Point.interpolate(position1, position2, procent);
}

function ProgressArcDrawer(context, baseDrawer, progress) {
    this.context = context;
    this.baseDrawer = baseDrawer;
    this.progress = progress;
}

ProgressArcDrawer.prototype = Object.create(BaseEdgeDrawer.prototype);


ProgressArcDrawer.prototype.Draw = function (baseEdge, arcStyle) {
    this.baseDrawer.Draw(baseEdge, arcStyle);

    this.context.lineWidth = 10;

    var positions = baseEdge.GetEdgePositionsShift();
    var progressSize = 10;

    if (positions[0].equals(positions[1])) {
        var sizeInRadian = progressSize / (2 * Math.PI * this.baseDrawer.model.GetLoopSize()) * 6;

        this.context.beginPath();
        this.context.arc(positions[0].x - Math.cos(this.baseDrawer.model.GetLoopShiftAngel()) * this.baseDrawer.model.GetLoopSize(),
            positions[0].y - Math.sin(this.baseDrawer.model.GetLoopShiftAngel()) * this.baseDrawer.model.GetLoopSize(), this.baseDrawer.model.GetLoopSize(), this.progress * 2 * Math.PI, this.progress * 2 * Math.PI + sizeInRadian);
        this.context.stroke();
    }
    else {
        var startPosition = this.baseDrawer.GetPointOnArc(positions[0], positions[1], this.progress);
        var vectorOffset = positions[0].subtract(positions[1]).normalizeCopy(progressSize);
        var finishPosition = startPosition.add(vectorOffset);

        this.context.beginPath();
        this.context.moveTo(startPosition.x, startPosition.y);
        this.context.lineTo(finishPosition.x, finishPosition.y);
        this.context.stroke();
    }
}


function CurvedArcDrawer(context, model) {
    this.context = context;
    this.model = model;
}

CurvedArcDrawer.prototype = Object.create(BaseEdgeDrawer.prototype);

CurvedArcDrawer.prototype.DrawArc = function (position1, position2, arcStyle) {
    this.context.setLineDash(lineDashTypes[arcStyle.lineDash]);
    if (position1.equals(position2)) {
        this.context.beginPath();
        this.context.arc(position1.x - Math.cos(this.model.GetLoopShiftAngel()) * this.model.GetLoopSize(),
            position1.y - Math.sin(this.model.GetLoopShiftAngel()) * this.model.GetLoopSize(), this.model.GetLoopSize(), 0, 2 * Math.PI);
        this.context.closePath();
        this.context.stroke();
    }
    else {
        var points = this.model.GetBezierPoints(position1, position2);
        var firstBezierPoint = points[0];
        var secondBezierPoint = points[1];

        this.context.beginPath();
        this.context.moveTo(position1.x, position1.y);
        this.context.bezierCurveTo(firstBezierPoint.x, firstBezierPoint.y, secondBezierPoint.x, secondBezierPoint.y, position2.x, position2.y);
        this.context.stroke();
    }
    this.context.setLineDash([]);
}

CurvedArcDrawer.prototype.GetStartArrowDiretion = function (position1, position2, lengthArrow) {
    var dist = position1.distance(position2);
    var direction = position1.subtract(this.model.GetCurvedPoint(position1, position2, lengthArrow / dist));
    direction.normalize(1.0);
    return direction;
}

CurvedArcDrawer.prototype.GetFinishArrowDiretion = function (position1, position2, lengthArrow) {
    var dist = position1.distance(position2);
    var direction = position2.subtract(this.model.GetCurvedPoint(position1, position2, 1.0 - lengthArrow / dist));
    direction.normalize(1.0);
    return direction;
}

CurvedArcDrawer.prototype.GetTextCenterPoint = function (position1, position2, hasPair, arcStyle) {
    var centerPoint = this.model.GetCurvedPoint(position1, position2, 0.5)
    if (position1.equals(position2)) {
        centerPoint.y = centerPoint.y - Math.cos(this.model.GetLoopShiftAngel()) * this.model.GetLoopSize() * 2;
        centerPoint.x = centerPoint.x - Math.sin(this.model.GetLoopShiftAngel()) * this.model.GetLoopSize() * 2;
    }

    return centerPoint;
}

CurvedArcDrawer.prototype.GetPointOnArc = function (position1, position2, procent) {
    return this.model.GetCurvedPoint(position1, position2, procent);
}
/**
 * Graph drawer.
 */


function CommonBackgroundStyle() {
    this.commonColor = '#ffffff';
    this.commonOpacity = 1.0;
}

CommonBackgroundStyle.prototype.Clear = function () {
    delete this.commonColor;
    delete this.commonOpacity;
}

CommonBackgroundStyle.prototype.ShouldLoad = function (field) {
    return true;
}

PrintBackgroundStyle.prototype = Object.create(CommonBackgroundStyle.prototype);

function PrintBackgroundStyle() {
    CommonBackgroundStyle.apply(this, arguments);

    this.commonColor = '#ffffff';
    this.commonOpacity = 1.0;
}

function BaseBackgroundDrawer(context) {
    this.context = context;
}

BaseBackgroundDrawer.prototype.Draw = function (style, width, height, position, scale) {
    var context = this.context;

    var rect = new Rect(position, position.add(new Point(width / scale, height / scale)));

    context.clearRect(-rect.minPoint.x, -rect.minPoint.y, rect.size().x + 1, rect.size().y + 1);

    if (style.commonOpacity > 0.0) {
        context.globalAlpha = style.commonOpacity;
        context.fillStyle = style.commonColor;
        context.fillRect(-rect.minPoint.x, -rect.minPoint.y, rect.size().x + 1, rect.size().y + 1);
        context.globalAlpha = 1.0;
    }
}/**
 * File for algorithms.
 *
 */

// Return list of vertex with connected vertex.
function getVertexToVertexArray(graph, ignoryDirection) {
    res = {};

    for (var i = 0; i < graph.edges.length; i++) {
        edge = graph.edges[i];
        if (!res.hasOwnProperty(edge.vertex1.id)) {
            res[edge.vertex1.id] = [];
        }
        res[edge.vertex1.id].push(edge.vertex2);
        if (!edge.isDirect || ignoryDirection) {
            if (!res.hasOwnProperty(edge.vertex2.id)) {
                res[edge.vertex2.id] = [];
            }

            res[edge.vertex2.id].push(edge.vertex1);
        }
    }

    return res;
}

/**
 * Graph class.
 *
 */


function Graph() {
    // List of vertex.
    this.vertices = [];
    // List of arcs.
    this.edges = [];
    // Unique Id of new graph.
    this.uidGraph = 0;
    // Unique Id of new edge.
    this.uidEdge = 10000;
    // Has direction edge.
    this.hasDirect = false;
    // Is graph multi
    this.isMultiGraph = false;
};

// infinity
Graph.prototype.infinity = 1E8;
// Max vertexes
Graph.prototype.maxVertexes = 1000;
// Offset for edges ids.
Graph.prototype.edgesOffset = 10000;

Graph.prototype.AddNewVertex = function (vertex) {
    if (this.vertices.length <= this.maxVertexes) {
        vertex.SetId(this.uidGraph);
        this.uidGraph = this.uidGraph + 1;
        vertex.nodeInfo.title = this.uidGraph;
        vertex.nodeInfo.resources.push(new Resource('https://www.tchlabs.net', 'desc' + this.uidGraph))
        this.vertices.push(vertex);
    }
    return this.vertices.length - 1;
}

Graph.prototype.AddNewEdgeSafe = function (graph1, graph2, isDirect, weight, replaceIfExists = true) {
    return this.AddNewEdge(new BaseEdge(graph1, graph2, isDirect, weight), replaceIfExists);
}

Graph.prototype.AddNewEdge = function (edge, replaceIfExists) {
    edge.id = this.uidEdge;
    this.uidEdge = this.uidEdge + 1;

    var edge1 = this.FindEdgeAny(edge.vertex1.id, edge.vertex2.id);
    var edgeRevert = this.FindEdgeAny(edge.vertex2.id, edge.vertex1.id);
    if (!edge.isDirect) {
        if (edge1 != null && replaceIfExists)
            this.DeleteEdge(edge1);
        if (edgeRevert != null && replaceIfExists)
            this.DeleteEdge(edgeRevert);

        this.edges.push(edge);
    }
    else {
        if (edge1 != null && replaceIfExists)
            this.DeleteEdge(edge1);
        if (edgeRevert != null && !edgeRevert.isDirect && replaceIfExists)
            this.DeleteEdge(edgeRevert);

        this.edges.push(edge);
    }

    this.isMultiGraph = this.checkMutiGraph();

    return this.edges.length - 1;
}


Graph.prototype.DeleteEdge = function (edgeObject) {
    var index = this.edges.indexOf(edgeObject);
    if (index > -1) {
        this.edges.splice(index, 1);
    }

    this.isMultiGraph = this.checkMutiGraph();
}

Graph.prototype.DeleteVertex = function (vertexObject) {
    var index = this.vertices.indexOf(vertexObject);
    if (index > -1) {
        for (var i = 0; i < this.edges.length; i++) {
            if (this.edges[i].vertex1 == vertexObject || this.edges[i].vertex2 == vertexObject) {
                this.DeleteEdge(this.edges[i]);
                i--;
            }
        }
        this.vertices.splice(index, 1);
    }
}

Graph.prototype.HasConnectedNodes = function (vertexObject) {
    var res = false;

    var index = this.vertices.indexOf(vertexObject);
    if (index > -1) {
        for (var i = 0; i < this.edges.length; i++) {
            if (this.edges[i].vertex1 == vertexObject || this.edges[i].vertex2 == vertexObject) {
                res = true;
                break;
            }
        }
    }

    return res;
}

Graph.prototype.FindVertex = function (id) {
    var res = null;
    for (var i = 0; i < this.vertices.length; i++) {
        if (this.vertices[i].id == id) {
            res = this.vertices[i];
            break;
        }
    }

    return res;
}

// depricated
Graph.prototype.FindEdge = function (id1, id2) {
    return this.FindEdgeAny(id1, id2);
}

Graph.prototype.FindEdgeById = function (edgeId) {
    var res = null;
    for (var i = 0; i < this.edges.length; i++) {
        if (this.edges[i].id == edgeId) {
            res = this.edges[i];
            break;
        }
    }

    return res;
}

Graph.prototype.FindEdgeAny = function (id1, id2) {
    var res = null;
    for (var i = 0; i < this.edges.length; i++) {
        if ((this.edges[i].vertex1.id == id1 && this.edges[i].vertex2.id == id2)
            || (!this.edges[i].isDirect && this.edges[i].vertex1.id == id2 && this.edges[i].vertex2.id == id1)) {
            res = this.edges[i];
            break;
        }
    }

    return res;
}

Graph.prototype.FindEdgeMin = function (id1, id2) {
    var res = null;
    var minWeight = this.infinity;
    for (var i = 0; i < this.edges.length; i++) {
        var edge = this.edges[i];
        if ((edge.vertex1.id == id1 && edge.vertex2.id == id2)
            || (!edge.isDirect && edge.vertex1.id == id2 && edge.vertex2.id == id1)) {
            if (edge.weight < minWeight) {
                res = edge;
                minWeight = edge.weight;
            }
        }
    }

    return res;
}

Graph.prototype.FindEdgeMinIgnoreDirection = function (id1, id2) {
    var res = null;
    var minWeight = this.infinity;
    for (var i = 0; i < this.edges.length; i++) {
        var edge = this.edges[i];
        if ((edge.vertex1.id == id1 && edge.vertex2.id == id2)
            || (edge.vertex1.id == id2 && edge.vertex2.id == id1)) {
            if (edge.weight < minWeight) {
                res = edge;
                minWeight = edge.weight;
            }
        }
    }

    return res;
}

Graph.prototype.FindAllEdges = function (id1, id2) {
    var res = [];
    for (var i = 0; i < this.edges.length; i++) {
        var edge = this.edges[i];
        if ((edge.vertex1.id == id1 && edge.vertex2.id == id2)
            || (!edge.isDirect && edge.vertex1.id == id2 && edge.vertex2.id == id1)) {
            res.push(edge);
        }
    }

    return res;
}

Graph.prototype.GetAdjacencyMatrixStr = function () {
    var matrix = "";
    for (var i = 0; i < this.vertices.length; i++) {
        for (var j = 0; j < this.vertices.length; j++) {
            var edge = this.FindEdgeMin(this.vertices[i].id, this.vertices[j].id);
            if (edge != null) {
                matrix += edge.weight;
            }
            else {
                matrix += "0";
            }

            if (j != this.vertices.length) {
                matrix += ", ";
            }

        }
        matrix = matrix + "\n";
    }

    return matrix;
}

Graph.prototype.GetAdjacencyMatrix = function () {
    var matrix = [];

    for (var i = 0; i < this.vertices.length; i++) {
        matrix.push([]);
        var v1 = this.vertices[i];
        for (var j = 0; j < this.vertices.length; j++) {
            var v2 = this.vertices[j];
            var edge = this.FindEdgeMin(v1.id, v2.id);
            if (edge != null) {
                matrix[i][j] = edge.GetWeight();
            }
            else {
                matrix[i][j] = this.infinity;
            }
        }
    }

    return matrix;
}

Graph.prototype.TestAdjacencyMatrix = function (matrix, rowsObj, colsObj, separator) {
    if (separator === undefined) {
        separator = ",";
    }

    var bGoodFormat = true;
    rowsObj.rows = [];
    rowsObj.rows = matrix.split("\n");
    for (j = 0; j < rowsObj.rows.length; ++j) {
        //rowsObj.rows[j] = rowsObj.rows[j].replace(/ /g,'');
        if (rowsObj.rows[j] === "") {
            rowsObj.rows.splice(j--, 1);
        }
    }

    colsObj.cols = [];
    for (var i = 0; i < rowsObj.rows.length; i++) {
        colsObj.cols[i] = this.SplitMatrixString(rowsObj.rows[i], separator);//rowsObj.rows[i].split (",");
        for (j = 0; j < colsObj.cols[i].length; ++j) {
            if (colsObj.cols[i][j] === "") {
                colsObj.cols[i].splice(j--, 1);
            }
        }
        if (colsObj.cols[i].length != rowsObj.rows.length) {
            bGoodFormat = false;
            break;
        }
    }

    return bGoodFormat;
}


Graph.prototype.IsVertexesHasSamePosition = function (position, vertexCount) {
    var res = false;

    for (var j = 0; j < Math.min(this.vertices.length, vertexCount); j++) {
        if (position.distance(this.vertices[j].position) < this.vertices[j].model.diameter * 2) {
            res = true;
            break;
        }
    }

    return res;
}

Graph.prototype.GetRandomPositionOfVertex = function (matrix, vertexIndex, viewportSize) {
    var point = new Point(0, 0);

    var relatedVertex = [];

    for (var j = 0; j < matrix.length; j++) {
        if (j < this.vertices.length && (cols[vertexIndex][j] > 0 || cols[j][vertexIndex] > 0) && j != vertexIndex) {
            relatedVertex.push(this.vertices[j]);
        }
    }


    var diameter = (new VertexModel()).diameter;

    if (relatedVertex.length > 1) {
        for (var j = 0; j < relatedVertex.length; j++) {
            point = point.add(relatedVertex[j].position);
        }

        point = point.multiply(1 / relatedVertex.length);

        point.offset(Math.random() * diameter + (Math.random() ? -1 : 1) * 2 * diameter, Math.random() * diameter + (Math.random() ? -1 : 1) * 2 * diameter);
    }
    else {
        point = new Point(Math.random() * viewportSize.x, Math.random() * viewportSize.y);
    }

    if (this.IsVertexesHasSamePosition(point, matrix.length)) {
        point.offset(Math.random() * diameter + + (Math.random() ? -1 : 1) * 4 * diameter,
            Math.random() * diameter + + (Math.random() ? -1 : 1) * 4 * diameter);
    }

    // Clamp
    point.x = Math.min(Math.max(point.x, diameter), viewportSize.x);
    point.y = Math.min(Math.max(point.y, diameter), viewportSize.y);

    return point;
}

Graph.prototype.VertexesReposition = function (viewportSize, newVertexes) {
    var maxGravityDistanceSqr = Math.max(viewportSize.x, viewportSize.y) / 5.0;
    maxGravityDistanceSqr = maxGravityDistanceSqr * maxGravityDistanceSqr;
    //Math.min(viewportSize.x, viewportSize.y) / 2.0;
    var velocityDamping = 0.85;
    var diameter = (new VertexModel()).diameter;
    var maxDistance = diameter * 3;
    var gravityDistanceSqr = 10 * (maxDistance * maxDistance);
    var edgeGravityKof = 10 / (maxDistance);
    var kCenterForce = 10 / (maxDistance * 10);
    var centerPoint = viewportSize.multiply(0.5);
    var velocityMax = maxDistance * 10;

    var edgesMatrix = {};
    for (var i = 0; i < this.edges.length; i++) {
        edgesMatrix[this.edges[i].vertex1.id + this.edges[i].vertex2.id * 1000] = 1;
        edgesMatrix[this.edges[i].vertex2.id + this.edges[i].vertex1.id * 1000] = 1;
    }

    var startAngel = Math.random() * 180.0;
    for (i = 0; i < newVertexes.length; i++) // loop through vertices
    {
        newVertexes[i].position.orbit(new Point(viewportSize.x / 2, viewportSize.y / 2), (viewportSize.x - diameter * 2) / 2,
            (viewportSize.y - diameter * 2) / 2, 360 * i / newVertexes.length + startAngel);
    }

    var k = 0;
    var bChanged = true;
    while (k < 1000 && bChanged) {
        var vertexData = [];
        for (i = 0; i < newVertexes.length; i++) // loop through vertices
        {
            // Has no in newVertexes.
            var currentVertex = {};
            currentVertex.object = newVertexes[i];
            currentVertex.net_force = new Point(0, 0);
            currentVertex.velocity = new Point(0, 0);
            vertexData.push(currentVertex);

            for (j = 0; j < this.vertices.length; j++) // loop through other vertices
            {
                otherVertex = this.vertices[j];

                if (otherVertex == currentVertex.object) continue;

                // squared distance between "u" and "v" in 2D space
                var rsq = currentVertex.object.position.distanceSqr(otherVertex.position);


                {
                    // counting the repulsion between two vertices
                    var force = (currentVertex.object.position.subtract(otherVertex.position)).normalize(gravityDistanceSqr / rsq);
                    currentVertex.net_force = currentVertex.net_force.add(force);
                }
            }

            for (j = 0; j < this.vertices.length; j++) // loop through edges
            {
                otherVertex = this.vertices[j];
                if (edgesMatrix.hasOwnProperty(currentVertex.object.id + 1000 * otherVertex.id)) {
                    var distance = currentVertex.object.position.distance(otherVertex.position);

                    if (distance > maxDistance) {
                        // countin the attraction
                        var force = (otherVertex.position.subtract(currentVertex.object.position)).normalize(edgeGravityKof * (distance - maxDistance));
                        currentVertex.net_force = currentVertex.net_force.add(force);
                    }
                }
            }

            // Calculate force to center of world.
            var distanceToCenter = centerPoint.distance(currentVertex.object.position);
            var force = centerPoint.subtract(currentVertex.object.position).normalize(distanceToCenter * kCenterForce);
            currentVertex.net_force = currentVertex.net_force.add(force);

            // counting the velocity (with damping 0.85)
            currentVertex.velocity = currentVertex.velocity.add(currentVertex.net_force);
        }

        bChanged = false;

        for (i = 0; i < vertexData.length; i++) // set new positions
        {
            var v = vertexData[i];
            var velocity = v.velocity;
            if (velocity.length() > velocityMax) {
                velocity = velocity.normalize(velocityMax);
            }
            v.object.position = v.object.position.add(velocity);
            if (velocity.length() >= 1) {
                bChanged = true;
            }
        }
        k++;
    }


    // Looks like somthing going wrong and will use circle algorithm for reposition.
    var bbox = this.getGraphBBox();
    if (bbox.size().length() > viewportSize.length() * 1000) {
        for (i = 0; i < newVertexes.length; i++) // loop through vertices
        {
            newVertexes[i].position.orbit(new Point(viewportSize.x / 2, viewportSize.y / 2), (viewportSize.x - diameter * 2) / 2,
                (viewportSize.y - diameter * 2) / 2, 360 * i / newVertexes.length + startAngel);
        }
    }
    else {
        // Try to rotate graph to fill small area.
        var count = 10;
        var agnle = 360.0 / count;
        var viewportAspect = viewportSize.x / viewportSize.y;
        var bestIndex = 0;
        var graphSize = bbox.size();
        var bestAspect = graphSize.x / graphSize.y;
        var center = bbox.center();

        for (var i = 1; i < count; i++) {
            for (j = 0; j < newVertexes.length; j++) // loop through vertices
            {
                newVertexes[j].position.rotate(center, agnle);
            }

            var newBBox = this.getGraphBBox();
            var newAspect = newBBox.size().x / newBBox.size().y;
            if (Math.abs(newAspect - viewportAspect) < Math.abs(bestAspect - viewportAspect)) {
                bestAspect = newAspect;
                bestIndex = i;
            }
        }

        // Rotate to best aspect.
        for (j = 0; j < newVertexes.length; j++) // loop through vertices
        {
            newVertexes[j].position.rotate(center, - agnle * (count - bestIndex - 1));
        }
    }
}

Graph.prototype.SetAdjacencyMatrix = function (matrix, viewportSize, currentEnumVertesType, separator) {
    if (separator === undefined) {
        separator = ",";
    }

    var rowsObj = {};
    var colsObj = {};

    //ViewportSize = viewportSize.subtract(new Point((new VertexModel()).diameter * 2, (new VertexModel()).diameter * 2));

    if (this.TestAdjacencyMatrix(matrix, rowsObj, colsObj, separator)) {
        rows = rowsObj.rows;
        cols = colsObj.cols;

        var clonedEdge = this.edges.slice(0);
        for (var i = 0; i < clonedEdge.length; i++) {
            this.DeleteEdge(clonedEdge[i]);
        }

        var newVertexes = [];
        var bWeightGraph = false;

        for (var i = 0; i < rows.length; i++) {
            for (var j = 0; j < rows.length; j++) {
                if (j >= this.vertices.length) {
                    var newPos = this.GetRandomPositionOfVertex(matrix, j, viewportSize);
                    newVertexes.push(new BaseVertex(newPos.x, newPos.y, currentEnumVertesType));
                    this.AddNewVertex(newVertexes[newVertexes.length - 1]);
                }

                if (cols[i][j] > 0) {
                    var nEdgeIndex = this.AddNewEdgeSafe(this.vertices[i], this.vertices[j], cols[i][j] != cols[j][i], cols[i][j], true);
                    this.FixEdgeCurved(nEdgeIndex);
                    if (nEdgeIndex >= 0) {
                        bWeightGraph = bWeightGraph || this.edges[nEdgeIndex].weight != 1;
                    }
                }
            }
        }

        // Set use weight false, because we have unwieghts graph.
        if (!bWeightGraph) {
            this.edges.forEach(function (part, index, theArray) {
                theArray[index].useWeight = false;
            });
        }

        for (var i = rows.length; i < Math.max(this.vertices.length, rows.length); i++) {
            this.DeleteVertex(this.vertices[i]);
            i--;
        }

        this.VertexesReposition(viewportSize, newVertexes);
    }
}


Graph.prototype.TestIncidenceMatrix = function (matrix, rowsObj, colsObj, separator) {
    if (separator === undefined) {
        separator = ",";
    }

    var bGoodFormat = true;
    rowsObj.rows = [];
    rowsObj.rows = matrix.split("\n");
    for (j = 0; j < rowsObj.rows.length; ++j) {
        if (rowsObj.rows[j] === "") {
            rowsObj.rows.splice(j--, 1);
        }
    }
    colsObj.cols = [];
    var columnCount = 0;
    for (var i = 0; i < rowsObj.rows.length; i++) {
        colsObj.cols[i] = this.SplitMatrixString(rowsObj.rows[i], separator);//rowsObj.rows[i].split (",");
        for (j = 0; j < colsObj.cols[i].length; ++j) {
            if (colsObj.cols[i][j] === "") {
                colsObj.cols[i].splice(j--, 1);
            }
        }
        if (i == 0) {
            columnCount = colsObj.cols[i].length;
        }
        if (colsObj.cols[i].length != columnCount) {
            bGoodFormat = false;
            break;
        }
    }


    if (bGoodFormat) {
        for (var i = 0; i < colsObj.cols[0].length; i++) {
            var values = [];
            for (j = 0; j < colsObj.cols.length; ++j) {
                if (colsObj.cols[j][i] != 0) {
                    values.push(colsObj.cols[j][i]);
                }
            }

            if (!(values.length <= 1 || (values.length == 2 && (values[0] == values[1] || values[0] == -values[1])))) {
                bGoodFormat = false;
                break;
            }
        }
    }

    return bGoodFormat;
}

Graph.prototype.SetIncidenceMatrix = function (matrix, viewportSize, currentEnumVertesType) {
    var rowsObj = {};
    var colsObj = {};

    //ViewportSize = viewportSize.subtract(new Point((new VertexModel()).diameter * 2, (new VertexModel()).diameter * 2));
    if (this.TestIncidenceMatrix(matrix, rowsObj, colsObj)) {
        rows = rowsObj.rows;
        cols = colsObj.cols;
        var clonedEdge = this.edges.slice(0);
        for (var i = 0; i < clonedEdge.length; i++) {
            this.DeleteEdge(clonedEdge[i]);
        }
        var newVertexes = [];
        var bWeightGraph = false;
        for (var i = 0; i < cols[0].length; i++) {
            var edgeValue = [];
            var edgeIndex = [];
            for (var j = 0; j < cols.length; j++) {
                if (j >= this.vertices.length) {

                    var newPos = new Point(0, 0);//this.GetRandomPositionOfVertex (matrix, j, viewportSize);
                    newVertexes.push(new BaseVertex(newPos.x, newPos.y, currentEnumVertesType));
                    this.AddNewVertex(newVertexes[newVertexes.length - 1]);
                }

                if (cols[j][i] != 0) {
                    edgeValue.push(cols[j][i]);
                    edgeIndex.push(j);
                }
            }

            if (edgeIndex.length == 1) {
                edgeValue.push(edgeValue[0]);
                edgeIndex.push(edgeIndex[0]);
            }

            if (edgeIndex.length == 2) {
                if (edgeValue[0] != edgeValue[1]) {
                    if (edgeValue[1] > 0) {
                        edgeValue = edgeValue.swap(0, 1);
                        edgeIndex = edgeIndex.swap(0, 1);
                    }
                }

                var nEdgeIndex = this.AddNewEdgeSafe(this.vertices[edgeIndex[0]], this.vertices[edgeIndex[1]],
                    edgeValue[0] != edgeValue[1], Math.abs(edgeValue[1]), false);

                this.FixEdgeCurved(nEdgeIndex);
                if (nEdgeIndex >= 0) {
                    bWeightGraph = bWeightGraph || this.edges[nEdgeIndex].weight != 1;
                }
            }
        }

        // Set use weight false, because we have unwieghts graph.
        if (!bWeightGraph) {
            this.edges.forEach(function (part, index, theArray) {
                theArray[index].useWeight = false;
            });
        }

        for (var i = cols.length; i < Math.max(this.vertices.length, cols.length); i++) {
            this.DeleteVertex(this.vertices[i]);
            i--;
        }

        this.VertexesReposition(viewportSize, newVertexes);
    }
}

Graph.prototype.GetIncidenceMatrix = function () {
    var matrix = "";
    for (var i = 0; i < this.vertices.length; i++) {
        for (var j = 0; j < this.edges.length; j++) {
            if (this.edges[j].vertex1 == this.vertices[i]) {
                matrix += this.edges[j].weight;
            }
            else if (this.edges[j].vertex2 == this.vertices[i] && !this.edges[j].isDirect) {
                matrix += this.edges[j].weight;
            }
            else if (this.edges[j].vertex2 == this.vertices[i] && this.edges[j].isDirect) {
                matrix += -this.edges[j].weight;
            }
            else {
                matrix += "0";
            }

            if (j != this.edges.length - 1) {
                matrix += ", ";
            }

        }
        matrix = matrix + "\n";
    }

    return matrix;
}

Graph.prototype.SplitMatrixString = function (line, separator) {
    (separator === undefined)
    {
        separator = ",";
    }

    var res = [];
    var i = 0;

    // For case: 00110101101
    var isZeroOneLine = true;

    for (i = 0; i < line.length; i++) {
        if (line.charAt(i) != '0' && line.charAt(i) != '1') {
            isZeroOneLine = false;
            break;
        }
    }

    if (!isZeroOneLine) {
        if (separator != ",") {
            line = line.replace(/,/g, ".");
        }
        for (i = 0; i < line.length; i++) {
            // add , if we use space as separator
            if (("0123456789.-e").indexOf(line.charAt(i)) < 0) {
                if (i > 0) {
                    res.push(line.substr(0, i));
                }
                if (i == 0) {
                    i = 1;
                }
                line = line.substr(i, line.length - i);
                i = -1;
            }
        }
        if (line.length > 0) {
            res.push(line);
        }
    }
    else {
        for (i = 0; i < line.length; i++) {
            res.push(line.charAt(i));
        }
    }

    console.log(res);
    return res;
}


Graph.prototype.SaveToXML = function (additionalData) {
    var mainHeader = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<graphml>\n";
    var header = "<graph id=\"Graph\" uidGraph=\"" + this.uidGraph + "\"" + " uidEdge=\"" + this.uidEdge + "\">\n";

    var xmlBoby = "";

    for (var i = 0; i < this.vertices.length; i++) {
        xmlBoby = xmlBoby + this.vertices[i].SaveToXML();
    }

    xmlBoby = xmlBoby + "";

    for (var i = 0; i < this.edges.length; i++) {
        xmlBoby = xmlBoby + this.edges[i].SaveToXML();
    }

    additionalField = "";
    if (additionalData.length > 0) {
        additionalField = "<additional data=\"" + additionalData + "\"/>"
    }

    return mainHeader + header + xmlBoby + "</graph>\n" + additionalField + "</graphml>";
}

function boldSearchTerm(text, searchTerm) {
    var newText = '';
    while(text.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1){
        const idx = text.toLowerCase().indexOf(searchTerm.toLowerCase())
        newText += text.substr(0,idx)
        console.log(text.substr(0,idx))
        text = text.slice(idx);
        console.log(text)
        const highlighted = text.substr(0, searchTerm.length)
        newText += `<span style='color: #ff0000'>${highlighted}</span>`;
        text = text.slice(searchTerm.length)
    }
    newText += text
    return newText;
}

function createSearchResult(node, from, searchTerm) {
    var sr;
    var title = document.createElement('h5')
    if (from instanceof NodeInfo) {
        sr = $("<div class='nodeInfoSearchResult'></div>")
        title.innerHTML = boldSearchTerm(from.title, searchTerm)
    } else if (from instanceof Resource) {
        sr = $("<div class='resourceSearchResult'></div>")
        title.innerHTML = boldSearchTerm(from.link, searchTerm)
    }
    sr.append(title)

    var description = document.createElement('h5')
    description.innerHTML = boldSearchTerm(from.description, searchTerm)
    sr.append(description)
    sr.hover(function (e) {
        this.classList.add("searchResultBorder")
    });
    sr.mouseleave(function (e) {
        this.classList.remove("searchResultBorder")
    });
    sr.click(function (e) {
        toggleRightSection(true);
        focusOnNode(node);
        application.handler.RestRedraw();
        application.redrawGraph();
    })
    return sr[0]
}

function updateSearchResults(e) {
    if (e.value.length < 3) return;
    toggleRightSection(false);
    var resultsDiv = document.getElementById('search-results-div')
    resultsDiv.innerHTML = ''

    for (const node of application.graph.vertices) {
        if (node.nodeInfo.title.toLowerCase().indexOf(e.value.toLowerCase()) != -1 ||
            node.nodeInfo.description.toLowerCase().indexOf(e.value.toLowerCase()) != -1)
            resultsDiv.append(createSearchResult(node, node.nodeInfo, e.value))
        for (const res of node.nodeInfo.resources) {
            if (res.description.toLowerCase().indexOf(e.value.toLowerCase()) != -1)
                resultsDiv.append(createSearchResult(node, res, e.value))
        }
    }
    document.getElementById('search-results-title').textContent = "Showing " + resultsDiv.childElementCount + " results for: \n" + e.value;
}

function saveToXML() {
    var xml = application.graph.SaveToXML([]);
    localStorage.setItem('xml', xml);
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(xml));
    var filename = document.getElementById('filename').value
    element.setAttribute('download', filename + ".xml");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
function autosaveXML() {
    if (!document.getElementById('autosave').checked) return;
    var xml = application.graph.SaveToXML([]);
    localStorage.setItem('xml', xml);
}
function loadFromXML(files) {

    var graphFileToLoad = files[0];

    var fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        console.log(textFromFileLoaded);
        application.LoadGraphFromString(textFromFileLoaded);
        document.getElementById('load-from-xml').value = '';
    };

    if (graphFileToLoad) fileReader.readAsText(graphFileToLoad, "UTF-8");
}
Graph.prototype.LoadFromXML = function (xmlText, additionalData) {
    xmlDoc = $.parseXML(xmlText);
    var $xml = $(xmlDoc);

    $graphs = $xml.find("graph");

    var loadedGraphId = 0;
    var loadedEdgeId = 0;

    $graphs.each(function () {
        loadedGraphId = parseInt($(this).attr('uidGraph'));
        loadedEdgeId = parseInt($(this).attr('uidEdge'));
    });

    // Back comportebility.
    if (isNaN(loadedEdgeId)) {
        loadedEdgeId = this.edgesOffset;
    } else if (loadedEdgeId < this.edgesOffset) {
        loadedEdgeId = this.edgesOffset;
    }

    this.uidGraph = loadedGraphId;
    this.uidEdge = loadedEdgeId;

    $nodes = $xml.find("node");

    var vertexs = [];

    $nodes.each(function () {
        var vertex = new BaseVertex();
        vertex.LoadFromXML($(this));
        vertexs.push(vertex);
        var nodeInfo = new NodeInfo();
        nodeInfo.LoadFromXML($(this).find('topic'))
        vertex.nodeInfo = nodeInfo;
    });
    this.vertices = vertexs;

    $edges = $xml.find("edge");

    var edges = [];
    var graph = this;
    $edges.each(function () {
        var edge = new BaseEdge();
        edge.LoadFromXML($(this), graph);
        // Fix case with wrong id.
        if (edge.id < graph.uidEdge) {
            edge.id = graph.uidEdge;
            graph.uidEdge++;
        }
        edges.push(edge);
    });

    this.edges = edges;

    $additional = $xml.find("additional");
    if ($additional.length != 0 && additionalData != null) {
        additionalData["data"] = $additional.attr('data');
    }

    this.isMultiGraph = this.checkMutiGraph();
}

Graph.prototype.hasDirectEdge = function () {
    var res = false;
    for (var i = 0; i < this.edges.length; i++) {
        if (this.edges[i].isDirect) {
            res = true;
            break;
        }
    }

    return res;
}

Graph.prototype.clampPositions = function (viewportSize) {
    var diameter = (new VertexModel()).diameter;

    for (i = 0; i < this.vertices.length; i++) // set new positions
    {
        this.vertices[i].position.x = Math.min(Math.max(this.vertices[i].position.x, diameter), viewportSize.x - diameter);
        this.vertices[i].position.y = Math.min(Math.max(this.vertices[i].position.y, diameter), viewportSize.y - diameter);
    }
}

// Use to setup scaling.
Graph.prototype.getGraphBBox = function (viewportSize) {
    var pointMin = new Point(1e5, 1e5);
    var pointMax = new Point(-1e5, -1e5);
    var diameter = (new VertexModel()).diameter;

    for (i = 0; i < this.vertices.length; i++) {
        var vertex = this.vertices[i];
        var factor = vertex.diameterFactor();
        var deltaVector = new Point(factor.x * diameter, factor.y * diameter);
        pointMin = pointMin.min(vertex.position.subtract(deltaVector));
        pointMax = pointMax.max(vertex.position.add(deltaVector));
    }

    var max_cruvled_length = 32;

    for (i = 0; i < this.edges.length; i++) {
        var edge = this.edges[i];

        if (edge.model.type == EdgeModels.cruvled) {
            var max_cruvled = edge.vertex2.position.subtract(edge.vertex1.position).length() / max_cruvled_length;

            for (j = 0; j < max_cruvled; j++) {
                var point = edge.model.GetCurvedPoint(edge.vertex1.position, edge.vertex2.position, j / max_cruvled);
                var deltaVector = new Point(max_cruvled_length, max_cruvled_length);
                pointMin = pointMin.min(point.subtract(deltaVector));
                pointMax = pointMax.max(point.add(deltaVector));
            }
        }
    }

    return new Rect(pointMin, pointMax);
}

Graph.prototype.hasPair = function (edge) {
    return this.FindPairFor(edge) != null;
}

Graph.prototype.FindPairFor = function (edge) {
    var res = this.getNeighbourEdges(edge);

    return res.length == 1 ? res[0] : null;
}

Graph.prototype.getNeighbourEdges = function (edge) {
    var res = [];

    for (var i = 0; i < this.edges.length; i++) {
        var curEdge = this.edges[i];
        if (curEdge == edge)
            continue;

        if ((curEdge.vertex1.id == edge.vertex1.id &&
            curEdge.vertex2.id == edge.vertex2.id) ||
            (curEdge.vertex1.id == edge.vertex2.id &&
                curEdge.vertex2.id == edge.vertex1.id)) {
            res.push(curEdge);
        }
    }

    return res;
}

Graph.prototype.checkMutiGraph = function () {
    var res = false;

    var start = {};

    for (var i = 0; i < this.edges.length; i++) {
        var edge = this.edges[i];
        if (start.hasOwnProperty(edge.vertex1.id) &&
            start[edge.vertex1.id] == edge.vertex2.id) {
            res = true;
            break;
        }

        start[edge.vertex1.id] = edge.vertex2.id;
        if (!edge.isDirect) {
            if (start.hasOwnProperty(edge.vertex2.id) &&
                start[edge.vertex2.id] == edge.vertex1.id) {
                res = true;
                break;
            }

            start[edge.vertex2.id] = edge.vertex1.id;
        }
    }

    return res;
}

Graph.prototype.isMulti = function () {
    return this.isMultiGraph;
}

Graph.prototype.isNeedReposition = function () {
    var res = false;
    for (var i = 0; i < this.vertices.length; i++) {
        res = res || this.vertices[i].IsUndefinedPosition();
    }
    return res;
}

Graph.prototype.FixEdgeCurved = function (edgeIndex) {
    var edgeObject = this.edges[edgeIndex];
    var hasPair = this.hasPair(edgeObject);
    var neighbourEdges = this.getNeighbourEdges(edgeObject);

    if (hasPair) {
        if (edgeObject.model.default)
            edgeObject.model.type = EdgeModels.cruvled;

        var pairEdge = this.FindPairFor(edgeObject);
        if (pairEdge.model.default) {
            pairEdge.model.type = EdgeModels.cruvled;
            if (pairEdge.vertex1 == edgeObject.vertex1 && pairEdge.vertex2 == edgeObject.vertex2)
                pairEdge.model.curvedValue = -pairEdge.model.curvedValue;
        }
    }
    else if (neighbourEdges.length >= 2) {
        var cruvled = this.GetAvalibleCruvledValue(neighbourEdges, edgeObject);
        if (edgeObject.model.default) {
            edgeObject.model.type = EdgeModels.cruvled;
            edgeObject.model.curvedValue = cruvled;
        }
    }
}

Graph.prototype.GetAvalibleCruvledValue = function (neighbourEdges, originalEdge) {
    var values = [];

    for (var i = 0; i < neighbourEdges.length; i++) {
        var edge = neighbourEdges[i];
        var sameDirection = (originalEdge.vertex1.id == edge.vertex1.id);
        if (edge.model.type == EdgeModels.cruvled) {
            values[(sameDirection ? edge.model.curvedValue : -edge.model.curvedValue)] = true;
        }
    }

    var changeValue = DefaultHandler.prototype.curvedValue;
    var defaultValue = 0.0;
    var maxSearch = 10;

    for (var i = 1; i < maxSearch; i++) {
        value = i * changeValue;
        if (!values.hasOwnProperty(value))
            return value;

        value = - i * changeValue;
        if (!values.hasOwnProperty(value))
            return value;
    }

    return defaultValue;
}/*
  Classes for create text for vertexs.
*/


/**
 * Base Enum Vertexs.
 *
 */
function BaseEnumVertices(app, startNumber) {
    this.app = app;
    this.startNumber = startNumber;
}

BaseEnumVertices.prototype.GetVertexText = function (id) {
    return this.startNumber + id;
}

BaseEnumVertices.prototype.GetVertexTextAsync = function (callback) {
    callback(this);
}

BaseEnumVertices.prototype.GetText = function () {
    return this.startNumber + ", " + (this.startNumber + 1) + ", " + (this.startNumber + 2) + "...";
}

BaseEnumVertices.prototype.GetValue = function () {
    return "Numbers" + this.startNumber;
}

function TextEnumTitle(app, title) {
    BaseEnumVertices.apply(this, arguments);
    this.pattern = "";
    this.title = title;
}


// inheritance.
TextEnumTitle.prototype = Object.create(BaseEnumVertices.prototype);

TextEnumTitle.prototype.GetVertexText = function (id) {
    return this.title;
}



/**
 * Text Enum
 *
 */
function TextEnumVertexs(app) {
    BaseEnumVertices.apply(this, arguments);
    this.pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}


// inheritance.
TextEnumVertexs.prototype = Object.create(BaseEnumVertices.prototype);

TextEnumVertexs.prototype.GetVertexText = function (id) {
    var res = "";

    res = this.pattern[id % this.pattern.length] + res;

    while (id >= this.pattern.length) {
        id = Math.floor(id / this.pattern.length) - 1;
        res = this.pattern[id % this.pattern.length] + res;
    }

    return res;
}


TextEnumVertexs.prototype.GetText = function () {
    return "A, B, ... Z";
}

TextEnumVertexs.prototype.GetValue = function () {
    return "Latin";
}

/**
 * Text Enum
 *
 */
function TextEnumVertexsCyr(app) {
    TextEnumVertexs.apply(this, arguments);
    this.pattern = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
}


// inheritance.
TextEnumVertexsCyr.prototype = Object.create(TextEnumVertexs.prototype);

TextEnumVertexsCyr.prototype.GetText = function () {
    return "А, Б, ... Я";
}

TextEnumVertexsCyr.prototype.GetValue = function () {
    return "Cyrillic";
}


/**
 * Text Enum
 *
 */
function TextEnumVertexsGreek(app) {
    TextEnumVertexs.apply(this, arguments);
    this.pattern = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ";
}


// inheritance.
TextEnumVertexsGreek.prototype = Object.create(TextEnumVertexs.prototype);

TextEnumVertexsGreek.prototype.GetText = function () {
    return "Α, Β, ... Ω";
}

TextEnumVertexsGreek.prototype.GetValue = function () {
    return "Greek";
}

/**
 * Text Enum
 *
 */
function TextEnumVertexsCustom(app) {
    BaseEnumVertices.apply(this, arguments);
    this.pattern = "";
}



// inheritance.
TextEnumVertexsCustom.prototype = Object.create(BaseEnumVertices.prototype);

TextEnumVertexsCustom.prototype.GetText = function () {
    return g_customEnumVertex;
}

TextEnumVertexsCustom.prototype.GetValue = function () {
    return "Custom";
}

TextEnumVertexsCustom.prototype.GetVertexTextAsync = function (callback) {
    this.ShowDialog(callback, g_addVertex, g_addVertex, "A");
}


TextEnumVertexsCustom.prototype.ShowDialog = function (callback, buttonText, titleTitle, title) {
    var dialogButtons = {};
    app = this.app;
    dialogButtons[buttonText] = function () {
        app.PushToStack("RenameVertex");

        callback(new TextEnumTitle(app, $("#VertexTitle").val()));
        $(this).dialog("close");
    };

    $("#addVertex").dialog({
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        title: titleTitle,
        buttons: dialogButtons,
        dialogClass: 'EdgeDialog',
        open: function () {
            $(this).off('submit').on('submit', function () {
                return false;
            });
            $("#VertexTitle").val(title);
            $("#VertexTitle").focus();
        }
    });
}
/**
 * This is main application class.
 *
 */

var globalApplication = null;

function Application(document, window) {
    this.document = document;
    this.canvas = this.document.getElementById('canvas');
    this.handler = new DefaultHandler(this);
    this.savedGraphName = "";
    this.currentEnumVertesType = new BaseEnumVertices(this, 1);//this.enumVertexesTextList[0];
    this.findPathReport = 1;
    this.isTimerRender = false;
    globalApplication = this;
    this.renderPath = [];
    this.renderTimer = 0;
    this.renderPathLength = 0;
    this.renderPathCounter = 0;
    this.renderPathLoops = 0;
    this.enumVertexesTextList = [new BaseEnumVertices(this, 1), new BaseEnumVertices(this, 0), new TextEnumVertexs(this), new TextEnumVertexsCyr(this), new TextEnumVertexsGreek(this), new TextEnumVertexsCustom(this)];
    this.SetDefaultTransformations();
    this.algorithmsValues = {};
    this.userAction = function () { };
    this.undoStack = [];

    this.edgeCommonStyle = new CommonEdgeStyle();
    this.isEdgeCommonStyleCustom = false;
    this.edgeSelectedStyles = FullArrayCopy(DefaultSelectedEdgeStyles);
    this.isEdgeSelectedStylesCustom = false;

    this.edgePrintCommonStyle = new CommonPrintEdgeStyle();
    this.edgePrintSelectedStyles = FullArrayCopy(DefaultPrintSelectedEdgeStyles);

    this.vertexCommonStyle = new CommonVertexStyle();
    this.isVertexCommonStyleCustom = false;
    this.vertexSelectedVertexStyles = FullArrayCopy(DefaultSelectedGraphStyles);
    this.isVertexSelectedVertexStylesCustom = false;

    this.vertexPrintCommonStyle = new CommonPrintVertexStyle();
    this.vertexPrintSelectedVertexStyles = FullArrayCopy(DefaultPrintSelectedGraphStyles);

    this.backgroundCommonStyle = new CommonBackgroundStyle();
    this.backgroundPrintStyle = new PrintBackgroundStyle();
    this.isBackgroundCommonStyleCustom = false;
    this.renderPathWithEdges = false;

    this.edgePresets = [1, 3, 5, 7, 11, 42];
    this.maxEdgePresets = 6;
    this.selectionRect = null;

    this.defaultVertexSize = null;
    this.defaultEdgeWidth = null;
    this.processEmscriptenFunction = null;
};

// List of graph.
//Application.prototype.graph.vertices     = [];
// Current draged object.
Application.prototype.graph = new Graph();
Application.prototype.dragObject = -1;
// List of graph.edges.
//Application.prototype.graph.edges       = [];
// User handler.
Application.prototype.handler = null;
// Hold status.
Application.prototype.status = {};
// Graph name length
Application.prototype.graphNameLength = 16;
// Max undo stack size
Application.prototype.maxUndoStackSize = 8;

Application.prototype.getMousePos = function (canvas, e) {
    /// getBoundingClientRect is supported in most browsers and gives you
    /// the absolute geometry of an element
    var rect = canvas.getBoundingClientRect();

    /// as mouse event coords are relative to document you need to
    /// subtract the element's left and top position:
    return { x: (e.clientX - rect.left) / this.canvasScale - this.canvasPosition.x, y: (e.clientY - rect.top) / this.canvasScale - this.canvasPosition.y };
}

Application.prototype.redrawGraph = function () {
    if (!this.isTimerRender) {
        this._redrawGraphInWindow();

        this.GraphTypeChanged();
    }
}

Application.prototype.redrawGraphTimer = function () {
    if (this.isTimerRender) {
        var context = this._redrawGraphInWindow();

        // Render path
        if (this.renderPath.length > 1) {
            context.save();
            context.scale(this.canvasScale, this.canvasScale);
            context.translate(this.canvasPosition.x, this.canvasPosition.y);

            var movePixelStep = 16;
            var currentLength = 0;

            var i = 0
            for (i = 0; i < this.renderPath.length - 1; i++) {
                var edge = null;
                if (this.renderPathWithEdges) {
                    edge = this.graph.FindEdgeById(this.renderPath[i + 1]);
                    i++;
                }
                else if (this.renderMinPath) {
                    edge = this.graph.FindEdgeMin(this.renderPath[i], this.renderPath[i + 1]);
                }
                else {
                    edge = this.graph.FindEdge(this.renderPath[i], this.renderPath[i + 1]);
                }

                currentLength += edge.GetPixelLength();
                if (currentLength > this.renderPathCounter) {
                    currentLength -= edge.GetPixelLength();
                    break;
                }
            }

            if (i >= this.renderPath.length - 1) {
                i = 0;
                if (this.renderPathWithEdges)
                    i = 1;
                this.renderPathCounter = 0;
                currentLength = 0;
                this.renderPathLoops += 1;
            }

            var edge = null;
            var currentVertexId = this.renderPath[i];
            if (this.renderPathWithEdges) {
                edge = this.graph.FindEdgeById(this.renderPath[i]);
                currentVertexId = this.renderPath[i - 1];
            }
            else if (this.renderMinPath) {
                edge = this.graph.FindEdgeMin(this.renderPath[i], this.renderPath[i + 1]);
            }
            else {
                edge = this.graph.FindEdge(this.renderPath[i], this.renderPath[i + 1]);
            }

            var progress = (this.renderPathCounter - currentLength) / edge.GetPixelLength();

            this.RedrawEdgeProgress(context, edge, edge.vertex1.id == currentVertexId ? progress : 1.0 - progress);

            this.renderPathCounter += movePixelStep;

            context.restore();
        }
    }

    if (this.renderPathLoops >= 5) {
        this.stopRenderTimer();
    }
}

Application.prototype._redrawGraphInWindow = function () {
    var context = this.canvas.getContext('2d');

    context.save();

    context.scale(this.canvasScale, this.canvasScale);
    context.translate(this.canvasPosition.x, this.canvasPosition.y);

    this._RedrawGraph(context, this.canvasPosition, this.backgroundCommonStyle, true);

    context.restore();

    return context;
}

Application.prototype._OffscreenRedrawGraph = function () {
    var bbox = this.graph.getGraphBBox();
    var canvas = document.createElement('canvas');
    canvas.width = bbox.size().x;
    canvas.height = bbox.size().y;
    var context = canvas.getContext('2d');

    context.save();

    context.translate(bbox.minPoint.inverse().x, bbox.minPoint.inverse().y);

    this._RedrawGraph(context, bbox.minPoint.inverse(), this.backgroundCommonStyle, false);

    context.restore();

    return canvas;
}

Application.prototype._PrintRedrawGraph = function () {
    var bbox = this.graph.getGraphBBox();
    var canvas = document.createElement('canvas');
    canvas.width = bbox.size().x;
    canvas.height = bbox.size().y;
    var context = canvas.getContext('2d');

    context.save();

    context.translate(bbox.minPoint.inverse().x, bbox.minPoint.inverse().y);

    this._RedrawGraph(context, bbox.minPoint.inverse(), this.backgroundPrintStyle, false,
        this.vertexPrintCommonStyle, this.vertexPrintSelectedVertexStyles,
        this.edgePrintCommonStyle, this.edgePrintSelectedStyles);

    context.restore();

    return canvas;
}

Application.prototype.updateRenderPathLength = function () {
    this.renderPathLength = 0;
    this.renderPathCounter = 0;
    if (this.renderPath.length > 1) {
        for (var i = 0; i < this.renderPath.length - 1; i++) {
            var edge = null;
            if (this.renderPathWithEdges) {
                edge = this.graph.FindEdgeById(this.renderPath[i + 1]);
                i++;
            }
            else {
                edge = this.graph.FindEdge(this.renderPath[i], this.renderPath[i + 1]);
            }
            this.renderPathLength += edge.GetPixelLength();
        }
    }
}

Application.prototype.startRenderTimer = function () {
    this.updateRenderPathLength();
    this.renderTimer = window.setInterval(function () { globalApplication.redrawGraphTimer(); }, 50);
    this.isTimerRender = true;
    this.renderPathLoops = 0;
}

Application.prototype.stopRenderTimer = function () {
    if (this.isTimerRender) {
        window.clearInterval(this.renderTimer);
        this.isTimerRender = false;
        this.renderPathLoops = 0;
    }
}

Application.prototype.setRenderPath = function (renderPath, renderMinPath) {
    this.renderPath = renderPath;
    this.renderMinPath = renderMinPath;
    this.renderPathWithEdges = false;

    if (this.renderPath.length > 0) {
        this.startRenderTimer();
    }
    else {
        this.stopRenderTimer();
    }
}

Application.prototype.setRenderPathWithEdges = function (renderPath) {
    this.renderPath = renderPath;
    this.renderMinPath = false;
    this.renderPathWithEdges = true;

    if (this.renderPath.length > 0) {
        this.startRenderTimer();
    }
    else {
        this.stopRenderTimer();
    }
}

Application.prototype.GetBaseArcDrawer = function (context, edge) {
    var arcDrawer = new BaseEdgeDrawer(context);

    if (edge.model.type == EdgeModels.cruvled) {
        var curvedArcDrawer = new CurvedArcDrawer(context, edge.model);

        arcDrawer = new BaseEdgeDrawer(context,
            {
                drawArc: curvedArcDrawer,
                startArrowDiretion: curvedArcDrawer,
                finishArrowDiretion: curvedArcDrawer,
                textCenterObject: curvedArcDrawer,
                getPointOnArc: curvedArcDrawer
            }
        );
    }

    return arcDrawer;
}

Application.prototype.UpdateEdgeCurrentStyle = function (edge, ForceCommonStyle, ForceSelectedStyle) {
    var commonStyle = (ForceCommonStyle === undefined) ? this.edgeCommonStyle : ForceCommonStyle;
    var selectedStyle = (ForceSelectedStyle === undefined) ? this.edgeSelectedStyles : ForceSelectedStyle;

    var selectedGroup = this.handler.GetSelectedGroup(edge);
    var selected = false;
    if (selectedGroup > 0) {
        selectedGroup = (selectedGroup - 1) % selectedStyle.length;
        selected = true;
    }

    var currentStyle = null;
    if (edge.hasOwnStyleFor((selected ? 1 : 0) + selectedGroup))
        currentStyle = edge.getStyleFor((selected ? 1 : 0) + selectedGroup);
    else
        currentStyle = selected ? selectedStyle[selectedGroup] : commonStyle;

    edge.currentStyle = currentStyle;
}

Application.prototype.RedrawEdge = function (context, edge) {
    var curvedArcDrawer = new CurvedArcDrawer(context, edge.model)
    var arcDrawer = this.GetBaseArcDrawer(context, edge);

    this._RedrawEdge(edge, arcDrawer);
}

Application.prototype._RedrawEdge = function (edge, arcDrawer, commonStyle, selectedStyles) {
    this._RedrawEdgeWithStyle(edge, edge.currentStyle, arcDrawer, commonStyle, selectedStyles);
}

Application.prototype._RedrawEdgeWithStyle = function (edge, style, arcDrawer, commonStyle, selectedStyles) {
    arcDrawer.Draw(edge, style.GetStyle({}, edge));
}

Application.prototype.RedrawEdgeProgress = function (context, edge, progress) {
    var progressDraw = new ProgressArcDrawer(context, this.GetBaseArcDrawer(context, edge), progress);
    var arcDrawer = new BaseEdgeDrawer(context, { drawObject: progressDraw });

    this._RedrawEdge(edge, arcDrawer, this.edgeCommonStyle, this.edgeSelectedStyles);
}

Application.prototype.UpdateEdgesCurrentStyle = function (ForceCommonStyle, ForceSelectedStyle) {
    for (i = 0; i < this.graph.edges.length; i++) {
        this.UpdateEdgeCurrentStyle(this.graph.edges[i], ForceCommonStyle, ForceSelectedStyle);
    }
}

Application.prototype.RedrawEdges = function (context) {
    for (i = 0; i < this.graph.edges.length; i++) {
        this.RedrawEdge(context, this.graph.edges[i]);
    }
}

Application.prototype.RedrawNodes = function (context) {
    var graphDrawer = new BaseVertexDrawer(context);

    for (i = 0; i < this.graph.vertices.length; i++) {
        graphDrawer.Draw(this.graph.vertices[i], this.graph.vertices[i].currentStyle.GetStyle({}, this.graph.vertices[i]));
    }
}

Application.prototype.UpdateNodesCurrentStyle = function (ForceCommonStyle, ForceSelectedStyle) {
    var force = ForceCommonStyle !== undefined || ForceSelectedStyle !== undefined;
    var commonStyle = (ForceCommonStyle === undefined) ? this.vertexCommonStyle : ForceCommonStyle;
    var selectedStyle = (ForceSelectedStyle === undefined) ? this.vertexSelectedVertexStyles : ForceSelectedStyle;

    for (i = 0; i < this.graph.vertices.length; i++) {
        var selectedGroup = this.handler.GetSelectedGroup(this.graph.vertices[i]);
        var selected = false;
        if (selectedGroup > 0) {
            selectedGroup = (selectedGroup - 1) % selectedStyle.length;
            selected = true;
        }

        var currentStyle = null;
        if (this.graph.vertices[i].hasOwnStyleFor((selected ? 1 : 0) + selectedGroup) && !force)
            currentStyle = this.graph.vertices[i].getStyleFor((selected ? 1 : 0) + selectedGroup);
        else
            currentStyle = selected ? selectedStyle[selectedGroup] : commonStyle;

        // console.log(this.handler.globalHoverObject)
        // if(this.handler.globalHoverObject){
        //   this.handler.globalHoverObject.currentStyle = new HoverVertexStyle();
        //   // TODO find out of this is the best practice
        // }

        if (this.graph.vertices[i].currentStyle) {
        } else {
            this.graph.vertices[i].currentStyle = currentStyle;
        }
    }
}

Application.prototype.RedrawSelectionRect = function (context) {
    context.lineWidth = 1.0 / this.canvasScale;

    context.strokeStyle = this.edgeSelectedStyles[0].strokeStyle;
    context.setLineDash([6, 3]);
    context.beginPath();
    context.rect(this.selectionRect.left(), this.selectionRect.top(),
        this.selectionRect.size().x, this.selectionRect.size().y);
    context.closePath();
    context.stroke();

    context.setLineDash([]);
}

Application.prototype.updateMessage = function () {
    this.handler.InitControls();
}

Application.prototype.UndoColoring = function () {
    if (this.globalHoverObject instanceof BaseVertex) {
        this.globalHoverObject.currentStyle = new CommonVertexStyle();
    } else if (this.globalHoverObject instanceof BaseEdge) {
        this.globalHoverObject.vertex1.currentStyle = new CommonVertexStyle();
        this.globalHoverObject.vertex2.currentStyle = new CommonVertexStyle();
    }
    this.needRedraw = true;
}

function toggleRightSection(showResources) {
    var resourcesSection = document.getElementById('resources-section');
    resourcesSection.style.display = 'none';
    var resultsSection = document.getElementById('search-results-section');
    resultsSection.style.display = 'none';
    if (showResources) {
        resourcesSection.style.display = 'block';
    } else {
        resultsSection.style.display = 'block';
    }
}
function focusOnNode(mouseoverObject) {
    var infoTitle = document.getElementById('info-title');
    var infoUid = document.getElementById('info-uid')
 
    infoTitle.value = mouseoverObject.nodeInfo.title;
    infoTitle.onchange = function (ev) {
        mouseoverObject.nodeInfo.title = infoTitle.value;
        autosaveXML();
    }
    infoUid.textContent = mouseoverObject.nodeInfo.uid;
    listResoures(mouseoverObject);

    // change node style
    application.UndoColoring();
    application.globalHoverObject = mouseoverObject;
    application.globalHoverObject.currentStyle = new HoverVertexStyle();
    application.handler.needRedraw = true;
}
Application.prototype.MouseMove = function (pos) {
    var mouseoverObject = this.handler.GetSelectedObject(pos);
    if (this.lock && !this.objectChanged) return;
    this.objectChanged = false;

    var infoResources = document.getElementById('info-resources')
    var addResourceButton = document.getElementById('add-resource-button')

    if (mouseoverObject instanceof BaseVertex) {
        toggleRightSection(true);

        addResourceButton.disabled = false;
        addResourceButton.onclick = function addResource(e) {
            mouseoverObject.nodeInfo.resources.push(new Resource('', ' '))
            listResoures(mouseoverObject)
            autosaveXML();
        };

        focusOnNode(mouseoverObject);
    } else if (mouseoverObject instanceof BaseEdge) {
        return;
    }
}

Application.prototype.CanvasOnMouseMove = function (e) {
    // X,Y position.
    var pos = this.getMousePos(this.canvas, e);

    this.MouseMove(pos);
    this.handler.MouseMove(pos);
    if (this.handler.IsNeedRedraw()) {
        this.handler.RestRedraw();
        this.redrawGraph();
    }

    this.updateMessage();
}

Application.prototype.MouseDown = function (pos) {
    var selected = this.handler.GetSelectedObject(pos);
    if (selected) {
        this.lock = true;
        if (selected != this.globalHoverObject) this.objectChanged = true;
        else this.globalChanged = false;
    } else {
        this.lock = false;
        this.objectChanged = false;
    }
    this.MouseMove(pos)
}
Application.prototype.CanvasOnMouseDown = function (e) {
    // Skip non left button.
    if (e.which !== 1) return;

    var pos = this.getMousePos(this.canvas, e); /// provide this canvas and event

    this.handler.MouseDown(pos);
    this.MouseDown(pos);
    if (this.handler.IsNeedRedraw()) {
        this.handler.RestRedraw();
        this.redrawGraph();
    }

    this.updateMessage();
}

Application.prototype.CanvasOnMouseUp = function (e) {
    // Skip non left button.
    if (e.which !== 1) return;

    //	this.dragObject = -1;
    var pos = this.getMousePos(this.canvas, e);

    this.handler.MouseUp(pos);
    if (this.handler.IsNeedRedraw()) {
        this.handler.RestRedraw();
        this.redrawGraph();
    }

    this.updateMessage();

    autosaveXML();
}

Application.prototype.multCanvasScale = function (factor) {
    var oldRealWidth = this.GetRealWidth();
    var oldRealHeight = this.GetRealHeight();

    this.canvasScale *= factor;

    this.canvasPosition = this.canvasPosition.add(new Point((this.GetRealWidth() - oldRealWidth) / 2.0,
        (this.GetRealHeight() - oldRealHeight) / 2.0));

    this.redrawGraph();
}

Application.prototype.setCanvasScale = function (factor) {
    var oldRealWidth = this.GetRealWidth();
    var oldRealHeight = this.GetRealHeight();

    this.canvasScale = factor;

    this.canvasPosition = this.canvasPosition.add(new Point((this.GetRealWidth() - oldRealWidth) / 2.0,
        (this.GetRealHeight() - oldRealHeight) / 2.0));

    this.redrawGraph();
}

Application.prototype.onCanvasMove = function (point) {
    this.canvasPosition = this.canvasPosition.add(point.multiply(1 / this.canvasScale));
    this.redrawGraph();
}

Application.prototype.AddNewVertex = function (vertex) {
    return this.graph.AddNewVertex(vertex);
}

Application.prototype.AddNewEdge = function (edge, replaceIfExists) {
    return this.graph.AddNewEdge(edge, replaceIfExists);
}

Application.prototype.CreateNewGraph = function (x, y) {
    var app = this;

    this.currentEnumVertesType.GetVertexTextAsync(
        function (enumType) {
            app.graph.AddNewVertex(new BaseVertex(x, y, enumType));
            console.log(x, y)
            app.redrawGraph();
        });
}

Application.prototype.CreateNewGraphEx = function (x, y, vertexEnume) {
    return this.graph.AddNewVertex(new BaseVertex(x, y, vertexEnume));
}

Application.prototype.CreateNewArc = function (graph1, graph2, isDirect, weight, replaceIfExist, upText) {
    var edge = this.AddNewEdge(new BaseEdge(graph1, graph2, isDirect, weight, upText), replaceIfExist);

    this.graph.FixEdgeCurved(edge);

    var edgeObject = this.graph.edges[edge];

    if (edgeObject.useWeight)
        this.UpdateEdgePresets(edgeObject.weight);

    return edge;
}

Application.prototype.DeleteEdge = function (edgeObject) {
    var vertex1 = edgeObject.vertex1;
    var vertex2 = edgeObject.vertex2;

    var hasPair = this.graph.hasPair(edgeObject);

    this.graph.DeleteEdge(edgeObject);

    // Make line for pair.
    if (hasPair) {
        var pairEdges = this.FindAllEdges(vertex2.id, vertex1.id);

        if (pairEdges.length == 1 && pairEdges[0].model.default)
            pairEdges[0].model.type = EdgeModels.line;
    }
}

Application.prototype.DeleteVertex = function (graphObject) {
    this.graph.DeleteVertex(graphObject);
}

Application.prototype.DeleteObject = function (object) {
    if (object instanceof BaseVertex) {
        this.DeleteVertex(object);
    }
    else if (object instanceof BaseEdge) {
        this.DeleteEdge(object);
    }
}

Application.prototype.IsCorrectObject = function (object) {
    return (object instanceof BaseVertex) ||
        (object instanceof BaseEdge);
}

Application.prototype.FindVertex = function (id) {
    return this.graph.FindVertex(id);
}

Application.prototype.FindEdge = function (id1, id2) {
    return this.graph.FindEdge(id1, id2);
}

Application.prototype.FindEdgeAny = function (id1, id2) {
    return this.graph.FindEdgeAny(id1, id2);
}

Application.prototype.FindAllEdges = function (id1, id2) {
    return this.graph.FindAllEdges(id1, id2);
}

Application.prototype.SetHandlerMode = function (mode) {
    var manipolationHandlers = ["default", "addGraph", "addArc", "delete", "findPath", "connectedComponent", "eulerianLoop"];

    var modeIndicator = document.getElementById('mode-indicator')
    if (mode == "default") {
        modeIndicator.textContent = 'Mode: (M)ove'
        this.handler = new DefaultHandler(this);
    }
    else if (mode == "addGraph") {
        modeIndicator.textContent = 'Mode: Add (V)ertex'
        this.handler = new AddGraphHandler(this);
    }
    else if (mode == "addArc") {
        modeIndicator.textContent = 'Mode: Add (E)dge'
        this.handler = new ConnectionGraphHandler(this);
    }
    else if (mode == "delete") {
        modeIndicator.textContent = 'Mode: (R)emove'
        this.handler = new DeleteGraphHandler(this);
    }
    else if (mode == "deleteAll") {
        var removeAll = new DeleteAllHandler(this);
        removeAll.clear();
    }
    else if (mode == "findPath") {
        this.handler = new FindPathGraphHandler(this);
    }
    else if (mode == "showAdjacencyMatrix") {
        var showAdjacencyMatrix = new ShowAdjacencyMatrix(this);
        showAdjacencyMatrix.show();
    }
    else if (mode == "showIncidenceMatrix") {
        var showIncidenceMatrix = new ShowIncidenceMatrix(this);
        showIncidenceMatrix.show();
    }
    else if (mode == "showDistanceMatrix") {
        var showDistanceMatrix = new ShowDistanceMatrix(this);
        showDistanceMatrix.show();
    }
    else if (mode == "connectedComponent") {
        this.handler = new ConnectedComponentGraphHandler(this);
    }
    else if (mode == "saveDialog") {
        var savedDialogGraphHandler = new SavedDialogGraphHandler(this);
        savedDialogGraphHandler.show();
    }
    else if (mode == "saveDialogImage") {
        var savedDialogGraphImageHandler = new SavedDialogGraphImageHandler(this);
        savedDialogGraphImageHandler.showWorkspace();
    }
    else if (mode == "saveDialogFullImage") {
        var savedDialogGraphImageHandler = new SavedDialogGraphImageHandler(this);
        savedDialogGraphImageHandler.showFullgraph();
    }
    else if (mode == "savePrintGraphImage") {
        var savedDialogGraphImageHandler = new SavedDialogGraphImageHandler(this);
        savedDialogGraphImageHandler.showPrint();
    }
    else if (mode == "eulerianLoop") {
        this.handler = new EulerianLoopGraphHandler(this);
    }
    else if (mode == "GroupRename") {
        var groupRenameVertices = new GroupRenameVertices(this);
        groupRenameVertices.show();
    }
    else if (mode == "setupVertexStyle") {
        var setupVertexStyle = new SetupVertexStyle(this);
        setupVertexStyle.show(0);
    }
    else if (mode == "setupVertexStyleSelected") {
        var setupVertexStyle = new SetupVertexStyle(this);
        setupVertexStyle.show(1);
    }
    else if (mode == "setupEdgeStyle") {
        var setupEdgeStyle = new SetupEdgeStyle(this);
        setupEdgeStyle.show(0);
    }
    else if (mode == "setupEdgeStyleSelected") {
        var setupEdgeStyle = new SetupEdgeStyle(this);
        setupEdgeStyle.show(1);
    }
    else if (mode == "setupBackgroundStyle") {
        var setupBackgroundStyle = new SetupBackgroundStyle(this);
        setupBackgroundStyle.show();
    }
    else if (mode == "graphUndo") {
        if (!this.IsUndoStackEmpty())
            this.Undo();
    }
    else if (g_AlgorithmIds.indexOf(mode) >= 0) {
        this.handler = new AlgorithmGraphHandler(this, g_Algorithms[g_AlgorithmIds.indexOf(mode)](this.graph, this));
    }

    console.log(mode);

    this.setRenderPath([]);
    this.updateMessage();
    this.redrawGraph();
}


Application.prototype.getParameterByName = function (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

Application.prototype.onPostLoadEvent = function () {
    this.SetEnumVertexsType(document.cookie.replace(/(?:(?:^|.*;\s*)enumType\s*\=\s*([^;]*).*$)|^.*$/, "$1"));

    var wasLoad = false;
    var matrix = document.getElementById("inputMatrix").innerHTML;
    var separator = document.getElementById("separator").innerHTML == "space" ? " " : ",";

    console.log(matrix);
    console.log("separator: \"" + separator + "\"");

    matrix = (matrix.length <= 0) ? this.getParameterByName("matrix") : matrix;
    if (matrix.length > 0) {
        if (!this.SetAdjacencyMatrixSmart(matrix, separator)) {
            this.userAction("AdjacencyMatrix.Failed");
            this.ShowAdjacencyMatrixErrorDialog(matrix);
        }
        else {
            this.userAction("AdjacencyMatrix.Success");
        }

        this.updateMessage();
        this.redrawGraph();
        wasLoad = true;
    }

    var matrix = document.getElementById("inputIncidenceMatrix").innerHTML;
    matrix = (matrix.length <= 0) ? this.getParameterByName("incidenceMatrix") : matrix;

    if (matrix.length > 0) {
        if (!this.SetIncidenceMatrixSmart(matrix)) {
            this.userAction("IncidenceMatrix.Failed");
            this.ShowIncidenceMatrixErrorDialog(matrix);
        }
        else {
            this.userAction("IncidenceMatrix.Success");
        }

        this.updateMessage();
        this.redrawGraph();
        wasLoad = true;
    }

    if (!wasLoad) {
        var graphName = this.getParameterByName("graph");
        if (graphName.length <= 0) {
            graphName = document.cookie.replace(/(?:(?:^|.*;\s*)graphName\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        }

        if (graphName.length > 0) {
            this.userAction("LoadGraphFromDisk");
            this.LoadGraphFromDisk(graphName);
        }
    }


    this.updateMessage();
    this.redrawGraph();
}

Application.prototype.onLoad = function () {
    this.canvas = this.document.getElementById('canvas');

    this.handler = new DefaultHandler(this);

    this.updateMessage();
    this.redrawGraph();
}

Application.prototype.NeedRedraw = function () {
    //TODO
    this.updateMessage();
    this.redrawGraph();
}

Application.prototype.SetStatus = function (name, value) {
    this.status[name] = value;
}

Application.prototype.GetStatus = function () {
    return this.status[name];
}


Application.prototype.GetAdjacencyMatrix = function () {
    return this.graph.GetAdjacencyMatrixStr();
}

Application.prototype.TestAdjacencyMatrix = function (matrix, rowsObj, colsObj, separator) {
    if (separator === undefined) {
        separator = ",";
    }

    return this.graph.TestAdjacencyMatrix(matrix, rowsObj, colsObj, separator);
}

Application.prototype.SetAdjacencyMatrix = function (matrix, separator) {
    if (separator === undefined) {
        separator = ",";
    }

    var res = true;
    var r = {};
    var c = {};
    if (!this.TestAdjacencyMatrix(matrix, r, c, separator)) {
        $.get("/" + SiteDir + "cgi-bin/addFailedMatrix.php?text=adjacency&matrix=" + encodeURIComponent(matrix), function (data) { ; });
        res = false;
    }

    this.graph.SetAdjacencyMatrix(matrix, new Point(this.GetRealWidth(), this.GetRealHeight()), this.currentEnumVertesType, separator);
    this.AutoAdjustViewport();
    this.redrawGraph();
    return res;
}


Application.prototype.GetIncidenceMatrix = function () {
    return this.graph.GetIncidenceMatrix();
}

Application.prototype.TestIncidenceMatrix = function (matrix, rowsObj, colsObj) {
    return this.graph.TestIncidenceMatrix(matrix, rowsObj, colsObj);
}

Application.prototype.SetIncidenceMatrix = function (matrix) {
    var res = true;
    var r = {};
    var c = {};
    if (!this.TestIncidenceMatrix(matrix, r, c)) {
        $.get("/" + SiteDir + "cgi-bin/addFailedMatrix.php?text=incidence&matrix=" + encodeURIComponent(matrix), function (data) { ; });
        res = false;
    }

    this.graph.SetIncidenceMatrix(matrix, new Point(this.GetRealWidth(), this.GetRealHeight()), this.currentEnumVertesType);
    this.AutoAdjustViewport();
    this.redrawGraph();
    return res;
}

Application.prototype.Test = function () {
    this.graph.VertexesReposition(new Point(this.GetRealWidth(), this.GetRealHeight()), this.graph.vertices);
    this.redrawGraph();
}


Application.prototype.SetAdjacencyMatrixSmart = function (matrix, separator) {
    if (separator === undefined) {
        separator = ",";
    }

    var res = false;
    if (this.TestAdjacencyMatrix(matrix, {}, {}, separator)) {
        res = this.SetAdjacencyMatrix(matrix, separator);
    }
    else if (this.TestIncidenceMatrix(matrix, {}, {})) {
        res = this.SetIncidenceMatrix(matrix);
    }
    else {
        res = this.SetAdjacencyMatrix(matrix);
    }
    return res;
}

Application.prototype.SetIncidenceMatrixSmart = function (matrix) {
    var res = false;

    if (this.TestIncidenceMatrix(matrix, {}, {})) {
        res = this.SetIncidenceMatrix(matrix);
    }
    else if (this.TestAdjacencyMatrix(matrix, {}, {})) {
        res = this.SetAdjacencyMatrix(matrix);
    }
    else {
        res = this.SetIncidenceMatrix(matrix);
    }

    return res;
}


Application.prototype.SaveGraphOnDisk = function () {
    var graphAsString = this.graph.SaveToXML(this.SaveUserSettings());

    var styleSave = this.SaveUserSettings();

    if (this.savedGraphName.length <= 0) {
        this.savedGraphName = this.GetNewGraphName();
    }

    var app = this;
    $.ajax({
        type: "POST",
        url: "/" + SiteDir + "cgi-bin/saveGraph.php?name=" + this.savedGraphName,
        data: graphAsString,
        dataType: "text"
    })
        .done(function (msg) {
            document.cookie = "graphName=" + app.savedGraphName;
        });
}

Application.prototype.SaveGraphImageOnDisk = function (showDialogCallback) {
    var imageName = this.GetNewName();

    this.stopRenderTimer();
    this.redrawGraph();

    var bbox = this.graph.getGraphBBox();

    var rectParams = "";
    if (this.IsGraphFitOnViewport()) {
        var canvasWidth = this.GetRealWidth();
        var canvasHeight = this.GetRealHeight();
        var canvasPositionInverse = this.canvasPosition.inverse();

        var pos = bbox.minPoint.subtract(canvasPositionInverse);

        rectParams = "&x=" + Math.round(pos.x * this.canvasScale) + "&y=" + Math.round(pos.y * this.canvasScale)
            + "&width=" + Math.round(bbox.size().x * this.canvasScale) + "&height=" + Math.round(bbox.size().y * this.canvasScale);

        //console.log(rectParams);
    }

    var imageBase64Data = this.canvas.toDataURL();

    $.ajax({
        type: "POST",
        url: "/" + SiteDir + "cgi-bin/saveImage.php?name=" + imageName + rectParams,
        data: {
            base64data: imageBase64Data
        },
        dataType: "text",
        success: function (data) {
            showDialogCallback();
        }
    });

    return imageName;
}

Application.prototype.SaveFullGraphImageOnDisk = function (showDialogCallback, forPrint) {
    var imageName = this.GetNewName();

    this.stopRenderTimer();
    var canvas = forPrint ? this._PrintRedrawGraph() : this._OffscreenRedrawGraph();

    var bbox = this.graph.getGraphBBox();

    var rectParams = "";
    rectParams = "&x=0" + "&y=0" + "&width=" + bbox.size().x + "&height=" + bbox.size().y;

    var imageBase64Data = canvas.toDataURL();

    $.ajax({
        type: "POST",
        url: "/" + SiteDir + "cgi-bin/saveImage.php?name=" + imageName + rectParams,
        data: {
            base64data: imageBase64Data
        },
        dataType: "text",
        success: function (data) {
            showDialogCallback();
        }
    });

    return imageName;
}

Application.prototype.LoadGraphFromString = function (str) {
    var graph = new Graph();

    //console.log(str);

    var userSettings = {};
    graph.LoadFromXML(str, userSettings);
    if (userSettings.hasOwnProperty("data") && userSettings["data"].length > 0)
        this.LoadUserSettings(userSettings["data"]);
    this.SetDefaultTransformations();
    this.graph = graph;
    if (this.graph.isNeedReposition()) {
        this.graph.VertexesReposition(new Point(this.GetRealWidth(), this.GetRealHeight()), this.graph.vertices);
    }
    this.AutoAdjustViewport();
    this.updateMessage();
    this.redrawGraph();
}

Application.prototype.GetNewGraphName = function () {
    var name = this.GetNewName();

    if (this.isVertexCommonStyleCustom || this.isVertexSelectedVertexStylesCustom ||
        this.isBackgroundCommonStyleCustom || this.isEdgeCommonStyleCustom || this.isEdgeSelectedStylesCustom) {
        name = name + "ZZcst";
    }

    return name;
}

Application.prototype.GetNewName = function () {
    var name = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < this.graphNameLength; i++) {
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return name;
}

Application.prototype.GetGraphName = function () {
    return this.savedGraphName;
}


Application.prototype.SetDefaultHandler = function () {
    restButtons('Default');
    this.SetHandlerMode("default");
}

Application.prototype.GetEnumVertexsList = function () {
    var res = [];

    for (var i = 0; i < this.enumVertexesTextList.length; i++) {
        var one = {};
        one["text"] = this.enumVertexesTextList[i].GetText();
        one["value"] = this.enumVertexesTextList[i].GetValue();

        one["select"] = this.enumVertexesTextList[i].GetValue() == this.currentEnumVertesType.GetValue();

        res.push(one);
    }

    return res;
}

Application.prototype.SetEnumVertexsType = function (value) {
    for (var i = 0; i < this.enumVertexesTextList.length; i++) {
        if (this.enumVertexesTextList[i].GetValue() == value) {
            this.currentEnumVertesType = this.enumVertexesTextList[i];
            document.cookie = "enumType=" + value;
            break;
        }
    }

}


Application.prototype.ShowAdjacencyMatrixErrorDialog = function (matrix) {
    var dialogButtons = {};

    matrixRes = matrix.replace(/\n/g, '%0A');
    dialogButtons[g_readMatrixHelp] = function () {
        window.location.assign(g_language == "ru" ? "./wiki/Справка/МатрицаСмежности#matrixFormat" : "./wiki/Help/AdjacencyMatrix#matrixFormat");
    };
    dialogButtons[g_fixMatrix] = function () {
        window.location.assign("./create_graph_by_matrix?matrix=" + matrixRes);
    };
    dialogButtons[g_close] = function () {
        $(this).dialog("close");
    };

    $("#matrixError").dialog({
        resizable: false,
        title: g_matrixWrongFormat,
        width: 400,
        modal: true,
        dialogClass: 'EdgeDialog',
        buttons: dialogButtons,
    });
}

Application.prototype.ShowIncidenceMatrixErrorDialog = function (matrix) {
    var dialogButtons = {};

    matrixRes = matrix.replace(/\n/g, '%0A');
    dialogButtons[g_readMatrixHelp] = function () {
        window.location.assign(g_language == "ru" ? "./wiki/Справка/МатрицаИнцидентности#matrixFormat" : "./wiki/Help/IncidenceMatrix#matrixFormat");
    };
    dialogButtons[g_fixMatrix] = function () {
        window.location.assign("./create_graph_by_incidence_matrix?incidenceMatrix=" + matrixRes);
    };
    dialogButtons[g_close] = function () {
        $(this).dialog("close");
    };

    $("#matrixErrorInc").dialog({
        resizable: false,
        title: g_matrixWrongFormat,
        width: 400,
        modal: true,
        dialogClass: 'EdgeDialog',
        buttons: dialogButtons,
    });
}

Application.prototype.SetFindPathReport = function (value) {
    this.findPathReport = value;
}

Application.prototype.GetFindPathReport = function () {
    return this.findPathReport;
}

Application.prototype.GetRealWidth = function () {
    return this.canvas.width / this.canvasScale;
}

Application.prototype.GetRealHeight = function () {
    return this.canvas.height / this.canvasScale;
}

Application.prototype.SetDefaultTransformations = function () {
    this.canvasScale = 1.0;
    this.canvasPosition = new Point(0, 0);
}

Application.prototype.AutoAdjustViewport = function () {
    graphBBox = this.graph.getGraphBBox();
    bboxCenter = graphBBox.center();
    bboxSize = graphBBox.size();

    if (bboxSize.length() > 0) {
        // Setup size
        if (bboxSize.x > this.GetRealWidth() || bboxSize.y > this.GetRealHeight()) {
            this.canvasScale = Math.min(this.GetRealWidth() / bboxSize.x, this.GetRealHeight() / bboxSize.y);
        }

        // Setup position.
        if (graphBBox.minPoint.x < 0.0 || graphBBox.minPoint.y < 0.0 ||
            graphBBox.maxPoint.x > this.GetRealWidth() || graphBBox.maxPoint.y > this.GetRealHeight()) {
            // Move center.
            this.canvasPosition = graphBBox.minPoint.inverse();
        }
    }
}

Application.prototype.OnAutoAdjustViewport = function () {
    this.SetDefaultTransformations();
    this.AutoAdjustViewport();
    this.redrawGraph();
}

Application.prototype.getAlgorithmNames = function () {
    var res = [];
    for (var i = 0; i < g_Algorithms.length; i++) {
        factory = g_Algorithms[i];
        var obj = {};
        oneFactory = factory(this.graph);
        obj.name = oneFactory.getName(g_language);
        obj.id = oneFactory.getId();
        obj.priority = oneFactory.getPriority();
        obj.category = oneFactory.getCategory();
        res.push(obj);
    }

    res.sort(function (a, b) {
        return a.priority - b.priority;
    });

    return res;
}

Application.prototype.resultCallback = function (paths) {
    console.log(paths);
    if ((paths instanceof Object) && "paths" in paths) {
        this.setRenderPath(paths["paths"][0], "minPath" in paths);
    }
    else if ((paths instanceof Object) && "pathsWithEdges" in paths) {
        this.setRenderPathWithEdges(paths["pathsWithEdges"][0]);
    }

    this.updateMessage();
    this.redrawGraph();
}

Application.prototype.GetCurrentValue = function (paramName, defaultValue) {
    return (paramName in this.algorithmsValues) ? this.algorithmsValues[paramName] : defaultValue;
}

Application.prototype.SetCurrentValue = function (paramName, value) {
    this.algorithmsValues[paramName] = value;
}

Application.prototype.IsGraphFitOnViewport = function () {
    res = true;
    graphBBox = this.graph.getGraphBBox();
    var canvasWidth = this.GetRealWidth();//  * this.canvasScale;
    var canvasHeight = this.GetRealHeight();// * this.canvasScale;
    var canvasPositionInverse = this.canvasPosition./*multiply(this.canvasScale).*/inverse();
    //console.log("BBox_min = " + graphBBox.minPoint.toString() + " - BBox_max = " + graphBBox.maxPoint.toString()
    //    + " Position" + canvasPositionInverse.toString() + " - cw = " + canvasWidth + " ch = " + canvasHeight);

    return (Math.floor(canvasPositionInverse.x) <= Math.floor(graphBBox.minPoint.x) &&
        Math.floor(canvasPositionInverse.y) <= Math.floor(graphBBox.minPoint.y) && Math.floor(canvasPositionInverse.x + canvasWidth) >= Math.floor(graphBBox.maxPoint.x)
        && Math.floor(canvasPositionInverse.y + canvasHeight) >= Math.floor(graphBBox.maxPoint.y));
}

Application.prototype.PushToStack = function (actionName) {
    var object = {};
    object.actionName = actionName;
    object.graphSave = this.graph.SaveToXML(this.SaveUserSettings());

    this.undoStack.push(object);

    while (this.undoStack.length > this.maxUndoStackSize) {
        this.undoStack.shift();
    }
}

Application.prototype.Undo = function () {
    if (this.IsUndoStackEmpty())
        return;

    var state = this.undoStack.pop();
    this.graph = new Graph();

    var userSettings = {};
    this.graph.LoadFromXML(state.graphSave, userSettings);
    if (userSettings.hasOwnProperty("data") && userSettings["data"].length > 0)
        this.LoadUserSettings(userSettings["data"]);

    this.redrawGraph();

    //console.log("undo:" + state.actionName + " size =" + this.undoStack.length);

    if (this.IsUndoStackEmpty())
        document.getElementById('GraphUndo').style.display = 'none';
}

Application.prototype.ClearUndoStack = function () {
    this.undoStack = [];
}

Application.prototype.IsUndoStackEmpty = function () {
    return (this.undoStack.length <= 0);
}

Application.prototype.SaveUserSettings = function () {
    var res = "{";

    var needEnd = false;
    var checkValue = [];

    checkValue.push({
        field: "edgeCommonStyle",
        value: this.edgeCommonStyle,
        check: this.isEdgeCommonStyleCustom
    });

    checkValue.push({
        field: "edgeSelectedStyles",
        value: this.edgeSelectedStyles,
        check: this.isEdgeSelectedStylesCustom
    });

    //checkValue.push({field: "edgePrintCommonStyle",
    //                 value: this.edgePrintCommonStyle});

    //checkValue.push({field: "edgePrintSelectedStyles",
    //                 value: this.edgePrintSelectedStyles});

    checkValue.push({
        field: "vertexCommonStyle",
        value: this.vertexCommonStyle,
        check: this.isVertexCommonStyleCustom
    });

    checkValue.push({
        field: "vertexSelectedVertexStyles",
        value: this.vertexSelectedVertexStyles,
        check: this.isVertexSelectedVertexStylesCustom
    });

    checkValue.push({
        field: "backgroundCommonStyle",
        value: this.backgroundCommonStyle,
        check: this.isBackgroundCommonStyleCustom
    });

    checkValue.push({
        field: "defaultVertexSize",
        value: this.defaultVertexSize,
        check: this.defaultVertexSize != null
    });

    checkValue.push({
        field: "defaultEdgeWidth",
        value: this.defaultEdgeWidth,
        check: this.defaultEdgeWidth != null
    });

    //checkValue.push({field: "vertexPrintCommonStyle",
    //                 value: this.vertexPrintCommonStyle});

    //checkValue.push({field: "vertexPrintSelectedVertexStyles",
    //                 value: this.vertexPrintSelectedVertexStyles});

    checkValue.forEach(function (entry) {
        if (!entry.check)
            return;

        if (needEnd)
            res = res + ",";

        res = res + "\"" + entry.field + "\"" + ":" + JSON.stringify(entry.value);
        needEnd = true;
    });

    res = res + "}";

    return this.EncodeToHTML(res);
}

Application.prototype.LoadUserSettings = function (json) {
    var checkValue = [];

    checkValue.push({
        field: "edgeCommonStyle",
        value: this.edgeCommonStyle,
        check: "isEdgeCommonStyleCustom",
        deep: false
    });

    checkValue.push({
        field: "edgeSelectedStyles",
        value: this.edgeSelectedStyles,
        check: "isEdgeSelectedStylesCustom",
        deep: true
    });

    //checkValue.push({field: "edgePrintCommonStyle",
    //                 value: this.edgePrintCommonStyle});

    //checkValue.push({field: "edgePrintSelectedStyles",
    //                 value: this.edgePrintSelectedStyles});

    checkValue.push({
        field: "vertexCommonStyle",
        value: this.vertexCommonStyle,
        check: "isVertexCommonStyleCustom",
        deep: false
    });

    checkValue.push({
        field: "vertexSelectedVertexStyles",
        value: this.vertexSelectedVertexStyles,
        check: "isVertexSelectedVertexStylesCustom",
        deep: true
    });

    checkValue.push({
        field: "defaultVertexSize",
        value: "defaultVertexSize",
        check: null,
        deep: false
    });

    checkValue.push({
        field: "defaultEdgeWidth",
        value: "defaultEdgeWidth",
        check: null,
        deep: false
    });

    //checkValue.push({field: "vertexPrintCommonStyle",
    //                 value: this.vertexPrintCommonStyle});

    //checkValue.push({field: "vertexPrintSelectedVertexStyles",
    //                 value: this.vertexPrintSelectedVertexStyles});

    checkValue.push({
        field: "backgroundCommonStyle",
        value: this.backgroundCommonStyle,
        check: this.isBackgroundCommonStyleCustom,
        deep: false
    });

    var decoderStr = this.DecodeFromHTML(json);
    var parsedSave = JSON.parse(decoderStr);

    var app = this;

    checkValue.forEach(function (entry) {
        if (parsedSave.hasOwnProperty(entry.field)) {
            if (typeof parsedSave[entry.field] === 'number') {
                app[entry.value] = parseInt(parsedSave[entry.field]);
            }
            else {
                if (!entry.deep)
                    entry.value.Clear();

                for (var k in parsedSave[entry.field]) {
                    if (!entry.deep) {
                        if (entry.value.ShouldLoad(k)) {
                            entry.value[k] = parsedSave[entry.field][k];
                        }
                    }
                    else {
                        // Check is number or not
                        if (k % 1 != 0)
                            continue;

                        entry.value[k].Clear();
                        for (var deepK in parsedSave[entry.field][k]) {
                            if (k < entry.value.length && entry.value[k].ShouldLoad(deepK))
                                entry.value[k][deepK] = parsedSave[entry.field][k][deepK];
                        }
                    }
                }
            }

            if (entry.check != null)
                app[entry.check] = true;
        }
    });
}

Application.prototype.EncodeToHTML = function (str) {
    return encodeURIComponent(str);
}

Application.prototype.DecodeFromHTML = function (str) {
    return decodeURIComponent(str);
}

Application.prototype.SetVertexStyle = function (index, style) {
    if (index == 0) {
        this.vertexCommonStyle = style;
        this.isVertexCommonStyleCustom = true;
    }
    else {
        this.vertexSelectedVertexStyles[index - 1] = style;
        this.isVertexSelectedVertexStylesCustom = true;
    }
}

Application.prototype.ResetVertexStyle = function (index) {
    if (index == 0) {
        this.vertexCommonStyle = new CommonVertexStyle();
        this.isVertexCommonStyleCustom = false;
    }
    else {
        this.vertexSelectedVertexStyles = FullArrayCopy(DefaultSelectedGraphStyles);
        this.isVertexSelectedVertexStylesCustom = false;
    }
}

Application.prototype.SetEdgeStyle = function (index, style) {
    if (index == 0) {
        this.edgeCommonStyle = style;
        this.isEdgeCommonStyleCustom = true;
    }
    else {
        this.edgeSelectedStyles[index - 1] = style;
        this.isEdgeSelectedStylesCustom = true;
    }
}

Application.prototype.ResetEdgeStyle = function (index) {
    if (index == 0) {
        this.edgeCommonStyle = new CommonEdgeStyle();
        this.isEdgeCommonStyleCustom = false;
    }
    else {
        this.edgeSelectedStyles = FullArrayCopy(DefaultSelectedEdgeStyles);
        this.isEdgeSelectedStylesCustom = false;
    }
}

Application.prototype.SetBackgroundStyle = function (style) {
    this.backgroundCommonStyle = style;
    this.isBackgroundCommonStyleCustom = true;
}

Application.prototype.ResetBackgroundStyle = function () {
    this.backgroundCommonStyle = new CommonBackgroundStyle();
    this.isBackgroundCommonStyleCustom = false;
}

Application.prototype.GetAvalibleCruvledValue = function (neighbourEdges, originalEdge) {
    return this.graph.GetAvalibleCruvledValue(neighbourEdges, originalEdge);
}

Application.prototype.GraphTypeChanged = function () {
    $("#CanvasMessage").text(this.graph.isMulti() ? g_GrapsIsMultiMessage : g_GrapsIsGeneralMessage);
}

Application.prototype.UpdateEdgePresets = function (weight) {
    var oldPresets = this.edgePresets;
    this.edgePresets = [1];
    oldPresets.unshift(weight);

    for (var i = 0; i < oldPresets.length; i++) {
        var k = oldPresets[i];
        if (!this.edgePresets.includes(k))
            this.edgePresets.push(k);

        if (this.edgePresets.length >= this.maxEdgePresets)
            break;
    }
}

Application.prototype.GetEdgePresets = function () {
    return this.edgePresets;
}

Application.prototype.SetSelectionRect = function (rect) {
    this.selectionRect = rect;
}

Application.prototype.GetSelectionRect = function (rect) {
    return this.selectionRect;
}

Application.prototype.GetStyle = function (type, styleName, object, index) {
    var correctIndex = index;
    if (correctIndex == undefined)
        correctIndex = 0;

    if (type == "vertex") {
        if (styleName == "common") {
            return object !== undefined ? object.getStyleFor(0) : this.vertexCommonStyle;
        }
        else if (styleName == "selected") {
            return object !== undefined && object.hasOwnStyleFor(correctIndex + 1) ? object.getStyleFor(correctIndex + 1) : this.vertexSelectedVertexStyles[correctIndex];
        }
        else if (styleName == "printed") {
            return this.vertexPrintCommonStyle;
        }
        else if (styleName == "printedSelected") {
            return this.vertexPrintSelectedVertexStyles[correctIndex];
        }

        return null;
    }
    else if (type == "edge") {
        if (styleName == "common") {
            return object !== undefined ? object.getStyleFor(0) : this.edgeCommonStyle;
        }
        else if (styleName == "selected") {
            return object !== undefined && object.hasOwnStyleFor(correctIndex + 1) ? object.getStyleFor(correctIndex + 1) : this.edgeSelectedStyles[correctIndex];
        }
        else if (styleName == "printed") {
            return this.edgePrintCommonStyle;
        }
        else if (styleName == "printedSelected") {
            return this.edgePrintSelectedStyles[correctIndex];
        }

        return null;
    }

    return null;
}

Application.prototype._RedrawGraph = function (context, backgroundPosition, backgroundStyle, bDrawSelectedRect,
    forceVertexCommon, forceVertexSeleceted, forceEdgeCommon, forceEdgeSelected) {
    var backgroundDrawer = new BaseBackgroundDrawer(context);

    backgroundDrawer.Draw(
        backgroundStyle,
        Math.max(this.canvas.width, this.GetRealWidth()),
        Math.max(this.canvas.height, this.GetRealHeight()),
        backgroundPosition,
        this.canvasScale);

    this.UpdateEdgesCurrentStyle(forceEdgeCommon, forceEdgeSelected);
    this.UpdateNodesCurrentStyle(forceVertexCommon, forceVertexSeleceted);

    this.RedrawEdges(context);
    this.RedrawNodes(context);
    if (bDrawSelectedRect && this.selectionRect != null)
        this.RedrawSelectionRect(context);
}

Application.prototype.GetSelectedVertexes = function () {
    var res = [];
    for (i = 0; i < this.graph.vertices.length; i++) {
        if (this.handler.GetSelectedGroup(this.graph.vertices[i]) > 0) {
            res.push(this.graph.vertices[i]);
        }
    }

    return res;
}

Application.prototype.GetSelectedEdges = function () {
    var res = [];
    for (i = 0; i < this.graph.edges.length; i++) {
        if (this.handler.GetSelectedGroup(this.graph.edges[i]) > 0) {
            res.push(this.graph.edges[i]);
        }
    }

    return res;
}

Application.prototype.SetDefaultVertexSize = function (diameter) {
    var oldDefaultDiameter = this.GetDefaultVertexSize();
    this.defaultVertexSize = diameter;

    for (i = 0; i < this.graph.vertices.length; i++) {
        if (this.graph.vertices[i].model.diameter == oldDefaultDiameter) {
            this.graph.vertices[i].model.diameter = diameter;
        }
    }
}

Application.prototype.GetDefaultVertexSize = function (diameter) {
    if (this.defaultVertexSize != null)
        return this.defaultVertexSize;
    else
        return defaultVertexDiameter;
}

Application.prototype.ResetVertexSize = function () {
    this.defaultVertexSize = null;

    for (i = 0; i < this.graph.vertices.length; i++) {
        this.graph.vertices[i].model.diameter = this.GetDefaultVertexSize();
    }
}

Application.prototype.SetDefaultEdgeWidth = function (width) {
    var oldDefaultWidth = this.GetDefaultEdgeWidth();
    this.defaultEdgeWidth = width;

    for (i = 0; i < this.graph.edges.length; i++) {
        if (this.graph.edges[i].model.width == oldDefaultWidth) {
            this.graph.edges[i].model.width = width;
        }
    }
}

Application.prototype.GetDefaultEdgeWidth = function (diameter) {
    if (this.defaultEdgeWidth != null)
        return this.defaultEdgeWidth;
    else
        return defaultEdgeWidth;
}

Application.prototype.ResetEdgeWidth = function () {
    this.defaultEdgeWidth = null;

    for (i = 0; i < this.graph.edges.length; i++) {
        this.graph.edges[i].model.width = this.GetDefaultEdgeWidth();
    }
}

Application.prototype.setEmscripten = function (processFunction) {
    this.processEmscriptenFunction = processFunction;
    console.log("Emscripten set");
}

Application.prototype.isSupportEmscripten = function () {
    return this.processEmscriptenFunction != null;
}

Application.prototype.processEmscripten = function (inputData) {
    return this.processEmscriptenFunction(inputData);
}
var SiteDir = "";
var DisableEmscripted = false;
var algorithmsVersion = 2;

var application = new Application(document, window);

var waitCounter = false;
var fullscreen = false;
var userAction = function (str) {
    if (typeof window.yaCounter25827098 !== "undefined") {
        console.log(g_language + "/" + str);
        window.yaCounter25827098.hit(window.location.protocol + "//" + window.location.hostname + (g_language != "ru" ? "/" + g_language : "") + "/UserAction#" + str);
    }
    else if (!waitCounter) {
        waitCounter = true;
        setTimeout(function () {
            userAction(str);
        }, 2000);
    }
}

var isIe = (navigator.userAgent.toLowerCase().indexOf("msie") != -1
    || navigator.userAgent.toLowerCase().indexOf("trident") != -1);

var buttonsList = ['AddGraph', 'ConnectGraphs', 'DeleteObject', 'Default'];
var g_ctrlPressed = false;

function restButtons(me) {
    var needSetDefault = false;
    for (var i = 0; i < buttonsList.length; i++) {
        if (buttonsList[i] != me) {
            document.getElementById(buttonsList[i]).className = "btn btn-default btn-sm";
        }
        else {
            if (document.getElementById(buttonsList[i]).className != "btn btn-default btn-sm") {
                needSetDefault = true;
            }
        }
    }
    if (needSetDefault) {
        document.getElementById(buttonsList[i]).className = "btn btn-primary btn-sm";
    }
    else {
        document.getElementById(me).className = "btn btn-primary btn-sm";
    }
}

var single = 0;

function resizeCanvas() {
    var adv = document.getElementById('bottom_info');
    var canvas = document.getElementById('canvas');
    canvas.width = document.getElementById('canvasSection').offsetWidth;
    var mainContainer = document.getElementById('mainContainer');
    var offset = (mainContainer.offsetTop) - (canvas.offsetTop + canvas.offsetHeight);
    offset = 150;

    canvas.height = $(window).height() - document.getElementById('canvas').offsetTop - offset;
    console.log(canvas.height)

    application.redrawGraph();
}

function touchHandler(event) {
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
    switch (event.type) {
        case "touchstart": type = "mousedown"; break;
        case "touchmove": type = "mousemove"; break;
        case "touchend": type = "mouseup"; break;
        default: return;
    }

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1,
        first.screenX, first.screenY,
        first.clientX, first.clientY, false,
        false, false, false, 0/*left*/, null);

    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function preLoadPage() {
    loadTexts();
    application.onLoad();
}

function createAlgorithmMenu() {
    var algorihtmsBaseId = "Algo";
    var algorithms = application.getAlgorithmNames();
    var index = 0;

    for (var i = 0; i < algorithms.length; i++) {
        algorithm = algorithms[i];

        var list = document.getElementById("algorithmCategoryElements" + algorithm.category);
        var item = document.getElementById("algTopic" + algorithm.category);
        var clone = item.cloneNode(true);
        var button = clone.getElementsByTagName("button")[0];
        var textSpan = button.getElementsByTagName("span")[1];
        button.id = algorithm.id;
        textSpan.innerHTML = algorithm.name;
        clone.style.display = "block";

        buttonsList.push(algorithm.id);

        button.onclick = function (e) {
            e["closeThisMenu"] = true;
            userAction(this.id);
            restButtons(this.id);
            application.SetHandlerMode(this.id);
        }

        var eventData = {};
        eventData.index = i;
        eventData.object = clone;
        eventData.algorithm = algorithm;

        $("#openAlgorithmList").bind('click', eventData, function (_eventData) {
            var data = _eventData.data;
            var algorithm = g_Algorithms[g_AlgorithmIds.indexOf(data.algorithm.id)](application.graph, application);

            if (application.graph.isMulti() && !algorithm.IsSupportMultiGraph())
                $(data.object).hide();
            else
                $(data.object).show();
        });

        list.insertBefore(clone, document.getElementById("insert" + algorithm.category));
        index++;
    }

}


function animationLoop() {
    // console.log(application.graph)
}

function postLoadPage() {
    application.userAction = userAction;
    setInterval(function () {
        animationLoop(application);
    }, 100)


    application.canvas.onmousemove = function (e) {
        return application.CanvasOnMouseMove(e);
    };

    application.canvas.onmousedown = function (e) {
        autosaveXML();
        return application.CanvasOnMouseDown(e);
    };

    application.canvas.onmouseup = function (e) {
        autosaveXML();
        return application.CanvasOnMouseUp(e);
    }

    application.canvas.onmousewheel = function (e) {
        var e = window.event || e; // old IE support
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        if (delta > 0) {
            application.multCanvasScale(1.3);
        }
        else {
            application.multCanvasScale(1.0 / 1.3);
        }
    }

    function getCharCode(event) {
        if (event.which == null) { // IE
            return event.keyCode;
        }

        if (event.which != 0 && event.charCode != 0) { // все кроме IE
            return event.which; // остальные
        }

        return null; // спец. символ
    }

    function getChar(event) {
        return String.fromCharCode(getCharCode(event)); // остальные
    }

    function selectHandler(buttonName, handlerName) {
        userAction(buttonName + "_shortcut");
        application.SetHandlerMode(handlerName);
    }

    document.onkeypress = function (e) {
        if (event.defaultPrevented
            || ($('#addVertex').hasClass('ui-dialog-content') && $('#addVertex').dialog('isOpen'))
            || ($('#adjacencyMatrix').hasClass('ui-dialog-content') && $('#adjacencyMatrix').dialog('isOpen'))
            || ($('#addEdge').hasClass('ui-dialog-content') && $('#addEdge').dialog('isOpen'))
            || ($('#incidenceMatrix').hasClass('ui-dialog-content') && $('#incidenceMatrix').dialog('isOpen'))
            || ($('#saveDialog').hasClass('ui-dialog-content') && $('#saveDialog').dialog('isOpen'))
            || ($('#saveImageDialog').hasClass('ui-dialog-content') && $('#saveImageDialog').dialog('isOpen'))
            || ($('#GroupRenameDialog').hasClass('ui-dialog-content') && $('#GroupRenameDialog').dialog('isOpen'))
            // || $('#developerTools').css("display") != "none"
            || ($('#NeedAlgorithm').hasClass('ui-dialog-content') && $('#NeedAlgorithm').dialog('isOpen'))) {
            console.log("prevent");
            return; // Should do nothing if the default action has been cancelled
        }


        var key = getChar(event);
        var code = getCharCode(event);
        console.log(key + " code=" + code);
        var evtobj = window.event ? event : e;
        var isCtrl = evtobj ? evtobj.ctrlKey : false;

        var moveValue = 10;
        if (e.key == ']') // +
        {
            application.multCanvasScale(1.5);
        }
        else if (e.key == '[') // -
        {
            application.multCanvasScale(1 / 1.5);
        }
        else if (key == 'w' || key == 'ц') // up
        {
            //            application.onCanvasMove(new Point(0, moveValue));
        }
        else if (key == 's' || key == 'ы') // down
        {
            // application.onCanvasMove(new Point(0, -moveValue));
        }
        else if (key == 'a' || key == 'ф') // left
        {
            // application.onCanvasMove(new Point(moveValue, 0));
        }
        else if (key == 'd' || key == 'в') // right
        {
            // application.onCanvasMove(new Point(-moveValue, 0));
        }
        else if (e.key == 'f' && e.ctrlKey) // right
        {
            document.getElementById('search-input').focus();
            e.preventDefault();
        }
        else if (key == 'v' || key == 'м') // vertex
        {
            selectHandler('AddGraph', 'addGraph');
        }
        else if (key == 'e' || key == 'у') // edge
        {
            selectHandler('ConnectGraphs', 'addArc');
        }
        else if (key == 'r' || key == 'к') // delete
        {
            selectHandler('DeleteObject', 'delete');
        }
        // Disabled becase it is easy to lose graph, when you press miss letter.
        //else if (key == 'n' || key == 'т') // new
        //{
        //    userAction('NewGraph_shortcut');
        //	application.SetHandlerMode("deleteAll");
        //    application.SetDefaultTransformations();
        //}
        else if (key == 'm' || key == 'ь') // move
        {
            selectHandler('Default', 'default');
        }
        else if (code == 26 && isCtrl) {
            // userAction("Key_GraphUndo");
            // application.SetHandlerMode("graphUndo");        
        }
        else if (key == 't') {
            // console.log('meowtch')
            // var x = Math.random() * application.canvas.width;
            // var y = Math.random() * application.canvas.height;
            // application.CreateNewGraph(x,y)
        }
    }

    $(document).keydown(function (event) {
        if (event.which == "17" || event.which == "91")
            g_ctrlPressed = true;
    });

    $(document).keyup(function () {
        g_ctrlPressed = false;
    });
    

    // var devTools = document.getElementById('developerTools');
    // devTools.style.left = 0;
    resizeCanvas();
    application.onPostLoadEvent();

    $(function () {
        $('#algorithmList').on('click', function (event) {
            if (!event.originalEvent.closeThisMenu) {
                event.stopPropagation();
            }
        });
        $(window).on('click', function () {
            $('#algorithmList').slideUp();
        });
    });


    let showHideCategory = function (button, elementsListName) {
        let width = $(button).width();
        let elementsList = $(elementsListName);
        var hideMark = button.querySelector('span[name="hideMark"]')
        var showMark = button.querySelector('span[name="showMark"]')
        if (elementsList.is(":visible")) {
            elementsList.hide();
            $(hideMark).show();
            $(showMark).hide();
        } else {
            elementsList.show();
            $(hideMark).hide();
            $(showMark).show();
        }
        $(button).width(width);

        userAction("algCategory_" + elementsListName);
    }

    // $(document.getElementById("algorithmCategoryBtn1").querySelector('span[name="hideMark"]')).hide();
    // $(document.getElementById("algorithmCategoryBtn0").querySelector('span[name="hideMark"]')).hide();

    // $('#algorithmCategoryBtn1').click(function(){
    //     showHideCategory(this, "#algorithmCategoryElements1");
    // });

    // $('#algorithmCategoryBtn0').click(function(){
    //     showHideCategory(this, "#algorithmCategoryElements0");
    // });
}

function addTag() {
    var obj = application.globalHoverObject;
    if (obj == null) return;
    var tagInput = document.getElementById('add-tag-input');
    if (tagInput.value.trim() == '') return;
    obj.nodeInfo.tags.push(new Tag(tagInput.value.trim()));
    listResoures(obj)
    tagInput.value = ''
}

//window.onload = function ()
$(document).ready(function () {

    resizeCanvas();
    application.LoadGraphFromString(localStorage.getItem('xml'))
    window.onresize = function (event) {
        resizeCanvas();
    }


    document.getElementById('canvas').addEventListener("touchstart", touchHandler, true);
    document.getElementById('canvas').addEventListener("touchmove", touchHandler, true);
    document.getElementById('canvas').addEventListener("touchend", touchHandler, true);
    document.getElementById('canvas').addEventListener("touchcancel", touchHandler, true);
    document.getElementById('add-tag-input').addEventListener("keypress", function (e) {
        if (e.key == "Enter") {
            e.preventDefault();
            addTag();
        }
    });


    // Try load emscripted implementation
    // var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
    // if (!isMobile && !DisableEmscripted) {
    //   const jsScript = document.createElement('script');
    //   jsScript.src   = '/script/Graphoffline.Emscripten.js';
    //   document.body.appendChild(jsScript);      
    //   jsScript.addEventListener('load', () => {
    // Module['onRuntimeInitialized'] = onRuntimeInitialized;
    // var process = Module.cwrap('ProcessAlgorithm', 'string', ['string']);
    // function onRuntimeInitialized() {
    //   application.setEmscripten(process);
    // }
    //   });
    // }
    /*
        $(document).ready(function(){
            //set up some basic options for the feedback_me plugin
            fm_options = {
                position: "left-bottom",
                message_placeholder: g_what_do_you_think,
                message_required: true,
                name_label: g_name,
                message_label: g_feedback,
                trigger_label: g_feedback,
                submit_label: g_send,
                title_label: g_write_to_us,	        
                feedback_url: "/feedback",
            };
            //init feedback_me plugin
            fm.init(fm_options);
        });
    */
});

Array.prototype.swap = function (x, y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
}
