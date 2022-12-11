const express = require('express');
const router = express.Router();
// const Appt = require("../models/appt");
// const { validationResult } = require("express-validator");
const validationId = require("../middleware/validationId");
const { getAppointment, createAppointment, changeAppointment, deleteAppointment, listAppointment, checkCurrency} = require("../controllers/indexControllers");
// const axios = require('axios');
  
router.get("/get/:id", validationId, getAppointment);
router.post("/create", createAppointment);
router.put("/update/:id", validationId, changeAppointment);
router.delete("/delete/:id", deleteAppointment);
router.get("/list", listAppointment);
router.get("/dollar", checkCurrency);

module.exports = router