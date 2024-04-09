const express = require("express");
const router = express.Router();
const { Posts } = require("../models"); //destructure the Post from the model
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

//you can write different request //get//post//put
//always use asyc function when using sequelizer
router.get("/", async (req, res) => {
  const listofPosts = await Posts.findAll();
  res.json(listofPosts);
});

router.post("/", upload.single('image'), async (req, res) => {
  try {
    // Assuming you have title and description fields along with the image
    const { title, postText, username, image } = req.body;
    const imageUrl = req.file.filename // Assuming multer has added 'file' object to the request

    // Create a new post object with image URL and other data
    const post = await Posts.create({ title, postText, username, image:imageUrl });
  
    res.json(post);
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
