const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/authenticate-middleware");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json({ data: users });
    })
    .catch((err) => res.send(err));
});

module.exports = router;
