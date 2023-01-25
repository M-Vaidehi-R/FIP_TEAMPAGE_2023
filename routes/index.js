var express = require('express');
var router = express.Router();

const team = {
  tonya: {
    name: 'TONYA',
    role: 'Project Manager',
    "picture": 'tonya.png',
    "description": 'Hello! My name is Tonya Oliver and I was born and raised in London, Ontario, Canada. I am the Project Manager for our final integrated project. I am responisble for the scheduling of team meetings and creating deadlines. I will also be creating the wireframe design for our campaign microsite. I am looking forward to using my many skills and diving into the world of Project Managing!'
  },

  evica: {
    name: 'EVICA',
    role: 'Motion Designer',
    "picture": 'evica.png',
    "description": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae, ullam nam quibusdam fuga voluptas doloremque natus architecto distinctio dolore nesciunt suscipit, illo qui pariatur nisi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae.'
  },

  sian: {
    name: 'SIAN',
    role: 'Graphic Designer',
    "picture": 'sian.png',
    "description": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae, ullam nam quibusdam fuga voluptas doloremque natus architecto distinctio dolore nesciunt suscipit, illo qui pariatur nisi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae.'
  },

  doyeon: {
    name: 'DOYEON',
    role: 'Front-End Developer',
    "picture": 'doyeon.png',
    "description": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae, ullam nam quibusdam fuga voluptas doloremque natus architecto distinctio dolore nesciunt suscipit, illo qui pariatur nisi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae.'
  },

  mamatha: {
    name: 'MAMATHA',
    role: 'Back-End Developer',
    "picture": 'mamatha.png',
    "description": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae, ullam nam quibusdam fuga voluptas doloremque natus architecto distinctio dolore nesciunt suscipit, illo qui pariatur nisi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae.'
  }
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'FIP TEAM PAGE' });
});

router.get('/team/:member', function (req, res) {
  console.log(req.params.member);
  res.render('team', { person: team[req.params.member] });
})

module.exports = router;
