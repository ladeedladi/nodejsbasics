console.log('hello world')
const fs=require('fs')
fs.writeFileSync('hello.txt','hello node.js')
class Node
{
  constructor(data)
  {
    this.data = data;
    this.next = null;
  }
}

class LinkedList
{
  constructor()
  {
    this.head = null;
    this.size = 0;
  }
  
  insert(data)
  {
    let node = new Node(data);
    if(this.head == null)
    {
      this.head = node;
      this.size++;
    }else
    {
      let current = this.head;
      while(current.next != null)
      {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }
  
  remove(data)
  {
    if(this.head == null)
    {
      return -1;
    }
    let current = this.head;
    let prev = null;
    while(current != null)
    {
      if(current.data == data)
      {
        if(prev == null)
        {
          this.head = current.next;
        }else{
          prev.next = current.next;
        }
        this.size--;
        return current.data;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }
  
  printList()
  {
    //let current = this.head;
    while(this.head != null)
    {
      console.log(this.head.data);
      this.head = this.head.next; // current = current.next;
    }
  }
  
}

var ll = new LinkedList();
ll.insert(1);
ll.insert(3);
ll.insert(2);
ll.insert(5);

//ll.printList();

ll.remove(3);
ll.remove(2);

ll.insert(7);

ll.printList();
