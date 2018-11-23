const express = require('express');
const router = express.Router();

//club model
const Club =  require('../../models/Club');


// get api/clubs

//get all clubs
router.get('/', (req,res) => {
    Club.find()
    .sort({date:-1})
    .then(clubs => res.json(clubs))
});

//create a post
router.post('/', (req,res) => {
    const newClub = new Club({
        name: req.body.name
    });
    newClub.save().then(club => res.json(club)); 
});

//delete
router.delete('/:id', (req,res) => {
    Club.findById(req.params.id)
    .then(club => club.remove().then(() => res.json({success : true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;