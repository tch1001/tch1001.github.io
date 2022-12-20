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
 * Graph drawer.
 */

// Test graph: http://localhost:8080/?graph=oimDPgsdgiAjWGBHZZcst

/**
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
/*
  Classes for create text for vertexs.
*/



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
        else if (key == 'd' || key == 'к') // delete
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
        else if (e.key == 'z' && e.ctrlKey) {
            userAction("Key_GraphUndo");
            application.SetHandlerMode("graphUndo");        
        }
        else if (e.key == 'r' && e.ctrlKey) {
            application.SetHandlerMode('graphRedo')
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
    listResources(obj)
    tagInput.value = ''
}


//window.onload = function ()
$(document).ready(function () {

    resizeCanvas();
    application.LoadGraphFromString(localStorage.getItem('xml'))
    document.getElementById('filename').value = localStorage.getItem('filename')
    globalFileId = localStorage.getItem('globalFileId')
    document.getElementById('global-file-id').innerText = globalFileId;
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
