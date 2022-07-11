

/**
 * Connection Graph handler.
 *
 */
function ConnectionGraphHandler(app) {
    this.removeStack = true;
    BaseHandler.apply(this, arguments);
    this.SelectFirst();
    this.addContextMenu();
}

// inheritance.
ConnectionGraphHandler.prototype = Object.create(BaseHandler.prototype);
// First selected.
ConnectionGraphHandler.prototype.firstObject = null;

ConnectionGraphHandler.prototype.GetSelectedVertex = function () {
    return (this.firstObject instanceof BaseVertex) ? this.firstObject : null;
}

ConnectionGraphHandler.prototype.AddNewEdge = function (selectedObject, isDirect, pushtostack = true) {
    var newEdge = this.app.CreateNewArc(this.firstObject, selectedObject, isDirect, document.getElementById('EdgeWeight').value, $("#RadiosReplaceEdge").prop("checked"), document.getElementById('EdgeLable').value);
    this.firstObject.edgesOut.push(newEdge)
    selectedObject.edgesIn.push(newEdge)
    if (pushtostack) this.app.PushToStack(new Command('AddNewEdge', { 'edge': newEdge }))

    this.SelectFirst();
    this.app.NeedRedraw();
}

ConnectionGraphHandler.prototype.SelectVertex = function (selectedObject) {
    if (this.firstObject) {
        var direct = false;
        var handler = this;

        this.ShowCreateEdgeDialog(this.firstObject, selectedObject, function (firstVertex, secondVertex, direct) {
            handler.AddNewEdge(secondVertex, direct);
        });
    }
    else {
        this.SelectSecond(selectedObject);
    }
    this.needRedraw = true;
}

ConnectionGraphHandler.prototype.MouseDown = function (pos) {
    var selectedObject = this.GetSelectedGraph(pos);
    if (selectedObject == null) {
        this.app.SetHandlerMode('default')
        return;
    }
    if (selectedObject && (selectedObject instanceof BaseVertex)) {
        this.SelectVertex(selectedObject);
    }
    else {
        this.SelectFirst();
        this.needRedraw = true;
    }
}

ConnectionGraphHandler.prototype.GetSelectedGroup = function (object) {
    return (object == this.firstObject) ? 1 : 0;
}

ConnectionGraphHandler.prototype.SelectFirst = function () {
    this.firstObject = null;
    this.message = g_selectFisrtVertexToConnect + this.GetSelect2VertexMenu();
}

ConnectionGraphHandler.prototype.SelectSecond = function (selectedObject) {
    this.firstObject = selectedObject;
    this.message = g_selectSecondVertexToConnect + this.GetSelect2VertexMenu();
}

ConnectionGraphHandler.prototype.SelectFirstVertexMenu = function (vertex1Text, vertex) {
    this.firstObject = null;
    this.SelectVertex(vertex);
}

ConnectionGraphHandler.prototype.UpdateFirstVertexMenu = function (vertex1Text) {
    if (this.firstObject) {
        vertex1Text.value = this.firstObject.mainText;
    }
}

ConnectionGraphHandler.prototype.SelectSecondVertexMenu = function (vertex2Text, vertex) {
    this.SelectVertex(vertex);
}

ConnectionGraphHandler.prototype.UpdateSecondVertexMenu = function (vertex2Text) {
    if (this.secondObject) {
        vertex2Text.value = this.secondObject.mainText;
    }
}
