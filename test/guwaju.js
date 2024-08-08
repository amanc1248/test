const _ = require('lodash');

const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: [4, 5]
    }
  }
};

const obj2 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: [5, 4]
    }
  }
};

// Check if the two objects are deeply equal
const areEqual = _.isEqual(obj1, obj2);

if (areEqual) {
  console.log('The objects are deeply equal.');
} else {
  console.log('The objects are different.');
}