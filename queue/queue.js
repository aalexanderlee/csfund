class Queue {

  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    this.items.shift();
  }

  get first() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

var newQueue = new Queue();
newQueue.enqueue("Ahmen");
newQueue.enqueue("Roger");
newQueue.enqueue("John");

console.log(newQueue.first);
