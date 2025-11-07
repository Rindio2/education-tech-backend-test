// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const routes = require('./src/routes/user.routes');

dotenv.config(); // Load biến môi trường từ file .env

const app = express();
const port = process.env.PORT || 8080;

// ====== Middleware ======
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ====== Kết nối MongoDB ======
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ====== Routes ======
app.use('/', routes);

// ====== Khởi động server ======
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
