import { FlowerModel } from '../models/flower/flower.models';
import { insertFlowerSchema, validateOnUpdateFlowerSchema } from '../models/flower/flower.schema';
const mongoose = require('mongoose');
import { urlConf } from './../utils/urlUpload';
import { validate } from '../middlewares/validator-ajv.middleware';

export default {

    async insertFlower(req, res, next) {
        try {
            if (!req.files) {
               return res.status(400).send('images required !');
            }
            flower
            validate(req.body, insertFlowerSchema)
            console.log(req.file);
            let flower = await FlowerModel.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                flowerImages: [
                    `${urlConf}/uploads/` + req.files[0].originalname ,
                    `${urlConf}/uploads/` + req.files[1].originalname ,
                    `${urlConf}/uploads/` + req.files[2].originalname
                 ],
            });
            res.status(201).send(flower);

        } catch (error) {
            next(error);
        }
    },
  
    async findFlowerById(req, res, next) {
        let { flowerId } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.flowerId)) {
                return res.status(400).send('please enter a valid  id '); // They didn't send an object ID
            }
            const flower = await FlowerModel.findById(flowerId);
            if (!flower) return res.status(400).send('flower not found');
            res.send(flower);

        } catch (error) {
            next(error);
        }
    },


}