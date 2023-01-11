const { Appt } = require("../models/appt");

const validateDni = async (req, res, next) => {
  const appt = await Appt.findById(req.params.id);
  if (appt !== null) {
    next();
  } else {
    res.status(500).json({ msg: "DNI is not valid" });
  }
};

module.exports = { validateDni };