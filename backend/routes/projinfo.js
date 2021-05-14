const router = require('express').Router();
let Projinfo = require('../models/projinfo.model');

router.route('/').get((req, res) => {
  Projinfo.find()
    .then((projinfo) => res.json(projinfo))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const projnamethai = req.body.projnamethai;
  const projnameeng = req.body.projnameeng;
  const member1firstname = req.body.member1firstname;
  const member1lastname = req.body.member1lastname;
  const id1 =  Number(req.body.id1);
  const semester1 = req.body.semester1;
  const member2firstname = req.body.member2firstname;
  const member2lastname = req.body.member2lastname;
  const id2 =  Number(req.body.id2);
  const semester2 = req.body.semester2;
  const advisor = req.body.advisor;
  
  const newProjinfo = new Projinfo({
    projnamethai,
    projnameeng,
    member1firstname,
    member1lastname,
    id1,
    semester1,
    member2firstname,
    member2lastname,
    id2,
    semester2,
    advisor,
  });

  newProjinfo
    .save()
    .then(() => res.json('Project added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Projinfo.findById(req.params.id)
    .then((projinfo) => res.json(projinfo))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Projinfo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Group deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Projinfo.findById(req.params.id)
    .then((projinfo) => {
        const projnamethai = req.body.projnamethai;
        const projnameeng = req.body.projnameeng;
        const member1firstname = req.body.member1firstname;
        const member1lastname = req.body.member1lastname;
        const id1 = req.body.id1;
        const semester1 = req.body.semester1;
        const member2firstname = req.body.member2firstname;
        const member2lastname = req.body.member2lastname;
        const id2 = req.body.id2;
        const semester2 = req.body.semester2;
        const advisor = req.body.advisor;

      projinfo
        .save()
        .then(() => res.json('Group updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
