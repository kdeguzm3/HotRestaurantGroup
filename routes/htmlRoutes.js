// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

const path = require("path")

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  app.get("/home", (request, response) => {
    response.sendFile(path.join(__dirname, "home.html"))
  
  // app.get("/tables", callbackFunction {
     // serve the appropriate webpage
  });

  // another get route to serve the reservations page
app.get("/reserve", (request, response) => {
  response.sendfile(path.join(__dirname, "reserve.html"))
});
  // a final route to serve the home page in the case of any other route
  // you can use "*" instead of "/"
app.get("/tables", (request, response) => { 
  response.endfile(path.join(__dirname, "table.html"))
});

};
