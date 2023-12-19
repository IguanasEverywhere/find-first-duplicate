function findFirstDuplicate(arr) {
  // create an empty object
  // iterate over arr
  // for each value in arr, check if key by that value exists in object
  // if it does, return value
  // if not, add this key to object (with value of 1)
  //if loop ends, return -1

  let obj = {}

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return arr[i];
    } else {
      obj[arr[i]] = 1;
    }
  }
  return -1
}

if (require.main === module) {
  //add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("Expecting: 2");
  console.log("=>", findFirstDuplicate([2, 2]));

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("Expecting: 1");
  console.log("=>", findFirstDuplicate([1, 1, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
