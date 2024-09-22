import { Schema, model } from 'mongoose';

const BikeSchema = new Schema(
  {  
    name: { type: String, required: false  },
    owner_name: { type: String, required: false  },
    owner_address: { type: String, required: false  },
    owner_phone: { type: Number, required: false  },
    price: { type: Number, required: false  },
    tags: { type: [String] },
    favorite: { type: Boolean, default: false },
    stars: { type: Number, required: false},
    imageUrl: { type: String, required: false },
    photourl: { type: String, required: false },
    origins: { type: [String], required: false},
    cookTime: { type: String, required: false },
    mileage: { type: Number, required: false },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const BikeModel = model('Bike', BikeSchema);

export default BikeModel; // Export as default
