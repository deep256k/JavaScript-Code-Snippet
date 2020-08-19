// interview question
// 1. convert nested Object
// 2. check type is JSON
// 3. pseduo classess and elements
//4. observalbes
//5. for in and for of
//6. can we search null with indexof
//7. null*32
//8. typeof a === undefined
//9. let a ;typeof a

// let a = [2,5,4,3];
// a.foo = 'bar';
// console.log(a)
// for(let i of a){
//     console.log(i)
// }

// for(let i in a){
//     console.log(i)
// }

// Queue implementation

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const resultArray = [];
// function weave(arr1,arr2) {
//     while(arr1[arr1.length-1] || arr2[arr2.length-1]){
//         if(arr1[arr1.length-1]) {
//             resultArray.unshift(arr1.pop())
//         }
//         if(arr2[arr2.length-1]) {
//             resultArray.unshift(arr2.pop())
//         }
//     }
//     console.log(resultArray)
// }
// weave(arr1,arr2);

// class Test{
//     constructor(msg){
//         this.msg = 'howw'
//     }
//     mymethod() {
//         console.log('hello');
//     }
// }

// l1 = new Test('are');
// console.log(l1.msg);
// l1.mymethod();

// //Linked List

// class Node {
//     constructor(data, next = null) {
//       this.data = data;
//       this.next = next;
//     }
//   }

//   class LinkedList {
//     constructor() {
//       this.head = null;
//     }
//     insertNode(data) {
//       this.head = new Node(data, this.head);
//     }
//     size() {
//       let counter = 0;
//       let node = this.head;
//       while (node) {
//         counter++;
//         node = node.next;
//       }
//       return counter;
//     }

//     getFirst() {
//       return this.head;
//     }

//     getLast() {
//       let lastNode = null;
//       let node = this.head;
//       if (!this.head) {
//         return null;
//       }
//       while (node.next) {
//         node = node.next;
//         if (node.next === null) {
//           lastNode = node;
//         }
//       }
//       return lastNode;
//     }

//     clear() {
//       this.head = null;
//     }

//     removeFirst() {
//       if (!this.head) {
//         return;
//       }
//       return (this.head = this.head.next);
//     }

//     removeLast() {
//       if (!this.head) {
//         return;
//       }
//       if (this.head.next === null) {
//         return (this.head = null);
//       }
//       let firstNode = this.head;
//       let secondNode = this.head.next;
//       while (secondNode.next) {
//         firstNode = secondNode;
//         secondNode = secondNode.next;
//       }
//       firstNode.next = null;
//     }

//     insertLast(data) {
//       let lastNode = new Node(data);
//       if (!this.head) {
//         this.head = lastNode;
//       }
//       let getLastNode = this.getLast();
//       getLastNode.next = lastNode;
//     }

//     getAt(index) {
//       let counter = 0;
//       let node = this.head;
//       while (node) {
//         if (counter === index) {
//           return node;
//         }
//         counter++;
//         node = node.next;
//       }
//       return null;
//     }

//     removeAt(index) {
//       if (!this.head) {
//         return;
//       }
//       if (index === 0) {
//         this.head = this.head.next;
//       }
//       const previous = this.getAt(index - 1);
//       if (previous || previous.next) {
//         previous.next = previous.next.next;
//       } else {
//         return;
//       }
//     }

//   }

//   const n1 = new Node(5);
//   const l1 = new LinkedList();
// l1.head = n1;
// l1.insertNode(10);
//   l1.insertNode(20);
//   l1.insertNode(30);
// console.log(l1);
// console.log(l1.size());
// console.log(l1.getFirst());
// console.log(l1.getLast());
// l1.clear();
// l1.removeFirst();
// l1.removeLast();
// l1.insertLast(5);
// l1.getAt(1);
// console.log(l1.getAt(2));
// l1.removeAt(1);
// console.log(l1)

// Bubble sort


//let arr = [10,2,1,20,20,30,5,10,3];


// function bubbleSort(arr){
//   for(i=0;i<arr.length;i++){
//     for(j=0;j<(arr.length-i);j++){
//       if(arr[j]>arr[j+1]){
//         //  let temp = arr[j];
//         //  arr[j]=arr[j+1];
//         //  arr[j+1]=temp;
//         [arr[j],arr[j+1]] = [arr[j+1],arr[j]] //swap using desstructing
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort(arr));

// Selection sort

// function selectionSort(arr) {
//   for(i=0; i<arr.length;i++){
//     let minIndex = i;
//     for(j=i+1;j<arr.length;j++){
//       if(arr[j]<arr[minIndex]){
//         minIndex = j;
//       }
//     }
//     if(minIndex !== i){
//       let lesser = arr[minIndex];
//       arr[minIndex] = arr[i];
//       arr[i] = lesser;
//     }
//   }
//   return arr;
// }

//console.log(selectionSort(arr));
// private isPrefilledSubject = new BehaviorSubject<boolean>(false);
// public readonly isPrefilled: Observable<boolean> = this.isPrefilledSubject.asObservable();

// setPreFilledvalue(val: boolean) {
//     this.isPrefilledSubject.next(val);
//   }

//   this.payBeneficiaryService.isPrefilled.subscribe(res => {
//     this.isPreFilled = res;
//   });
//   if (this.editDetails) {
//     this.paymentId = this.editDetails.PaymentId;
//   }
//   if(this.editDetails && !this.isPreFilled) {
//     this.formStore.setNoteDocumentName('Approver note.pdf',0);
//   }

//   this.payBeneficiaryService.setPreFilledvalue(false);

//   this.payBeneficiaryService.setPreFilledvalue(true);
