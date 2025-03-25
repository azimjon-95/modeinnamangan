require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/admin.routes');
const factoryRoutes = require('./routes/factory.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use('/admin', adminRoutes);
app.use('/factories', factoryRoutes);

// Server Start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});