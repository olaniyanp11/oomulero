import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});
router.post("/dashboard", (req, res) => {
  res.render("users/dashboard");
});
export default router;
