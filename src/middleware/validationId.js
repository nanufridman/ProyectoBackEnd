const { Appt } = require("../models/appt");

const validateId = async (req, res, next) => {

  const appt = await Appt.findById(req.params.id);

  appt !== null
    ? next()
    : res.status(500).json({ msg: "Reservation has not been found with provided id" });
};

module.exports = { validateId };
