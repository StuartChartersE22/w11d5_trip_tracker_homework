const assert = require('assert');
const Trip = require(`../models/Trip.js`)

describe('Trip', function () {

  let trip;

  beforeEach(function () {
    trip1 = new Trip(`Pedal Africa`, `Southern Africa`, `Bike ride from Mozambique to Namibia`, `26/06/2012`, `05/08/2012`);
    trip2 = new Trip(`Home`, `Hinckley`, `Home for Christmas`, `25/12/2017`);
  });

  it(`should have a name`, () => {
    assert.strictEqual(trip1.name, `Pedal Africa`);
  });

  it(`should have a start date`, () => {
    assert.strictEqual(trip1.startDate, `26/06/2012`);
  });

  it(`should have an end date`, () => {
    assert.strictEqual(trip1.endDate, `05/08/2012`)
  });

  it(`should have an end date equal to the start if not specified`, () => {
    assert.strictEqual(trip2.endDate, trip2.startDate);
  });

  it(`should have a location`, () => {
    assert.strictEqual(trip1.location, `Southern Africa`);
  });

  it(`should have a description`, () => {
    assert.strictEqual(trip1.description, `Bike ride from Mozambique to Namibia`)
  });

  // it(`should be able to get the parameters needed for a trip`, () => {
  //   const results = Trip.parameters();
  //   assert.deepStrictEqual(results, [`name`, `date`, `location`, `description`]);
  // });

});
