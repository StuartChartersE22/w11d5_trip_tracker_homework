const assert = require('assert');
const Trip = require(`../models/Trip.js`)

describe('Trip', function () {

  let trip;

  beforeEach(function () {
    const detail1 = {
      name: `Pedal Africa`,
      location:`Southern Africa`,
      description: `Bike ride from Mozambique to Namibia`,
      startDate: `26/06/2012`,
      endDate: `05/08/2012`
    };

    trip1 = new Trip(detail1);
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
