class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
  }

  push(newElement) {
    newElement = new Node(newElement);

    if(!this.head) {
      this.head = newElement;
      return
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }

    this.current.next = newElement;
    this.count++;
  }

}