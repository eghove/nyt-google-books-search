// pull in the models
const db = require("../models");

// define the methods for bookController.js

module.exports = {
  
  // returns everything in the database
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
