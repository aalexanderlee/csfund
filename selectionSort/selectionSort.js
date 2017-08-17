// initialize this array length
var arraySize = 40;
// open an empty array to accept values
var array = [];
// loop through this array length called arraySize
for (var index = 0; index < arraySize; index++) {
  // get random numbers within this hypothetical array value spectrum
  var randomNumber = Math.round(Math.random() * arraySize);
  // push all of these random values from this generated spectrum into the array
  array.push(randomNumber);
}

// swap function
function swap(items, firstIndex, secondIndex) {
  // temp will be the value sitting in the first index position
  var temp = items[firstIndex];
  // value of the first index will become the value of the second index
  items[firstIndex] = items[secondIndex];
  // value of the second index will equal the value of the first index value
  items[secondIndex] = temp;
  //this will make these two values in different indices switch places
}

// selection sort the using the items as the argument
function selectionSort(items) {
  // len is the length of the items array
  var len = items.length;
  // min will be some kind of empty variable
  var min;

  // iterates this from the very first index of the items array
  for (var i = 0; i < len; i++) {
    // set index of minimum to this position
    min = i;
    //
    // iterates one space up from the first index of array items
    for (var j = i + 1; j < len; j++) {
      // this will check the value of the higher index to the lower index
      // if this higher index holds a lower value than the lower index value from min = i
      // make the new minimum index min i and the higher index of j equal to each other
      if (items[j] < items[min]) {
        min = j;
      }
    }
    // if the current index min i is not equal to the new min index min = j value
    // swap this crap
    if (i !== min) {
      swap(items, i, min);
    }
  }

  return items;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));
