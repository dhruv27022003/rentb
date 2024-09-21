
import express from 'express';
import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import  BikeModel from '../models/bike.model.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer with diskStorage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Adjust the path to point to the root uploads folder
    cb(null, path.resolve(__dirname, '../../rentbi/src/assets')); // Points to project root uploads folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = Router();

// Serve static files from the root 'uploads' folder
const app = express();
app.use('/uploads', express.static(path.resolve(__dirname, '../../rentbi/src/assets')));
router.post(
  '/create',
  upload.single('photo'),
  asyncHandler(async (req, res) => {
    if (!req.file) {
      return res.status(400).send({ error: 'No file uploaded.' });
    }

    // Return the URL of the uploaded file
    const fileUrl = `${req.file.filename}`;
    res.send({ fileUrl });
    console.log("response sent")
  })
);


router.post(
  '/addbike',
  asyncHandler(async (req, res) => {

    const bike = new BikeModel(req.body);
    console.log("bike",bike)
    await BikeModel.create(bike);
    const fileUrl = `${req}`;

    console.log("response res",fileUrl)
  })
);

export default router;
