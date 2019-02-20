const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
// pull in the Google API route
const googleRoute = require("./routes/apiRoutes/googleAPI");
// pull in the database route
const booksRoute = require("./routes/apiRoutes/mongoAPI");


//require the dotenv module
require("dotenv").config();

//loads the exported pieces from keys.js, which includes the Google Books API key
const keys = require("./keys.js");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define routes here
// the Google Books API route
app.use("/api/search", googleRoute);
// the MongoDB googlebooks database route
app.use("/api/books", booksRoute);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
  // console.log(keys.googleAPI.secret);
});
