const randopeep = require('randopeep')
const fs = require('fs')

module.exports.randomizeDriverLocation = () => {
    const drivers = JSON.parse(fs.readFileSync('server/mocks/drivers.json', 'utf8'))

    const updatedDrivers = drivers.map(driver => {
        const location = {
            lat: parseFloat('41.' + (Math.floor(Math.random() * 300000 + 1) + 700000)), 
            lng: parseFloat('87.' + (Math.floor(Math.random() * 255000 + 1) + 645000)) * -1 
        }

        return { ...driver, location }
    })

    fs.writeFileSync("server/mocks/drivers.json", JSON.stringify(updatedDrivers))
}
