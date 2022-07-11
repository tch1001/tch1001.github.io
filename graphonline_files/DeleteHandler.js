
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
        application.SetHandlerMode('default')
        return;
    }

    if (!this.app.IsCorrectObject(selectedObject))
        return;

    // this.app.PushToStack("Delete");
    if(pushtostack) this.app.PushToStack(new Command("DeleteObject", {'obj': selectedObject}))
    this.app.DeleteObject(selectedObject);

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

