const assert = require('assert');
const Trip = require(`../models/Trip.js`)

describe('Trip', function () {

  let trip;

  beforeEach(function () {
    trip = new Trip(`Pedal Africa`, `26/06/2012`, `Southern Africa`, `Bike ride from Mozambique to Namibia`)
  });

  it(`should have a name`, () => {
    assert.strictEqual(trip.name, `Pedal Africa`);
  });

});
