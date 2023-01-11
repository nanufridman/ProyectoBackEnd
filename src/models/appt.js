const moongose = require('mongoose');
const { Schema } = moongose.Schema;

const apptSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  apptSchedule: {
    type: Date,
    required: true,
  },
  dni: {
    type: Number,
    required: true,
    unique: true,
  },
});

const Appt = moongose.model('Appt', apptSchema);

module.exports = {
  Appt,
}
