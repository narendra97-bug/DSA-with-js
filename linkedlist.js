class Node {
    constructor(data){
        this.data=data
        this.next=null
    }
}

class linkedList{
     constructor(){
        this.head=null
     }
     
 append(value){
    let newNode=new Node(value)
    let current=this.head
    if(!this.head){
        this.head=newNode
        return
    }
    while(current.next){
        current=current.next
    }
    current.next=newNode
 }
 
 printList(){
     let current=this.head
     while(current){
         console.log(current.data)
         current=current.next
     }
 }
 
 length(){
   let count=0
   let current=this.head
   if(!this.head){
        return count
    }
    while(current.next){
         count++
        current=current.next
    }
     return count+1
 }
 
 insertAtFirst(data){
      let newNode=new Node(data)
        if(!this.head){
        this.head=newNode
        return
    }
     else{
          newNode.next=this.head
          this.head=newNode
        }
    this.printList()
 }
 
 
}

let list1=new linkedList()
list1.append(10)
list1.append(20)
list1.append(30)
list1.append(40)
list1.append(50)
list1.insertAtFirst(12)
console.log(list1.length())















