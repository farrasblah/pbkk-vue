const express = require("express");
const cors = require("cors");
const db = require("./app/models");
//const userRoutes = require('./app/routes/userRoutes'); // pastikan path sesuai
const registerRoutes = require('./app/routes/registerRoutes')
// const authRoutes = require('./routes/auth');
const app = express();

var corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route untuk API
app.use('/api', registerRoutes);

// Sinkronisasi dengan database
db.sequelize.sync().then(() => {
  console.log("Database synchronized.");
});

// Route sederhana
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});

// Jalankan server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
