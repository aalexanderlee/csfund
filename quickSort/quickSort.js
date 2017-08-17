var unsorted = [];
for (var index = 0, t = 400000; index < t; index++) {
  unsorted.push(Math.round(Math.random()*t));
}

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array.splice(Math.floor(Math.random()*array.length), 1);

  var left = [];
  var right = [];

  array.forEach(function(el) {
    if (el<=pivot) {
      left.push(el);
    } else {
      right.push(el);
    }
  });

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log("Pre Sort:", unsorted.join(" "));
var sorted = quickSort(unsorted);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");
