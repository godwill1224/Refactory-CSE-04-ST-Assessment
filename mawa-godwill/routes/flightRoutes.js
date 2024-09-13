const express = require("express");
const router = express.Router();

// flight model
const Flight = require("../models/flight");

// flight routes
router.get("/", (req, res) => {
  res.render("booking-form");
});

router.post("/", async (req, res) => {
  try {
    const newFlight = Flight(req.body);
    await newFlight.save();
  } catch (error) {
    res.status(400).render("booking-form");
    console.log("Booking Flight Error", error);
  }
});

module.exports = router;
