import axios from "axios";

export default {
  // get all  books from the database
  getBooks: function() {
    return axios.get("/api/books");
  },
  // save a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // delete a book from the database
  destroyBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // calls the google API route to search books
  searchBooks: function(query) {
    // make sure all runs of whitespace that might have found their way into the query get replaced with + signs.
    let modQuery = query.replace(/\s+/g, "+");
    return axios.get("/api/search/" + modQuery);
  }
}