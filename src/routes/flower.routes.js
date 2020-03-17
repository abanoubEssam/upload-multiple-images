import { upload } from '../middlewares/multer.middleware';
import flowersController from '../controllers/flower.controller';

const express = require('express');
const router = express.Router({mergeParams : true});

router.get('/:flowerId', flowersController.findFlowerById);
// router.put('/:flowerId', upload.array('flowerImages' , 3), flowersController.updateFlower);
// router.delete('/:flowerId', flowersController.deleteFlower);
router.post('/', upload.array('flowerImages' , 3), flowersController.insertFlower);
module.exports = router;