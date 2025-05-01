const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const memberRoutes = require('./routes/members');
app.use('/api/members', memberRoutes);

// Explicit MongoDB connection confirmation
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(process.env.PORT || 5000, () => console.log("🚀 Server started"));
  })
  .catch(err => console.log("❌ MongoDB connection error:", err));
