const {Image,AutorsBoock,Learn,ArticleRecources,Trusted} = require('../models/models');

const router = new require('express')();
const {getAllImage} = require('../controllers/ImageControllers');
const {getAllArticleRecources} = require('../controllers/ArticleRecourcesControllers');
const {getAllAutorsBoock} = require('../controllers/AutorsBoockControllers');
const {getAllLearn} = require('../controllers/LearnControllers');
const {getAllTrusted} = require('../controllers/TrustedControllers');
const { response } = require('express');

router.get('/image', getAllImage);
router.get('/article', getAllArticleRecources);
router.get('/autors', getAllAutorsBoock);
router.get('/learn', getAllLearn);
router.get('/trusted', getAllTrusted);

module.exports = router;