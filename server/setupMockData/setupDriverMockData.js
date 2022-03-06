const randopeep = require('randopeep')
const fs = require('fs')

module.exports.setupDriverMockData = () => {
    class Driver {
        constructor() {
            this.driverGender = ['male', 'female'][Math.floor(Math.random() * 2)],
            this.driverName = randopeep.name({gender: this.driverGender}),
            this.driverCityOrigin = randopeep.address.city(),
            this.driverLanguage = ['de', 'en', 'nl', 'fr', 'es', 'ar'][Math.floor(Math.random() * 6)],
            this.driverPhone = randopeep.address.phone()
            this.driverInfo = randopeep.corporate.catchPhrase(1),
            this.carMake = randopeep.corporate.name('large', 1),
            this.kmDriven = Math.floor(Math.random() * 100000),
            this.location = {lat: (Math.floor((Math.random() * 100000) + 750000) / 1000000) + 41, lng: (((Math.floor((Math.random() * 100000) + 650000) / 1000000) + 87)) * -1 }
        }
    }

    const drivers = [...new Array(10)].map(() => new Driver())

    // TODO: Use async method to write to file system
    fs.writeFileSync('server/mocks/drivers.json', JSON.stringify(drivers))
}
