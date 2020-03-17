const mongoose = require('mongoose');

let flowerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  description: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  price: {
    type: Number,

  },
  creationDate: {
    type: Date,
    default: Date.now()
  },
  flowerImages: {
    type: [String]
  },
  sponsored: {
    type: Boolean,
    default: false
  }
}, {
    toJSON: {
      // to delete some of model object 
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret.__v;
        delete ret._id;
      }
    }
  })
export const FlowerModel = mongoose.model('flower', flowerSchema);



