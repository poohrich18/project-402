const router = require('express').Router();
let Group = require('../models/group.model');

router.route('/').get((req, res) => {
  Group.find()
    .then(group => res.json(group))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  
  const groupname = req.body.groupname;
  const memberfirstname = req.body.memberfirstname;
  const memberlastname = req.body.memberlastname;
  const advisorfirstname = req.body.advisorfirstname;
  const advisorlastname = req.body.advisorlastname;

  const newGroup = new Group({
    groupname,
    memberfirstname,
    memberlastname,
    advisorfirstname,
    advisorlastname,
    
  });

  newGroup.save()
  .then(() => res.json('Group added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Group.findById(req.params.id)
    .then(group => res.json(group))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Group.findByIdAndDelete(req.params.id)
    .then(() => res.json('Group deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Group.findById(req.params.id)
    .then(group => {
      const groupname = req.body.groupname;
      const memberfirstname = req.body.memberfirstname;
      const memberlastname = req.body.memberlastname;
      const advisorfirstname = req.body.advisorfirstname;
      const advisorlastname = req.body.advisorlastname;

    group.save()
        .then(() => res.json('Group updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;