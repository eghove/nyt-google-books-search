const axios = require("axios");
const router = require("express").Router();
// const keys = require("../../keys");


// const apiKey = keys.googleAPI.secret;

// Google Books Search API route
// matches api/search
router.get("/:query", (req,res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=", {params: req.params.query} )
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;



