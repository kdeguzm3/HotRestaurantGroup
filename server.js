// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server


// Set the port number. We'll use this later in our listener


// Set up the Express app to handle data parsing


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
// require htmlRoutes, too, using the same pattern

// =============================================================================
// LISTENER
// This code "starts" our server
// =============================================================================

// create an app listener that logs "App listening on Port: PORT"
