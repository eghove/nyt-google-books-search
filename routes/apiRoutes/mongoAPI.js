const router = require("express").Router();
// pull in the books controller
const booksController = require("../../controllers/bookController");

// Matches with "/api/books"
router.route("/")
  // .get calls the method in booksController that returns everything in the googlebooks database
  .get(booksController.findAll)
  // .post calls the method in booksController that will add a book to the googlebooks database.
  .post(booksController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  // .delete calls ths method in bookController that will remove the book with provided id from the database
  .delete(booksController.destroy);


// export the router
module.exports = router;