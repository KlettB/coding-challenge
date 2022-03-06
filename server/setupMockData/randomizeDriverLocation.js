const randopeep = require('randopeep')
const fs = require('fs')

module.exports.randomizeDriverLocation = () => {
    const drivers = JSON.parse(fs.readFileSync('server/mocks/drivers.json', 'utf8'))

    const updatedDrivers = drivers.map(driver => {
        const location = {lat: (Math.floor((Math.random() * 100000) + 750000) / 1000000) + 41, lng: (((Math.floor((Math.random() * 100000) + 650000) / 1000000) + 87)) * -1 }

        return { ...driver, location }
    })

    fs.writeFileSync("server/mocks/drivers.json", JSON.stringify(updatedDrivers))
}
