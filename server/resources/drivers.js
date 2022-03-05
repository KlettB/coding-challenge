const fs = require('fs')

get = (request, response) => {
    fs.readFile('server/mocks/drivers.json', 'utf8', (error, data) => {
        // TODO:  Add error handling
        response.send(data)
    })
}

module.exports = {
    get,
}
