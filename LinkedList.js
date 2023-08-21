/*
    Data Structures: 

        Arrays & Strings: Built-In Types
    
        Linked Lists: Abstract Data Type
    
    Arrays
        - Built-In data structure
        - Indexing: first element stored at the first index 0
        - all the other elements are stored in the consecutive memory locations
        - accessing: numbers[index] -> element stored at that index : Random Access
        - Methods:
            - push: pushes the element to the end of the array
            - pop: removes the element from the end of the array
            - unshift: inserts the element to the beginning of the array
            - shift: removes the element from the beginning of the array
            - splice: inserts/removes an element at the specified index
            - forEach: iterates all the elements of the array and runs a callback function on every element
            - map
            - reduce
            - filter
            - sort
            - includes
            - join
            - length : property
*/

// let numbers = [4, 2, 5, 1, 3];

// numbers.push(7);
// numbers.push(6, 8);

// numbers.pop();

// numbers.unshift(10);
// numbers.shift();

// numbers.splice(1, 0, 42);

// numbers.splice(4, 1, 53);

// numbers.splice(1, 1);

// numbers.splice(3, 1);

// numbers[0] = 1;
// numbers[4] = 4;

// console.log(numbers);

// numbers.forEach((value, index) => {
//     console.log(value, index);
// });

// let word = 'apple';

// // word[1] = 'm';

// console.log(word.slice(0, 1) + 'm' + word.slice(2, ));


/*
    Linked Lists

    - Data Structure
    - Abstract data Type: user defined data type - user defines its behaviour, data and its operations
    - types:
        - singly linked lists
        - doubly linked lists
        - circularly linked lists
    - singly linked list
    - SLL is a chain of nodes/objects from different memory locations linked to one another.
*/

// let person101 = ['krish', 25, 10000, 'chennai'];

// let person102 = {
//     name: 'krish',
//     age: 25,
//     salary: 10000,
//     location: 'chennai'
// };

// // console.log(person101[0]);

// console.log(person102.location);

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// let node3 = new Node(3);

// let node4 = new Node(4);

// node3.next = node4;

// console.log(node3);

/*
    node3 = Node {
        data: 3,
        next: null
    }

    node4 = Node {
        data: 4,
        next: null
    }

    node3 = Node {
        data: 3,
        next: Node {
            data: 4,
            next: null
        }
    }
*/

// class Item {
//     constructor(value) {
//         this.value = value;
//         this.address = null;
//     }
// }

// class dob {
//     constructor(day, month, year) {
//         this.day = day;
//         this.month = month;
//         this.year = year;
//     }
// }

// let word = new String('apple');

// console.log(word);

// let numbers = new Array(1, 2, 3, 4, 5);

// console.log(numbers);

// let dob101 = new dob(19, 'feb', 2018);

// console.log(dob101);

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// let node1 = new Node(3);

// node1.next = new Node(4);
// node1.next.next = new Node(5);

// console.log(node1);

/*
    node1 = Node {
        data: 3,
        next: Node {
            data: 4,
            next: Node {
                data: 5,
                next: null
            }
        }
    }
*/

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
// }

// let list = new LinkedList();

// list.head = new Node(3);

// list.head.next = new Node(4);
// list.head.next.next = new Node(5);
// list.head.next.next.next = new Node(6);

// console.log(list);

/*
    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 4,
                next: Node {
                    data: 5,
                    next: Node {
                        data: 6,
                        next: null
                    }
                }
            }
        }
    }
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtTail(data) {
        // create a new node to insert
        let newNode = new Node(data);

        if (this.head == null) {
            // linked list is empty
            this.head = newNode;
        } else {
            let tail = this.head;

            while (tail.next != null) {
                tail = tail.next;
            }

            // tail is now pointing to the tailnode whose next is null
            tail.next = newNode;
        }
        this.length++;
    }

    toArray() {
        let nodes = [];
        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    length() {
        
    }
}

let list = new LinkedList();

list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);
list.insertAtTail(6);
list.insertAtTail(7);
list.insertAtTail(8);
list.insertAtTail(9);

console.log(list.toArray());
console.log(list.length);

/*
    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 4,
                next: null
            }
        }
    }

    tail = Node {
        data: 3,
        next: Node {
            data: 4,
            next: null
        }
    }
*/