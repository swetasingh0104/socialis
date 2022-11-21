const express = require('express');

const router = express.Router();
const likesController = require('../controllers/likes_controller');


router.post('/toggle', likesController.toggleLike);

router.get('/toggle',function(req, res){
    console.log(" likes toggle");
    res.send();
});
module.exports = router;