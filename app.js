const port = 3000;
const express = require('express');
const app = express();

app.use('/graphonline_files', express.static(__dirname + '/graphonline_files'))
app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});
var server = app.listen(port, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });