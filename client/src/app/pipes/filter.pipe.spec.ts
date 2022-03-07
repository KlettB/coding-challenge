import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {

  const filterPipe = new FilterPipe();

  it('returns only filtered array', () => {
    const value = [{driverName: 'Michael Schumacher'}, {driverName: 'Mick Schumacher'}, {driverName: 'Lewis Hamilton'}];
    const args = 'Schum';

    const filteredResult = filterPipe.transform(value, args)

    expect(filteredResult).toEqual([{driverName: 'Michael Schumacher'}, {driverName: 'Mick Schumacher'}]);
  });

  it('returns null if value is not defined', () => {
    const value = null;
    const args = '123';

    const filteredResult = filterPipe.transform(value, args)

    expect(filteredResult).toBe(null);
  });

  it('returns initial value if args is not defined', () => {
    const value = [{driverName: 'Michael Schumacher'}, {driverName: 'Mick Schumacher'}, {driverName: 'Lewis Hamilton'}];
    const args = null;

    const filteredResult = filterPipe.transform(value, args)

    expect(filteredResult).toEqual([{driverName: 'Michael Schumacher'}, {driverName: 'Mick Schumacher'}, {driverName: 'Lewis Hamilton'}]);
  });

});
