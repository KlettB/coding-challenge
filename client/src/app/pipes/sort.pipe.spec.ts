import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {

  const sortPipe = new SortPipe();

  it('returns the sorted array', () => {
    const items = [{driverName: 'Michael Schumacher'}, {driverName: 'Fernando Alonso'}, {driverName: 'Lewis Hamilton'}];
    const field = 'driverName';

    const sortedResult = sortPipe.transform(items, field)

    expect(sortedResult).toEqual([{driverName: 'Fernando Alonso'}, {driverName: 'Lewis Hamilton'}, {driverName: 'Michael Schumacher'}]);
  });

  it('returns empty array if items is not defined', () => {
    const field = 'driverName';

    const sortedResult = sortPipe.transform(null, field)

    expect(sortedResult).toEqual([]);
  });

  it('returns sorted array (desc) if field is not defined', () => {
    const items = [{driverName: 'Fernando Alonso'}, {driverName: 'Aaron Mayer'}, {driverName: 'Michael Schumacher'}, {driverName: 'Lewis Hamilton'}];
    const field = '';

    const sortedResult = sortPipe.transform(items, field)

    expect(sortedResult).toEqual([{driverName: 'Lewis Hamilton'}, {driverName: 'Michael Schumacher'}, {driverName: 'Aaron Mayer'}, {driverName: 'Fernando Alonso'}]);
  });

});