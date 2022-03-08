const { expect } = require('@jest/globals')
const fs = require('fs')

const {setupDriverMockData} = require('./setupDriverMockData')

jest.mock('fs')

describe('setupDriverMockData', () => {

    it('should read existing file, randomize location data and save file again', () => {
        fs.writeFileSync.mockReturnValue();

        setupDriverMockData();

        const createdMockFileContent = JSON.parse(fs.writeFileSync.mock.calls[0][1])

        expect(fs.writeFileSync).toHaveBeenCalled();
        expect(createdMockFileContent.length).toEqual(10)
    });

})
