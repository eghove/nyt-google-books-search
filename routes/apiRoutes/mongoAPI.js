const router = require("express").Router();
// pull in the booksController

// Matches with "api/books"
router.route("/")
  // call the method in booksController that returns everything in the googlebooks database
  // .get(booksController.findAll)
  // .post(booksController.create);


// export the router
module.exports = router;