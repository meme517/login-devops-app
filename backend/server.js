const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// API routes
app.use("/api", authRoutes);

// Serve React build
const buildPath = path.join(__dirname, "../frontend/build");
app.use(express.static(buildPath));

// Catch all remaining requests and send index.html
app.use((req, res) => {
  res.sendFile(path.join(buildPath, "index.html"), err => {
    if (err) {
      console.error("Error sending index.html:", err);
      res.status(500).send("index.html not found. Run 'npm run build' in frontend.");
    }
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
