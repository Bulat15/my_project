// const {Image,AutorsBoock,Learn,ArticleRecources} = require('../models/models');

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

// const  obj = Image.findOne({ where: {id: 3}});
// console.log(obj.id);

// Image.findOne({ where: {id: 3}}) ? console.log('true') : console.log('false');
// if(Image.findOne({ where: {id: 1}}) === ''){
//     console.log('true');
// }else{
//     console.log('false');
// }
// console.log(Image.findOne({ where: {id: 1}}))


module.exports = router;