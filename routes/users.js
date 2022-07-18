const exspress = require("express");
const router = exspress.Router();

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User list");
});

router.get("/new", (req, res) => {
  res.render("users/newUser", { firstName: "Test" });
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

router.post("/", (req, res) => {
  console.log(req.body.firstName);
  res.send(`Hi ${req.body.firstName}`);
});

router.post("/", (req, res) => {
  res.send("Create user");
});

router.get("/:id", (req, res) => {
  res.send(`Create User Wiht ID ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`Update User Wiht ID ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Delete User Wiht ID ${req.params.id}`);
});

// OR the same

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Create User Get Wiht ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User Wiht ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User Wiht ID ${req.params.id}`);
  });

const users = [{ firstName: "Mykola" }];

module.exports = router;
