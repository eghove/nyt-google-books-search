const axios = require("axios");
const router = require("express").Router();

// const keys = require("../../keys");


// const apiKey = keys.googleAPI.secret;

// Google Books Search API route
// matches api/search
router.get("/:query", (req,res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.query)
    .then((results) => res.json(results.data))
    .catch(err => res.status(422).json(err));
});

module.exports = router;



