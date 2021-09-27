const express = require("express");
const { sequelize, validate } = require("./api/config/db");
const { syncBlogTable } = require("./api/models/blog-post");
const { syncGalleryImageTable } = require("./api/models/gallery-image");
const { APIBlogRoutes } = require("./api/routes/blog");
const { APIGalleryRoutes } = require("./api/routes/gallery");

const app = express();

/* =================================================================================
DATABASE CONFIGURATIONS

The 'sequelize' variable initiates the database connection 

The validate function validates the connection 
and sends a console message with a confirmation 
message.

The sync table functions create or update tables 
from the defined schemas. This is the equivalent
of a database migrations.
=================================================================================*/
//  DATABASE CONNECTION VALIDATION
validate();
// MIGRATED BLOG MODEL
syncBlogTable();
// MIGRATE GALLERY IMAGE MODEL
syncGalleryImageTable();

/* API ROUTE INITIALIZATION
  /api/blog: handles all the client blog requests

  /api/gallery/images: handles all the  clients 
      gallery images requests
*/

// CLIENT BLOG ENDPOINTS
app.use("/api/blog", APIBlogRoutes);
// CLIENT GALLERY IMAGES ENDPOINTS
app.use("/api/gallery", APIGalleryRoutes);

/*================================================================================
SERVER LISTENER CONFIGURATION

Default post number: 3000
IF PORT variable exists, that will be used instead of default port number 
===================================================================================*/
const PORT = process.env.PORT || 3000;

// TEST ROUTE
app.get("/", (req, res) => {
  res.status(200).json({ message: "API works" });
});
// SERVER LISTENER
app.listen(PORT, (error) => {
  if (error) {
    console.error(
      `There was a problem attaching a listener to port number:${PORT}`,
      error
    );
  } else {
    console.log(`Server running on port number ${PORT}`);
  }
});
