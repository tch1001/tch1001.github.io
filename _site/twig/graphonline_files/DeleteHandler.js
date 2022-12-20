
/**
 * Delete Graph handler.
 *
 */
 function DeleteGraphHandler(app) {
    this.removeStack = true;
    BaseHandler.apply(this, arguments);
    this.message = g_selectObjectToDelete;
    this.addContextMenu();
}

// inheritance.
DeleteGraphHandler.prototype = Object.create(BaseHandler.prototype);

DeleteGraphHandler.prototype.MouseDown = function (pos, pushtostack = true) {
    var selectedObject = this.GetSelectedObject(pos);
    if (selectedObject == null) {
        this.app.SetHandlerMode('default')
        return;
    }

    if (!this.app.IsCorrectObject(selectedObject))
        return;

    // this.app.PushToStack("Delete");
    var cmd = new Command("DeleteObject", {'obj': selectedObject, 'affected_edges': []})
    this.app.DeleteObject(selectedObject, cmd);
    if(pushtostack) this.app.PushToStack(cmd)
    if(this.app.globalHoverObject == selectedObject){
        listResources(null)
    }

    this.needRedraw = true;

}

/**
 * Delete Graph handler.
 *
 */
function DeleteAllHandler(app) {
    BaseHandler.apply(this, arguments);
}

// inheritance.
DeleteAllHandler.prototype = Object.create(BaseHandler.prototype);

DeleteAllHandler.prototype.clear = function () {
    // this.app.PushToStack("DeleteAll");

    // Selected Graph.
    this.app.graph = new Graph();
    this.app.savedGraphName = "";
    this.needRedraw = true;
}

