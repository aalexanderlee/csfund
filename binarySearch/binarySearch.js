var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = array.sort();

// var arrayTwo = [1, 2, 3, 4];
// var newNewArray = arrayTwo.sort();

while (minIndex <= maxIndex) {
  // get a position near the middle of the array
  currentIndex = Math.floor((minIndex + maxIndex)/2);

  // get that element.
  currentElement = newArray[currentIndex];
  console.log('Start Index: ' + minIndex);
  console.log('End Index: ' + maxIndex);
  console.log('Current Element: ' + newArray[currentIndex]);

  //test it.
  if(currentElement < searchElement) {
  //if it's less than we are looking for, look above this value.
    minIndex = currentIndex + 1;

  } else if (currentElement > searchElement) {
  //if it's more than we are looking for, look below this value
    maxIndex = currentIndex -1;

  } else {
  //we found the value, return that index.
    console.log('Current Index: ' + currentIndex);
    console.log('Current Element: ', newArray[currentIndex]);
    console.log("-----------");
    return currentIndex;
    }

  }

  return false;
}
