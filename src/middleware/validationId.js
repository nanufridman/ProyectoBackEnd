const express = require('express');
const { param, validationResult } = require('express-validator')


const validationId = param('id').isMongoId()

module.exports = validationId