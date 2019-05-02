const express = require('express');

//linking the router with controller
//for home page
const homePage = require('../controller/homePage');
//for 10 users
const apiForTenUsers = require('../controller/tenUsers');

const apiForGithubUsers = require('../controller/githubUsers');

const postData = require('../controller/postData');

const getData =  require('../controller/getData');

//DEFAULT
const router = express.Router();


router.get('/', homePage.homePage);

router.get('/api/users/ten', apiForTenUsers.tenUsers);

router.get('/api/users/github', apiForGithubUsers.githubUsers);

router.post('/api/post/data', postData.createPost);

router.get('/api/get/data', getData.getData);

//Export router 
module.exports = router;