const router = require("express").Router();
const googleRoute = require("./googleAPI");

// Google API route, called with /search
router.use("/search", googleRoute);


// export the router
module.exports = router;