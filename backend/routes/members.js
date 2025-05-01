const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Member = require('../models/Member');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '..', 'uploads')),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  try {
    console.log("📦 Incoming form data:", req.body);
    console.log("🖼️ Uploaded file info:", req.file);

    const { name, roll, email, phone, department, about } = req.body;
    if (!req.file) throw new Error("File upload failed or missing image");

    const member = new Member({
      name,
      roll,
      email,
      phone,
      department,
      about,
      image: req.file.filename
    });

    await member.save();
    res.send(member);
  } catch (err) {
    console.error("❌ Error adding member:", err);
    res.status(500).send({ message: "Server Error", error: err.message });
  }
});

router.get('/', async (req, res) => {
  const members = await Member.find();
  res.send(members);
});

router.get('/:id', async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.send(member);
});

router.delete('/:id', async (req, res) => {
  try {
    await Member.findByIdAndDelete(req.params.id);
    res.send({ message: "Member deleted successfully" });
  } catch (err) {
    res.status(500).send({ error: "Failed to delete member" });
  }
});

module.exports = router;
