/* exported gapiLoaded */
/* exported gisLoaded */
/* exported handleAuthClick */
/* exported handleSignoutClick */
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/drive';

// TODO(developer): Set to client ID and API key from the Developer Console
const CLIENT_ID = '827413712160-r9ffndduq3m93bsqmui33n05nt800eg0.apps.googleusercontent.com';
const API_KEY = 'AIzaSyD8mjjKuMprrGJjb3ZbZn7G5hS12_BsfzU';

// TODO(developer): Replace with your own project number from console.developers.google.com.
const APP_ID = 'sage-bonus-132823';

let tokenClient;
let accessToken = null;
let pickerInited = false;
let gisInited = false;
var globalFileId = null;

function exportToGdriveCallback(){ // with access token already
    var xml = application.graph.SaveToXML([]);
    var http = new XMLHttpRequest();
    var url;
    if(globalFileId){
        // PATCH https://www.googleapis.com/upload/drive/v3/files/fileId
        url = `https://www.googleapis.com/upload/drive/v3/files/${globalFileId}?uploadType=multipart`
        http.open('PATCH', url, true);
    }else{
        url = `https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart`;
        http.open('POST', url, true);
    }
    var formdata = new FormData();

    http.setRequestHeader('Authorization', "Bearer " + accessToken);

    http.onreadystatechange = function () {//Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            response = JSON.parse(http.response)
            alert('Saved into ' + response.name);
            globalFileId = response.id
            document.getElementById('global-file-id').innerText = globalFileId;
        }
    }
    var filename = document.getElementById('filename').value
    formdata.append("metadata", new Blob([JSON.stringify({ "name": `twigslot_${filename}.xml` })], { type: 'application/json' }))
    formdata.append("file", new Blob([xml], { type: 'text/xml' }));
    http.send(formdata);   
}
function exportToGdrive() {
    if(accessToken === null) handleAuthClick(exportToGdriveCallback);
    else exportToGdriveCallback();
}

function importFromGdrive(){
    if(accessToken === null) handleAuthClick(createPicker);
    else createPicker();
}

/**
 *  Create and render a Picker object for searching images.
 */
function createPicker() {
    const view = new google.picker.View(google.picker.ViewId.DOCS);
    view.setQuery("twigslot")
    // view.setMimeTypes('image/png,image/jpeg,image/jpg');
    view.setMimeTypes('text/xml');
    const picker = new google.picker.PickerBuilder()
        // .enableFeature(google.picker.Feature.NAV_HIDDEN)
        // .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
        .setDeveloperKey(API_KEY)
        .setAppId(APP_ID)
        .setOAuthToken(accessToken)
        .addView(view)
        .addView(new google.picker.DocsUploadView())
        .setCallback(pickerCallback)
        .build();
    picker.setVisible(true);
}

/**
 * Displays the file details of the user's selection.
 * @param {object} data - Containers the user selection from the picker
 */
function pickerCallback(data) {
    console.log(data)
    if (data.action === google.picker.Action.PICKED) {
        // document.getElementById('content').innerText = JSON.stringify(data, null, 2);
        const fileId = data[google.picker.Response.DOCUMENTS][0]['id']
        const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`;
        var http = new XMLHttpRequest();
        http.open('GET', url, true);
        http.setRequestHeader('Authorization', 'Bearer ' + accessToken);
        http.onreadystatechange = function () {//Call a function when the state changes.
            if (http.readyState == 4 && http.status == 200) {
                application.LoadGraphFromString(http.responseText);
                globalFileId = fileId;
                document.getElementById('global-file-id').innerText = globalFileId;
                document.getElementById('filename').value = data[google.picker.Response.DOCUMENTS][0]['name'].split('.xml')[0].replace('twigslot_','')
            }
        }
        http.send();
    }
}
function handleAuthClick(callback) { // callback is the fn to call aft signing in
    tokenClient.callback = async (response) => {
        if (response.error !== undefined) {
            throw (response);
        }
        accessToken = response.access_token;
        document.getElementById('signout_button').style.visibility = 'visible';
        document.getElementById('authorize_button').innerText = 'Refresh';
        if(callback) await callback();
    };

    if (accessToken === null) {
        // Prompt the user to select a Google Account and ask for consent to share their data
        // when establishing a new session.
        tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
        // Skip display of account chooser and consent dialog for an existing session.
        tokenClient.requestAccessToken({ prompt: '' });
    }
}

document.getElementById('authorize_button').style.visibility = 'hidden';
document.getElementById('signout_button').style.visibility = 'hidden';

/**
 * Callback after api.js is loaded.
 */
function gapiLoaded() {
    gapi.load('picker', intializePicker);
}

/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
function intializePicker() {
    pickerInited = true;
    maybeEnableButtons();
}

/**
 * Callback after Google Identity Services are loaded.
 */
function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
    });
    gisInited = true;
    maybeEnableButtons();
}

/**
 * Enables user interaction after all libraries are loaded.
 */
function maybeEnableButtons() {
    if (pickerInited && gisInited) {
        document.getElementById('authorize_button').style.visibility = 'visible';
    }
}

/**
 *  Sign in the user upon button click.
 */


/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick() {
    if (accessToken) {
        google.accounts.oauth2.revoke(accessToken);
        accessToken = null;
        document.getElementById('authorize_button').innerText = 'Authorize';
        document.getElementById('signout_button').style.visibility = 'hidden';
    }
}
