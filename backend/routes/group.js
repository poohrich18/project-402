const router = require("express").Router();
const { SystemUpdate } = require("@material-ui/icons");
const { update } = require("../models/group.model");
let Group = require("../models/group.model");

router.route("/").get((req, res) => {
  Group.find()
    .then((group) => res.json(group))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const groupname = req.body.groupname;
  const memberfirstname = req.body.memberfirstname;
  const memberlastname = req.body.memberlastname;
  const advisorfirstname = req.body.advisorfirstname;
  const advisorlastname = req.body.advisorlastname;
  console.log("groupname", groupname);
  const newGroup = new Group({
    groupname,
    memberfirstname,
    memberlastname,
    advisorfirstname,
    advisorlastname,
  });

  newGroup
    .save()
    .then(() => res.json("Group added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update1").put((req, res) => {
  const id = req.body.id;
  const groupname = req.body.groupname;
  try {
    Group.findById(id, (err, updateGroupname) => {
      updateGroupname.groupname = groupname;
      updateGroupname.save();
      res.send("update");
    });
  } catch (error) {
    console.log(error);
  }
});

router.route("/update2").put((req, res) => {
  const id = req.body.id;
  const memberfirstname = req.body.memberfirstname;
  try {
    Group.findById(id, (err, updateMemberFirstname) => {
      updateMemberFirstname.memberfirstname = memberfirstname;
      updateMemberFirstname.save();
      res.send("update");
    });
  } catch (error) {
    console.log(error);
  }
});

router.route("/update3").put((req, res) => {
  const id = req.body.id;
  const memberlastname = req.body.memberlastname;
  try {
    Group.findById(id, (err, updateMemberLastname) => {
      updateMemberLastname.memberlastname = memberlastname;
      updateMemberLastname.save();
      res.send("update");
    });
  } catch (error) {
    console.log(error);
  }
});

router.route("/update4").put((req, res) => {
  const id = req.body.id;
  const advisorfirstname = req.body.advisorfirstname;
  try {
    Group.findById(id, (err, updateAvisorFirstname) => {
      updateAvisorFirstname.advisorfirstname = advisorfirstname;
      updateAvisorFirstname.save();
      res.send("update");
    });
  } catch (error) {
    console.log(error);
  }
});

router.route("/update5").put((req, res) => {
  const id = req.body.id;
  const advisorlastname = req.body.advisorlastname;
  try {
    Group.findById(id, (err, updateAvisorLastname) => {
      updateAvisorLastname.advisorlastname = advisorlastname;
      updateAvisorLastname.save();
      res.send("update");
    });
  } catch (error) {
    console.log(error);
  }
});

router.route("/delete1/:id").delete((req, res) => {
  const id = req.params.id;
  Group.findByIdAndRemove(id).exec();
  res.send("delete");
});

router.route("/delete2/:id").delete((req, res) => {
  const id = req.params.id;
  res.send(id);
});

router.route("/:id").get((req, res) => {
  Group.findById(req.params.id)
    .then((group) => res.json(group))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Group.findByIdAndDelete(req.params.id)
    .then(() => res.json("Group deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Group.findById(req.params.id)
    .then((group) => {
      const groupname = req.body.groupname;
      const memberfirstname = req.body.memberfirstname;
      const memberlastname = req.body.memberlastname;
      const advisorfirstname = req.body.advisorfirstname;
      const advisorlastname = req.body.advisorlastname;

      group
        .save()
        .then(() => res.json("Group updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
