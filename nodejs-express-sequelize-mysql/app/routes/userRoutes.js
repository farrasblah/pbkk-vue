// app/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const db = require("../models");
const User = db.User; // pastikan nama sesuai dengan model Anda

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Simpan user baru ke database
    const newUser = await User.create({ username, email, password });
    
    res.status(201).json({ message: "Registrasi berhasil", data: newUser });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Gagal menyimpan data user" });
  }
});

module.exports = router;
