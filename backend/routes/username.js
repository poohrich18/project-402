const router = require('express').Router();
let Username = require('../models/username.model');

router.route('/').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log("Username",username);
  Username.find({id:username})
    .then(data =>{ 
     // console.log("type",data[0].type); 
 
      if(data[0].id == username){
        if(data[0].pass == password){
          res.send(data[0].type)
          res[1].send(data[0].username)
          //console.log(data[0].type);
        }
      }
    })
    .catch(err => res.status(400).json('Error: ' + err));
    //console.log("In",username)
});
// router.route('/').get((req, res) => {
//   Exercise.find()
//     .then(exercises => res.json(exercises))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/add').post((req, res) => {
  const id = Number(req.body.id);
  const pass = Number(req.body.pass);
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const year = Number(req.body.year);
  const type = req.body.type;
  const date = Date.parse(req.body.date);

  const newUsername = new Username({
    id,
    pass,
    firstname,
    lastname,
    year,
    type,
    date,
  });

  newUsername.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Username.findById(req.params.id)
    .then(username => res.json(username))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Username.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Username.findById(req.params.id)
    .then(username => {
    username.id = Number(req.body.id);
    username.pass = Number(req.body.pass);
    username.firstname = req.body.firstname;
    username.lastname = req.body.lastname;
    username.year = Number(req.body.year);
    username.type = req.body.type;
    username.date = Date.parse(req.body.date);

      username.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;