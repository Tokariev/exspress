const exspress = require("express");
const router = exspress.Router();

router.get("/", (req, res) => {
  res.send("Posts list");
});

router.get("/new", (req, res) => {
  res.send("Post New Form");
});

module.exports = router;
