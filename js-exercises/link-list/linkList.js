import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    // code here
    const tempNode = new LinkListNode(value);
    if (this.head === null) {
      this.head = tempNode;
    } else {
      tempNode.next = this.head;
      this.head = tempNode;
    }

    return this.head;
  }

  append(value) {
    // code here
    const newNode = new LinkListNode(value);
    if (this.head === null) {
      this.head = newNode;
      return this.head;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return this.head;
  }

  delete(value) {
    // code here
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode.next) {
      if (currentNode.value === value) {
        if (prevNode === null) {
          this.head = currentNode.next;
        } else {
          prevNode.next = currentNode.next;
        }
        break;
      } else {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    if (currentNode.value === value) {
      if (prevNode === null) {
        this.head = currentNode.next;
      } else {
        prevNode.next = currentNode.next;
      }
    }

    return this.head;
  }

  traverse() {
    // code here
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
  }

  contains(value) {
    // code here
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return currentNode.value === value;
  }

  length() {
    // code here
    let listLength = 0;
    let currentNode = this.head;
    while (currentNode.next) {
      listLength += 1;
      currentNode = currentNode.next;
    }
    if (currentNode.value) listLength += 1;
    return listLength;
  }
}
