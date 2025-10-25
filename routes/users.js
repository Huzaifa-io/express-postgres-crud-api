const express = require("express");
const router = express.Router();
const db = require("../db");

// Create
router.post("/", async (req, res) => {
  const { name, age, phone, city } = req.body;
  const q = `INSERT INTO users (name, age, phone, city) VALUES ($1,$2,$3,$4) RETURNING *`;
  const user = await db.query(q, [name, age, phone, city]);
  res.json(user.rows[0]);
});

// Read all
router.get("/", async (req, res) => {
  const users = await db.query("SELECT * FROM users ORDER BY id DESC");
  res.json(users.rows);
});

// Read single
router.get("/:id", async (req, res) => {
  const u = await db.query("SELECT * FROM users WHERE id=$1", [req.params.id]);
  res.json(u.rows[0] || {});
});

// Update
router.put("/:id", async (req, res) => {
  const { name, age, phone, city } = req.body;
  const q = `UPDATE users SET name=$1, age=$2, phone=$3, city=$4 WHERE id=$5 RETURNING *`;
  const u = await db.query(q, [name, age, phone, city, req.params.id]);
  res.json(u.rows[0]);
});

// Delete
router.delete("/:id", async (req, res) => {
  await db.query("DELETE FROM users WHERE id=$1", [req.params.id]);
  res.json({ message: "User deleted" });
});

module.exports = router;
