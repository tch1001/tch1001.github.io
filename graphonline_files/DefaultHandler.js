/**
 * Default handler.
 * Select using mouse, drag.
 *
 */
function DefaultHandler(app) {
    this.removeStack = true;
    BaseHandler.apply(this, arguments);
    this.message = g_textsSelectAndMove + " <span class=\"hidden-phone\">" + g_selectGroupText + "</span>" + " <span class=\"hidden-phone\">" + g_useContextMenuText + "</span>";
    this.selectedObjects = [];
    this.dragObject = null;
    this.selectedObject = null;
    this.prevPosition = null;
    this.groupingSelect = false;
    this.selectedLogRect = false;
    this.selectedLogCtrl = false;
    this.saveUndo = false;

    this.addContextMenu();
}

// inheritance.
DefaultHandler.prototype = Object.create(BaseHandler.prototype);
// Is pressed
DefaultHandler.prototype.pressed = false;
// Cuvled change value.
DefaultHandler.prototype.curvedValue = 0.1;

DefaultHandler.prototype.GetSelectedVertex = function () {
    return (this.selectedObject instanceof BaseVertex) ? this.selectedObject : null;
}

DefaultHandler.prototype.MouseMove = function (pos) {
    if (this.dragObject) {
        if (!this.saveUndo) {
            this.app.PushToStack(new Command('move', {'from_position' : this.dragObject.position}));
            this.saveUndo = true;
        }

        this.dragObject.position.x = pos.x;
        this.dragObject.position.y = pos.y;
        this.needRedraw = true;
    }
    else if (this.selectedObjects.length > 0 && this.pressed && !this.groupingSelect) {
        if (!this.saveUndo) {
            this.app.PushToStack(new Command('move', {'from_position' : this.dragObject.position}));
            this.saveUndo = true;
        }

        var offset = (new Point(pos.x, pos.y)).subtract(this.prevPosition);
        for (var i = 0; i < this.selectedObjects.length; i++) {
            var object = this.selectedObjects[i];
            if (object instanceof BaseVertex) {
                object.position = object.position.add(offset);
            }
        }
        this.prevPosition = pos;
        this.needRedraw = true;
    }
    else if (this.pressed) {
        if (this.groupingSelect) {
            // Rect select.
            var newPos = new Point(pos.x, pos.y);
            this.app.SetSelectionRect(new Rect(newPos.min(this.prevPosition), newPos.max(this.prevPosition)));
            this.SelectObjectInRect(this.app.GetSelectionRect());
            this.needRedraw = true;
            if (!this.selectedLogRect) {
                userAction("GroupSelected.SelectRect");
                this.selectedLogRect = true;
            }
        }
        else {
            // Move work space
            this.app.onCanvasMove((new Point(pos.x, pos.y)).subtract(this.prevPosition).multiply(this.app.canvasScale));
            this.needRedraw = true;
        }
    }
}

DefaultHandler.prototype.MouseDown = function (pos) {
    this.dragObject = null;
    var selectedObject = this.GetSelectedObject(pos);
    if(selectedObject) console.log(selectedObject.height)
    var severalSelect = g_ctrlPressed;

    if (selectedObject == null || (!severalSelect && !this.selectedObjects.includes(selectedObject))) {
        this.selectedObject = null;
        this.selectedObjects = [];
        this.groupingSelect = g_ctrlPressed;
    }

    if ((severalSelect || this.selectedObjects.includes(selectedObject)) && (this.selectedObjects.length > 0 || this.selectedObject != null) && selectedObject != null) {
        if (this.selectedObjects.length == 0) {
            this.selectedObjects.push(this.selectedObject);
            this.selectedObject = null;
            this.selectedObjects.push(selectedObject);
        }
        else if (!this.selectedObjects.includes(selectedObject)) {
            this.selectedObjects.push(selectedObject);
        }
        else if (severalSelect && this.selectedObjects.includes(selectedObject)) {
            var index = this.selectedObjects.indexOf(selectedObject);
            this.selectedObjects.splice(index, 1);
        }
        if (!this.selectedLogCtrl) {
            userAction("GroupSelected.SelectCtrl");
            this.selectedLogCtrl = true;
        }
    }
    else {
        if (selectedObject != null) {
            this.selectedObject = selectedObject;
        }
        if ((selectedObject instanceof BaseVertex) && selectedObject != null) {
            this.dragObject = selectedObject;
            this.message = g_moveCursorForMoving;
        }
    }
    this.needRedraw = true;
    this.pressed = true;
    this.prevPosition = pos;
    this.app.canvas.style.cursor = "move";
}

