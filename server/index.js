const express = require('express')
const cors = require('cors')
const path = require('path')

const {setupDriverMockData} = require('./setupMockData/setupDriverMockData')
const {randomizeDriverLocation} = require('./setupMockData/randomizeDriverLocation')
const drivers = require('./resources/drivers')

const FIVE_SECONDS = 5000
const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())

setupDriverMockData()
setInterval(randomizeDriverLocation, FIVE_SECONDS)

app.get('/drivers', drivers.get)

// TODO: Serve Client

app.listen(PORT, () => {
    console.log(`API is listening on ${PORT}`)
})
