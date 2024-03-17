const express = require("express");
const router = express.Router();
const { Users } = require("../models"); //destructure the Post from the model
const multer = require("multer");
const path = require("path");
const fs = require("fs"); // Import the fs module

router.use(express.static('upload'))
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, './upload/images' )
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
  }
})

// Create multer instance
const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
  const listofUsers = await Users.findAll();
  res.json(listofUsers);

})

router.post('/', upload.single('image'), async (req, res) => {
try {
  const {firstName, lastName, userName, image} = req.body;
  const imageUrl = req.file.filename;

  const user = await Users.create({firstName, lastName, userName, image:imageUrl});

  res.json(user);
  
} catch (error) {
  if (error instanceof multer.MulterError) {
    // Multer error occurred
    console.error("Multer error:", error);
    res.status(400).json({ message: "File upload error" });
  } else {
    // Other errors
    console.error("Error uploading post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
 
});

module.exports = router;