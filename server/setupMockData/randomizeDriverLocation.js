const randopeep = require('randopeep')
const fs = require('fs')

module.exports.randomizeDriverLocation = () => {
    const drivers = JSON.parse(fs.readFileSync('server/mocks/drivers.json', 'utf8'))

    const updatedDrivers = drivers.map(driver => {
        return { ...driver, location: randopeep.address.geo() }
    })

    fs.writeFileSync("server/mocks/drivers.json", JSON.stringify(updatedDrivers))
}
