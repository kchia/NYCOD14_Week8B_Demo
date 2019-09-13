var assert = require('assert');
var operations = require('./index');

it('correctly calculates the sum of 1 and 3', function() {
  assert.equal(operations.add(1, 3), 5);
});

it('correctly calculates the sum of -1 and -1', function() {
  assert.equal(operations.add(-1, -1), -2);
});

it('correctly calculates the difference of 33 and 3', function() {
  assert.equal(operations.subtract(33, 3), 30);
});

it('correctly calculates the product of 12 and 12', function() {
  assert.equal(operations.multiply(12, 12), 144);
});

it('correctly calculates the quotient of 10 and 2', () => {
  assert.equal(operations.divide(10, 2), 5);
});