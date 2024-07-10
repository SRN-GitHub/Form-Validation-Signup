const express = require('express')
const {addUser} = require('../Controller/controller')

const Router = express.Router()

Router.post("/addUser",addUser)

module.exports = Router;