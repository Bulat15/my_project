const {Image} = require('../models/models');

class ImageController {
    async getAllImage(req, res){
        const Img = await Image.findAll();
        return res.send(Img)
    }
}

module.exports = new ImageController();