const express = require('express')
const cors = require('cors')
const path = require('path')
const compression = require('compression');

const {setupDriverMockData} = require('./setupMockData/setupDriverMockData')
const {randomizeDriverLocation} = require('./setupMockData/randomizeDriverLocation')
const drivers = require('./resources/drivers')

const FIVE_SECONDS = 5000
const PORT = process.env.PORT || 3000
const app = express()

app.use(compression())
app.use(cors())
app.use(express.static(path.resolve(__dirname, '../client/dist')))

setupDriverMockData()
setInterval(randomizeDriverLocation, FIVE_SECONDS)

app.get('/drivers', drivers.get)

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../client/dist/index.html'))
})

app.listen(PORT, () => {
    console.log(`API is listening on ${PORT}`)
})
