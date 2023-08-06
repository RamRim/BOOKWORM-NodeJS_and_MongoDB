const route = require('express').Router()
const AboutController = require('../controllers/dashboard.controller')



route.get('/dashboard', AboutController.getPageAbout)


module.exports = route