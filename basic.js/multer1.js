const fs = require("fs");
const express = require('express');
const app = express();
const bodyparser = require("body-parser");
const PORT = 8520;
const cors = require('cors');
const multer = require("multer");

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Setting up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'image/'); // Store files in 'image/' directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use original file name
  }
});

const upload = multer({ storage: storage }); // Corrected multer initialization

// File upload endpoint
app.post('/uploadimage', upload.single('file'), (req, res) => {
  res.send("File uploaded successfully");
  res.end();
});

// Endpoint to serve a list of image files
app.get('/getimage', (req, res) => {
  const dirPath = "C:/Users/Sir/Desktop/express/basic.js/image /"; // Directory path where images are stored
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return res.status(500).send("Unable to scan directory.");
    }
    const imageFiles = files.filter(file => file.endsWith('.jpg')); // Filter image files
    res.json(imageFiles); // Return the list of image file names
  });
});

// Serve a specific image file
app.get('/getimage1/:picname', (req, res) => {
  const fileName = req.params.picname;
  const filePath = `C:/Users/Sir/Desktop/express/basic.js/image /${fileName}`;
  
  // Check if file exists before sending
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send("Image not found.");
  }
});

// Start server
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
