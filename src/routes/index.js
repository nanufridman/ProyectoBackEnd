const express = require("express");
const router = express.Router();
const {
  getAppointment,
  createAppointment,
  changeAppointment,
  deleteAppointment,
  listAppointment,
  checkCurrency,
} = require("../controller/indexControllers");
const { validationId } = require("../middleware/validationDni");
const { validationId } = require("../middleware/validationId");
const { validationId } = require("../middleware/validationLastName");
const { check } = require("express-validator");

// GET
router.get("/get/:id", validationId, getAppointment)
router.get("/list", listAppointment)
router.get("/dollar", checkCurrency)

// POST
router.post(
  "/create",
  [
    check("name").not().isEmpty().withMessage("Insert your name"),
    check("lastName").not().isEmpty().withMessage("Insert your lastname"),
    check("date").not().isEmpty().withMessage("The field date is empty"),
    check("dni")
      .not()
      .isEmpty()
      .withMessage("Insert DNI")
      .isLength({ min: 6, max: 8 })
      .withMessage("DNI must be at least 8 numbers"),
  ],
  createAppointment
);

// PUT
router.put(
  "/update/:id",
  [
    check("name").not().isEmpty().withMessage("Insert your name"),
    check("lastName").not().isEmpty().withMessage("Insert your lastname"),
    check("date").not().isEmpty().withMessage("The field date is empty"),
    check("dni")
      .not()
      .isEmpty()
      .withMessage("Insert DNI")
      .isLength({ min: 6, max: 8 })
      .withMessage("DNI must be at least 8 numbers"),
  ],
  validationId,
  changeAppointment
);

// DELETE
router.delete("/delete/:id", deleteAppointment);

module.exports = router