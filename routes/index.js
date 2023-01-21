var express = require('express');
var router = express.Router();

const team = {
  tonya: {
    name:'TONYA',
    role: 'Project Manager',
    picture:'tonya.jpg',
    "description": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae, ullam nam quibusdam fuga voluptas doloremque natus architecto distinctio dolore nesciunt suscipit, illo qui pariatur nisi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae.'
  },

  evica: {
    name:'EVICA',
    role: 'Motion Designer',
    picture:'evica.jpg',
    "description": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae, ullam nam quibusdam fuga voluptas doloremque natus architecto distinctio dolore nesciunt suscipit, illo qui pariatur nisi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae.'
  },

  sian: {
    name:'SIAN',
    role: 'Graphic Designer',
    picture:'sian.jpg',
    "description": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae, ullam nam quibusdam fuga voluptas doloremque natus architecto distinctio dolore nesciunt suscipit, illo qui pariatur nisi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae.'
  },

  doyeon: {
    name:'DOYEON',
    role: 'Front-End Developer',
    picture:'doyeon.jpg',
    "description": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae, ullam nam quibusdam fuga voluptas doloremque natus architecto distinctio dolore nesciunt suscipit, illo qui pariatur nisi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae.'
  }, 

  mamatha: {
    name:'MAMATHA',
    role: 'Back-End Developer',
    picture:'mamatha.jpg',
    "description": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae, ullam nam quibusdam fuga voluptas doloremque natus architecto distinctio dolore nesciunt suscipit, illo qui pariatur nisi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae.'
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FIP TEAM PAGE' });
});

router.get('/team/:member', function(req, res){
  console.log(req.params.member);
  res.render('team', {person: team[req.params.member]});
})

module.exports = router;
