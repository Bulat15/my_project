const {Image} = require('../models/models');

const router = new require('express')();
const {getAllImage} = require('../controllers/ImageControllers');
const {getAllArticleRecources} = require('../controllers/ArticleRecourcesControllers');
const {getAllAutorsBoock} = require('../controllers/AutorsBoockControllers');
const {getAllLearn} = require('../controllers/LearnControllers');
const {getAllTrusted} = require('../controllers/TrustedControllers');

router.get('/all-image', getAllImage);
router.get('/all-article', getAllArticleRecources);
router.get('/all-autors', getAllAutorsBoock);
router.get('/all-learn', getAllLearn);
router.get('/all-trusted', getAllTrusted);


// Image.create({url_title : '../Media/section_1_image_1.png'});
module.exports = router