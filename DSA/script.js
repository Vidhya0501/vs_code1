class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtHead(data) {
        // create a new node to insert
        let newNode = new Node(data);

        if (this.head == null) {
            // linked list is empty
            this.head = newNode;
        } else {
            newNode.next=this.head;
            this.head=newNode;
        }
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

    // length() {
    //     let nodes = 0;
    //     let thead = this.head;

    //     while (thead != null) {
    //         nodes++;
    //         thead = thead.next;
    //     }

    //     return nodes;
    // }

    // // homework
    // insertAtHead(data) {
        
    // }

    // // homework
    // deleteAtHead() {
        
    // }

    deleteAtHead() {
        // let thead = this.head;
        if (this.head ==null){
            return null;
        }
        else if(this.head.next!=null){
        const delnode= this.head;
        this.head=this.head.next;
        this.head.prev=null;
        }
        else{
            this.tail=null;
        }
    }
}

let list = new LinkedList();

list.insertAtHead(3);
list.insertAtHead(4);
list.insertAtHead(7);
list.insertAtHead(10);


list.deleteAtHead();
list.deleteAtHead();
// list.deleteAtTail();

console.log(list.toArray());
