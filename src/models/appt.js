const moongose = require('mongoose');
const { Schema } = moongose;
// const moment = require('moment-timezone');
// const dateThailand = moment.tz(Date.now(), "Asia/Bangkok");


const apptSchema =  new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  apptSchedule: { type: Date, required: true }, 
  // apptHour: { type: Date, required: true },
  // updateDate: { type: Date, default: moment.Date.now. }
});

module.exports = moongose.model('Appt', apptSchema);