const { expect } = require('@jest/globals');
const fs = require('fs');

const {randomizeDriverLocation} = require('./randomizeDriverLocation')

jest.mock('fs')

describe('randomizeDriverLocation', () => {

    const fsFileMock = '[{"driverGender":"female","driverName":"Rigoberta De Caxias","driverCityOrigin":"East Hucker","driverLanguage":"es","driverPhone":"073-229-7226 x2604","driverInfo":"Right-sized encompassing support","carMake":"Kong Inc","kmDriven":64133,"location":{"lat":41.792845,"lng":-87.66022}}]'

    it('should read existing file, randomize location data and save file again', () => {
        fs.readFileSync.mockReturnValue(fsFileMock);
        fs.writeFileSync.mockReturnValue();

        randomizeDriverLocation()

        expect(fs.readFileSync).toHaveBeenCalled();
        expect(fs.writeFileSync).not.toHaveBeenCalledWith(fsFileMock);
    });

})