DefaultHandler.prototype.MouseUp = function (pos) {
    this.saveUndo = false;
    this.message = g_textsSelectAndMove + " <span class=\"hidden-phone\">" + g_selectGroupText + "</span>" + " <span class=\"hidden-phone\">" + g_useContextMenuText + "</span>";
    this.dragObject = null;
    this.pressed = false;
    this.app.canvas.style.cursor = "auto";

    this.app.SetSelectionRect(null);

    this.groupingSelect = false;
    if (this.selectedObject != null && (this.selectedObject instanceof BaseVertex)) {
        this.message = g_textsSelectAndMove
            + "<div class=\"btn-group\" style=\"float:right;position: relative;\">"
            + "<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"
            + " " + g_action + " <span class=\"caret\"></span>"
            + " </button>"
            + "<ul class=\"dropdown-menu dropdown-menu-right\" style=\"z-index:15; position: absolute;\">"
            + " <li><a href=\"#\" id=\"renameButton\">" + g_renameVertex + "</a></li>"
            + " <li><a href=\"#\" id=\"changeCommonStyle\">" + g_commonVertexStyle + "</a></li>"
            + " <li><a href=\"#\" id=\"changeSelectedStyle\">" + g_selectedVertexStyle + "</a></li>"
            + "</ul>"
            + "</div>";

        var handler = this;
        var callback = function (enumType) {
            handler.RenameVertex(enumType.GetVertexText(0), handler.selectedObject);
            userAction("RenameVertex");
        };
        $('#message').unbind();
        $('#message').on('click', '#renameButton', function () {
            var customEnum = new TextEnumVertexsCustom(handler.app);
            customEnum.ShowDialog(callback, g_rename, g_renameVertex, handler.selectedObject.mainText);
        });
        $('#message').on('click', '#changeCommonStyle', function () {
            var selectedVertexes = handler.app.GetSelectedVertexes();
            var setupVertexStyle = new SetupVertexStyle(handler.app);
            setupVertexStyle.show(0, selectedVertexes);
        });
        $('#message').on('click', '#changeSelectedStyle', function () {
            var selectedVertexes = handler.app.GetSelectedVertexes();
            var setupVertexStyle = new SetupVertexStyle(handler.app);
            setupVertexStyle.show(1, selectedVertexes);
        });
    }
    else if (this.selectedObject != null && (this.selectedObject instanceof BaseEdge)) {
        this.message = g_textsSelectAndMove
            + "<span style=\"float:right;\"><button type=\"button\" id=\"incCurvel\" class=\"btn btn-default btn-xs\"> + </button>"
            + " " + g_curveEdge + " "
            + "<button type=\"button\" id=\"decCurvel\" class=\"btn btn-default btn-xs\"> - </button> &nbsp; "
            + "<div class=\"btn-group\" style=\"float:right;position: relative;\">"
            + "<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"
            + " " + g_action + " <span class=\"caret\"></span>"
            + " </button>"
            + "<ul class=\"dropdown-menu dropdown-menu-right\" style=\"z-index:15; position: absolute;\">"
            + " <li><a href=\"#\" id=\"editEdge\">" + g_editWeight + "</a></li>"
            + " <li><a href=\"#\" id=\"changeCommonStyle\">" + g_commonEdgeStyle + "</a></li>"
            + " <li><a href=\"#\" id=\"changeSelectedStyle\">" + g_selectedEdgeStyle + "</a></li>"
            + "</ul>"
            + "</div>";

        var handler = this;
        $('#message').unbind();
        $('#message').on('click', '#editEdge', function () {
            var direct = false;
            var dialogButtons = {};

            dialogButtons[g_save] = function () {

                // handler.app.PushToStack("ChangeCurvelEdge");

                handler.selectedObject.SetWeight(document.getElementById('EdgeWeight').value);
                handler.selectedObject.SetUpText(document.getElementById('EdgeLable').value);

                handler.needRedraw = true;
                handler.app.redrawGraph();

                userAction("ChangeWeight");
                $(this).dialog("close");
            };

            document.getElementById('EdgeWeight').value = handler.selectedObject.useWeight ? handler.selectedObject.weight : g_noWeight;
            document.getElementById('EdgeWeightSlider').value = handler.selectedObject.useWeight ? handler.selectedObject.weight : 0;

            var edgePresets = handler.app.GetEdgePresets();
            var presetsStr = "<span onClick=\"document.getElementById('EdgeWeight').value='" + g_DefaultWeightPreset + "'; document.getElementById('EdgeWeightSlider').value='" + g_DefaultWeightPreset + "';\" style=\"cursor: pointer\" class=\"defaultWeigth\">" + g_DefaultWeightPreset + "</span>";

            for (var i = 0; i < edgePresets.length; i++) {
                var edgePreset = edgePresets[i];
                presetsStr += "<span onClick=\"document.getElementById('EdgeWeight').value='" + edgePreset + "'; document.getElementById('EdgeWeightSlider').value=" + edgePreset + ";\" style=\"cursor: pointer\" class=\"defaultWeigth\">" + edgePreset + "</span>";
            }
            document.getElementById("EdgesPresets").innerHTML = presetsStr;
            document.getElementById('EdgeLable').value = handler.selectedObject.upText;

            $("#addEdge").dialog({
                resizable: false,
                height: "auto",
                width: "auto",
                modal: true,
                title: g_editWeight,
                buttons: dialogButtons,
                dialogClass: 'EdgeDialog',
                open: function () {
                    $(handler).off('submit').on('submit', function () {
                        return false;
                    });
                }
            });
        });

        $('#message').on('click', '#incCurvel', function () {
            // handler.app.PushToStack("ChangeCurvelEdge");

            handler.selectedObject.model.ChangeCurvedValue(DefaultHandler.prototype.curvedValue);
            handler.needRedraw = true;
            handler.app.redrawGraph();
            userAction("Edge.Bend");
        });
        $('#message').on('click', '#decCurvel', function () {
            // handler.app.PushToStack("ChangeCurvelEdge");

            handler.selectedObject.model.ChangeCurvedValue(-DefaultHandler.prototype.curvedValue);
            handler.needRedraw = true;
            handler.app.redrawGraph();
            userAction("Edge.Bend");
        });
        $('#message').on('click', '#changeCommonStyle', function () {
            var selectedEdges = handler.app.GetSelectedEdges();
            var setupVertexStyle = new SetupEdgeStyle(handler.app);
            setupVertexStyle.show(0, selectedEdges);
        });
        $('#message').on('click', '#changeSelectedStyle', function () {
            var selectedEdges = handler.app.GetSelectedEdges();
            var setupVertexStyle = new SetupEdgeStyle(handler.app);
            setupVertexStyle.show(1, selectedEdges);
        });
    }
    else if (this.selectedObjects.length > 0) {
        this.message = g_dragGroupText + " <span class=\"hidden-phone\">" + g_selectGroupText + "</span>";

        var hasVertexes = false;
        var hasEdges = false;
        for (var i = 0; i < this.selectedObjects.length; i++) {
            var object = this.selectedObjects[i];
            if (object instanceof BaseVertex) {
                hasVertexes = true;
            }
            else if (object instanceof BaseEdge) {
                hasEdges = true;
            }
        }

        this.message = this.message + "<span style=\"float:right;position: relative;\">";

        this.message = this.message
            + "<button type=\"button\" id=\"DublicateSelected\" class=\"btn btn-default btn-xs\">"
            + g_copyGroupeButton + "</button> &nbsp &nbsp"
            + "<button type=\"button\" id=\"RemoveSelected\" class=\"btn btn-default btn-xs\">"
            + g_removeGroupeButton + "</button>"

        this.message = this.message
            + " &nbsp &nbsp <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"
            + " " + g_action + " <span class=\"caret\"></span>"
            + " </button>"
            + "<ul class=\"dropdown-menu dropdown-menu-right\" style=\"z-index:15; position: absolute;\">";

        if (hasEdges) {
            this.message = this.message + " <li><a href=\"#\" id=\"changeCommonStyleEdge\">" + g_commonEdgeStyle + "</a></li>";
            this.message = this.message + " <li><a href=\"#\" id=\"changeSelectedStyleEdge\">" + g_selectedEdgeStyle + "</a></li>";
        }

        if (hasVertexes) {
            this.message = this.message + " <li><a href=\"#\" id=\"changeCommonStyleVertex\">" + g_commonVertexStyle + "</a></li>";
            this.message = this.message + " <li><a href=\"#\" id=\"changeSelectedStyleVertex\">" + g_selectedVertexStyle + "</a></li>";
        }

        this.message = this.message
            + "</ul>"
            + "</span>";

        var handler = this;
        $('#message').unbind();

        $('#message').on('click', '#DublicateSelected', function () {
            // handler.app.PushToStack("DublicateSelection");

            userAction("GroupSelected.Dublicate");

            var newSelected = [];
            var copyVertex = {};

            // Copy vertex
            for (var i = 0; i < handler.selectedObjects.length; i++) {
                var object = handler.selectedObjects[i];
                if (object instanceof BaseVertex) {
                    var newObject = new BaseVertex()
                    newObject.copyFrom(object);
                    newObject.vertexEnumType = null;
                    handler.app.AddNewVertex(newObject);
                    var vertex = newObject;
                    var diameter = (new VertexModel()).diameter;
                    vertex.position.offset(diameter, diameter);
                    newSelected.push(vertex);
                    copyVertex[object.id] = vertex;
                }
            }

            // Copy edge
            for (var i = 0; i < handler.selectedObjects.length; i++) {
                var object = handler.selectedObjects[i];
                if (object instanceof BaseEdge) {
                    var newObject = new BaseEdge()
                    newObject.copyFrom(object);

                    var toNewVertex = false;
                    if (newObject.vertex1.id in copyVertex) {
                        newObject.vertex1 = copyVertex[newObject.vertex1.id];
                        toNewVertex = true;
                    }
                    if (newObject.vertex2.id in copyVertex) {
                        newObject.vertex2 = copyVertex[newObject.vertex2.id];
                        toNewVertex = true;
                    }

                    handler.app.AddNewEdge(newObject);
                    if (!toNewVertex) {
                        var neighbourEdges = handler.app.graph.getNeighbourEdges(newObject);
                        if (neighbourEdges.length >= 1) {
                            var cruvled = handler.app.GetAvalibleCruvledValue(neighbourEdges, newObject);
                            newObject.model.SetCurvedValue(cruvled);
                        }
                    }
                    newSelected.push(newObject);
                }
            }

            handler.selectedObjects = newSelected;
            handler.needRedraw = true;
            handler.app.redrawGraph();
        });

        $('#message').on('click', '#RemoveSelected', function () {
            // handler.app.PushToStack("RemoveSelection");

            userAction("GroupSelected.Remove");

            for (var i = 0; i < handler.selectedObjects.length; i++)
                handler.app.DeleteObject(handler.selectedObjects[i]);
            handler.selectedObjects = [];
            handler.needRedraw = true;
            handler.app.redrawGraph();
            handler.message = g_textsSelectAndMove + " <span class=\"hidden-phone\">" + g_selectGroupText + "</span>";
        });

        if (hasEdges) {
            $('#message').on('click', '#changeCommonStyleEdge', function () {
                var selectedEdges = handler.app.GetSelectedEdges();
                var setupVertexStyle = new SetupEdgeStyle(handler.app);
                setupVertexStyle.show(0, selectedEdges);
            });
            $('#message').on('click', '#changeSelectedStyleEdge', function () {
                var selectedEdges = handler.app.GetSelectedEdges();
                var setupVertexStyle = new SetupEdgeStyle(handler.app);
                setupVertexStyle.show(1, selectedEdges);
            });
        }

        if (hasVertexes) {
            $('#message').on('click', '#changeCommonStyleVertex', function () {
                var selectedVertexes = handler.app.GetSelectedVertexes();
                var setupVertexStyle = new SetupVertexStyle(handler.app);
                setupVertexStyle.show(0, selectedVertexes);
            });
            $('#message').on('click', '#changeSelectedStyleVertex', function () {
                var selectedVertexes = handler.app.GetSelectedVertexes();
                var setupVertexStyle = new SetupVertexStyle(handler.app);
                setupVertexStyle.show(1, selectedVertexes);
            });
        }
    }

    this.needRedraw = true;
}

DefaultHandler.prototype.GetSelectedGroup = function (object) {
    return (object == this.dragObject) || (object == this.selectedObject) ? 1 : 0 || this.selectedObjects.includes(object);
}

DefaultHandler.prototype.SelectObjectInRect = function (rect) {
    this.selectedObjects = [];
    var vertices = this.app.graph.vertices;
    for (var i = 0; i < vertices.length; i++) {
        if (rect.isIn(vertices[i].position) && !this.selectedObjects.includes(vertices[i]))
            this.selectedObjects.push(vertices[i]);
    }

    // Selected Arc.
    var edges = this.app.graph.edges;
    for (var i = 0; i < edges.length; i++) {
        var edge = edges[i];

        if (rect.isIn(edge.vertex1.position) && rect.isIn(edge.vertex2.position) && !this.selectedObjects.includes(edge))
            this.selectedObjects.push(edge);
    }
}

