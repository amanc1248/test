const _ = require('lodash');

const moveIds1 = ["1", "2", "3"];
const moveIds2 = ["3", "1", "2","a"];

const sortedMoveIds1 = _.sortBy(moveIds1);
const sortedMoveIds2 = _.sortBy(moveIds2);

if (_.isEqual(sortedMoveIds1, sortedMoveIds2)) {
    console.log("Arrays are equal");
} else {
    console.log("Arrays are not equal");
}
