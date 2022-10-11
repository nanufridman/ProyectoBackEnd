const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator')
const validationId = require('../middleware/validationId')
const axios = require('axios')

const Appt = require('../models/appt');

router.post('/create', async (req, res) => {
    const { name, lastName, apptDate, apptHour } = req.body;
    const apptSchedule = apptDate+':'+`${apptHour}-3`; // GMT-3
    const appointment = new Appt({ name, lastName, apptSchedule });
    await appointment.save();
    res.status(200).send({ id : appointment._id });
});

router.get('/get/:id', validationId, async (req, res) => {
  const apptId = req.params.id;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json(errors);
  }
  else {
  const appointment = await Appt.findById(apptId);
    if (appointment) {
      console.log(appointment)
      res.send(appointment);
    }
    else {
      res.status(404).send({ Status: 'Appointment not found' });
    }
  };
});

router.put('/update/:id', validationId, async (req, res) => {
  const { apptDate, apptHour } = req.body;
  const apptSchedule = apptDate+':'+`${apptHour}-3`; //GMT-3
  const apptId = req.params.id;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json(errors);
  }
  else {
    // try {
      const appointment = await Appt.findOneAndUpdate(
        { _id: apptId },
        { apptSchedule: apptSchedule },
        { returnDocument: 'after' }
      );
      if (!appointment) {
        res.status(404).send({ 'Status': 'Revise el Id' });
      }
      else {
        res.send(appointment);
      };
    };
  });
    // catch (error) {
    //   console.log(error);
      // res.status(404).send({ 'Status': 'Revise el Id' });
    // }
  // }
  // else {
  //   res.send( { Status: 'Appointment not updated' }, 404);
  // };

router.delete('/delete/:id', async (req, res) => {
  const apptId = req.params.id;
  // if (apptId.match(/^[0-9a-fA-F]{24}$/)) {
  try {
        // appointment = await Appt.findById(apptId);
        // console.log(apptId)
        const delappt = await Appt.findByIdAndDelete(apptId);
        if (!delappt) {
          res.status(404).send( { 'Status': `La reserva con Id: ${apptId} no se encuentra en nuestro sistema.` })
        }
        else {
          res.status(200).send( { 'Status': `La reserva con Id: ${apptId} fue cancelada.` })
        }
        // res.send(delappt)
  } catch (error) {
      console.log(error);
      res.status(404).send({ 'Status': 'Revise el Id' });
  }
  
  // else {
  //   res.send( { Status: 'Appointment not deleted' }, 404);
  // };
});

router.get('/list', async (req, res) => {
  const appointments = await Appt.find();
  res.json(appointments)
});

router.get('/dollar', async (req, res) => {
  const dollar = await axios.request({
    method: 'get',
    url: 'https://api-contenidos.lanacion.com.ar/json/V3/economia/cotizacionblue/DBLUE'
  })
  res.status(200).json({data: dollar.data });
});


module.exports = router