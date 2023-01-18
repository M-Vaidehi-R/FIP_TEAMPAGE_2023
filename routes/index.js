var express = require('express');
var router = express.Router();

const team = {
  tonya: {
    name:'TONYA',
    role: 'Project Manager',
    picture:'tonya.jpg'
  },

  evica: {
    name:'EVICA',
    role: 'Motion Designer',
    picture:'tonya.jpg'
  },

  sian: {
    name:'SIAN',
    role: 'Graphic Designer',
    picture:'sian.jpg'
  },

  doyeon: {
    name:'DOYEON',
    role: 'Front-End Developer',
    picture:'doyeon.jpg'
  }, 

  mamatha: {
    name:'MAMATHA',
    role: 'Back-End Developer',
    picture:'mamatha.jpg'
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FIP TEAM PAGE' });
});

router.get('/team/:member', function(req,res){
  console.log(req.params.member);
  res.render('team', {person: team[req.params.member]}); //if its justin, this member will be replaced by justin
})

module.exports = router;
