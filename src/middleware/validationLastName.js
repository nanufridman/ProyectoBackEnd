const { Appt } = require("../models/appt");

const validateLastName = async (req, res, next) => {
  const appt = await Appt.findOne(req.params);
  if (appt !== null) {
    next();
  } else {
    res.status(500).json({ msg: "Lastname is not found in database, please try another one" });
  }
};

module.exports = { validateLastName };