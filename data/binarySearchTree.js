var Node = function(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

var BinarySearchTree = function() {
  this.head = null;
  this.size = 0;
}

BinarySearchTree.prototype.insert = function(value){
  if (this.head === null){
    this.head = new Node(value);
    this.size++;
  } else {
    var findAndInsert = function(currentNode){
      if (value > currentNode.value){
        if (currentNode.right === null){
          currentNode.right = new Node(value);
        } else {
          findAndInsert(currentNode.right);
        }
      } else if (value < currentNode.value){

        if (currentNode.left === null){
          currentNode.left = new Node(value);
        } else {
          findAndInsert(currentNode.left);
        }
      }
    }
    findAndInsert(this.head);
    this.size++;
  }
}



BinarySearchTree.prototype.search = function(target) {
  var check = false;
  var traverse = function(currentNode) {
    if(check) {
      return;
    } else if (currentNode === null) {
      return;
    } else if (currentNode.value === target) {
      check = true;
      return;
    }
    if(target > currentNode.value) {
      traverse(currentNode.right);
    } else if (target < currentNode.value) {
      traverse(currentNode.left);
    }
  }

  traverse(this.head);
  return check;
}



BinarySearchTree.prototype.delete = function(deleteValue) {
  var temp = [];

  var roundUp = function(currentNode) {
    if (currentNode === null) {
      return;
    } else {
      if (currentNode.value !== deleteValue) {
        temp.push(currentNode.value);
      }
    }
    roundUp(currentNode.right);
    roundUp(currentNode.left);
  }
  roundUp(this.head);

  if (temp.length === this.size) {
   console.log('deleteValue: ' + deleteValue + 'was not found in binary tree.');
   return;
  }

  var tempTree = new BinarySearchTree();
  temp.forEach(function(value) {
    tempTree.insert(value);
  })

  this.head = tempTree.head;
  this.size--;

  console.log(deleteValue + 'had deleted from tree.');
}

var test = new BinarySearchTree();

test.insert(100);
test.insert(50);
test.insert(150);
test.insert(200);
test.insert(125);
test.insert(75);
test.insert(25);
test.insert(30);
test.insert(20);

test.delete(20);
