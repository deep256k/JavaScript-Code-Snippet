//TO-DO
// 1. check if Array is sorted or not

// 1. Print an Array;
// let myArr = [11, 2, 32, 40, 15, 5];
// let myArr2 = [1, 2, 3, 4, 5];
// function print(arr){
//  return arr;
// }
// console.log(print(myArr));

//2. Sum of an Array

//  let sumResult = 0 ;
// function sum(arr){
//   for(let i of arr){
//     sumResult = sumResult + i;

//   }
//   return sumResult;
// }
// sum(myArr);
// console.log(sumResult);

//3. Second largest element of an array; TODO

// let sortedArray = myArr.sort((a,b) =>{
//     return a-b;

// });
// console.log(sortedArray[sortedArray.length-2]);

// for(let i=0;i<myArr.length;i++){
//     if(myArr[i]>myArr[i+1]){
//         let temp = 0
//         temp = myArr[i+1];
//         myArr[i+1] = myArr[i];
//         myArr[i] = temp;
//     }else{

//     }
// }
// console.log(myArr)

//4. Display the largest name;
// let strArray = ['Ricky','Markkk','Steve','Ole',];
// let strLength = '';
// for(let i of strArray){
//     if(i.length>strLength.length){
//         strLength = i;
//     }
// }
// console.log(strLength);

//5. Product of all the elements
// let product = 1;
// myArr2.forEach(element =>{
//   product = product*element
// });
// console.log(product);

//6. Second Largest

//Sort changes the original array

// let sortedArr = myArr.sort((a,b)=>{
//     return a-b;
// });
// console.log(sortedArr[sortedArr.length-2],myArr);

//7. Print Alternate elements in Array

// for(let i=1;i<=myArr.length;i++){
//     if(i%2 ===0){
//         console.log(myArr[i-1]);
//     }
//  //console.log(i)

// }

// for(let i=1 ;i<=myArr.length;i=i+2){
//     console.log(myArr[i]);

// }

//7. Palidromic Array

//let arr =[111 ,222 ,333 ,444, 555];
// //  let el = arr[0];
// //  let rev = el.toString().split('').reverse().join('');
// //  let rev2 = parseInt(rev)
// //  console.log(el===rev2)

//  for(let i of arr){
//      var flag = true;
//     let revStr = i.toString().split('').reverse().join('');
//     let revNumber = parseInt(revStr);
//     if(i !== revNumber){
//       flag = false;
//       break;
//     }
//  }
// if(flag){
//     console.log('palidromic array');
// }
// else{
//     console.log('not a palidromic array')
// }

//2.
// let number  = 1234;
// var revNum = 0;
// while(number>0){
//     var remainder = number%10;
//      revNum = (revNum*10)+remainder;
//      number = Math.floor(number/10);

// }
// console.log(revNum)
// function palidromicArray(arr){
//     for(let i of arr){
//         var flag = true;
//         var revNum = 0;
//         var temp = i;
//     while(i>0){
//         var remainder = i%10;
//          revNum = (revNum*10)+remainder;
//          i = Math.floor(i/10);
//     }
//     if(revNum === temp){
//         continue;
//     }
//     else{
//         return 0;
//     }
//     }
//     return 1;
// }

// console.log(palidromicArray(arr));

// var arr1 =[10,1,5,6];
// console.log(arr1.sort());

//8. Minimum chr in array;

//  let arr = [1 ,2 ,4,9 ,5 ,8 ,10];

// function getCount(arr,n){
//     var count = 0;
//     for(let i of arr){
//         if(i<=n){
//             count++
//         }
//     }
//     return count;
// }
// console.log(getCount(arr,9));

//9. Swap kth element;

// let myArr = [11, 20, 32, 40, 15, 5];
// function swap(arr, n) {
//   //let temp = 0;
//   arr[n - 1] = arr[n - 1] + arr[arr.length - n];
//   arr[arr.length - n] = arr[n - 1] - arr[arr.length - n];
//   arr[n - 1] = arr[n - 1] - arr[arr.length - n];
//   return arr;
// }

// console.log(swap(myArr, 2));

//10 find all elements in array except two greatest elements.

// let myArr = [11, 20, 32, 40, 15, 5];
// let sortedArray = myArr.sort((a,b)=>{
//     return a-b;
// });
// console.log(sortedArray);
// let resultarr = sortedArray.slice(0,sortedArray.length-2);

//11 compete the skill

// let a = [40,2,3]
// let b = [5,6,3]

// function compete(a,b){
//  let aScore = 0;
//  let bScore = 0;
//  for(let i=0;i<a.length; i++){
//      if(a[i]>b[i])
//      {
//          aScore++
//      }
//      else if(a[i] < b[i]){
//         bScore++
//      }

//  }
//  return [aScore,bScore];

// }
//console.log(compete(a,b));

//Q Roatate an array

//1 without build in

 //let myArr = [1, 2, 3, 4, 5, 6, 7];
// let a = 20;

// function leftRotateByOne(arr) {
//   let temp = arr[0];
//   for (var i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[i] = temp;
// }

// // d = no. of rotation
// function leftRoatate(arr,d) {
//   for(var i=0 ; i<d;i++) {
//       leftRotateByOne(arr)
//   }
// }

// leftRoatate(myArr,2)
// console.log(myArr);

//2 with build in

// function leftRoatate(arr) {
//  a = 30;
//  let temp = arr.slice(0,2);
//  let temp2 = arr.splice(2);
//  arr = [...temp2,...temp];
//  return arr;
// }

// console.log(leftRoatate(myArr));
// console.log(myArr);

//3. using only splice

// let x = myArr.splice(2);
// console.log(x.concat(myArr))

//Q right Rotation
// let x = myArr.splice(0,myArr.length-2);
// console.log(myArr.concat(x))

// by reversal alogorithim
// let myArr = [1, 2, 3, 4, 5, 6, 7];

// function reverse(arr,start,end){
//  while(start<end) {
//    var temp = arr[start];
//    arr[start] = arr[end];
//    arr[end] = temp;
//    start++;
//    end--
//  }
// }

// function leftRoatate(arr,d,n){
//     reverse(arr,0,d-1);
//     reverse(arr,d,n);
//     reverse(arr,0,n);
//     return arr;
// }

// console.log(leftRoatate(myArr,2,myArr.length-1))

//Q Program to cyclically rotate an array by one

// let myArr = [1, 2, 3, 4, 5, 6, 7];

// function rightRoatate(myArr) {
//     var temp = myArr[myArr.length-1];
//     for(var i=myArr.length-1;i>0;i--) {
//         myArr[i] = myArr[i-1]
//     }
//     myArr[0] = temp;
//     return myArr
// }

//  console.log(rightRoatate(myArr));

// 29th July

// search alogorithm

// let myArr = [2,6,9,30,7,10,40];

// function linearSearch(arr,element) {
//   for(let i=0;i<arr.length;i++) {
//       //console.log(i)
//      if(arr[i] === element) {
//       return i;
//      }     

//   }

//   return -1
// }

// console.log(linearSearch(myArr,9));

//  let myArr = [11, 20, 32, 40,10, 15, 5];
//  let binaerArray = [1,1,1,0,1,0,1]

// function bubbleSort(arr) {
//  for(i=0;i<arr.length;i++) {
//      for(j=0;j<(arr.length-i);j++){
//        if(arr[j]>arr[j+1]) {
//          [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//        }
//      }
//  }
//  return arr
// }
// console.log(bubbleSort(myArr));

// let sortedArray = [1,4,5,7,9,10,20,22,25]
// function binarySearch(arr,element) {
//  let start = 0;
//  let end = arr.length-1;
//  while(start <= end) {
//     let mid = Math.floor((start+end)/2);
//   if(element === arr[mid]) {
//       return mid;
//   }
//   else if(element> arr[mid]) {
//       start = mid + 1;
//   }
//   else {
//       end = mid -1
//   }
//  }
//  return false;
// }
// console.log(binarySearch(sortedArray,20));

// Q Search an element in a sorted and rotated array

// using build in
// difference between indexof and findindex

//  let sortedArray = [1,4,5,7,9,10,20,22,25]

// let index = sortedArray.indexOf(10);
// console.log(index)

//  let myArr = [1,2,3,4,5];
//  let rightRoatate = [5,1,2,3,4];


// //finding pivot using linear search
// function findPivot(arr) {
//   if(arr[0] < arr[arr.length-1]) {
//     return arr[arr.length-1];
//   }
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return i;
//     }
//   }
// }

// function binarySearch(arr,start,end,element) {
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] === element) {
//           return mid;
//         } else if (arr[mid] > element) {
//           end = mid - 1;
//         } else {
//           start = mid + 1;
//         }
//       }
//       return false
// }

// function SearchElement(arr, element) {
//   let pivot = findPivot(arr);
//   if (arr[0] > element) {
//       //search in the right array
//     let start = pivot + 1;
//     let end = arr.length;
//     let value = binarySearch(arr,start,end,element);
//      return value;
//   } 
  
//   else {
//     let start = 0;
//     let end = pivot;
//     let value =  binarySearch(arr,start,end,element)
//     return value;
//   }
// }

//   console.log(SearchElement(myArr,1))


// var search = function(nums, target) {

//   if(nums.length == 0 || nums == null) return -1;

//   let left = 0;
//   let right = nums.length-1;

//   while(left < right){
//       let mid = Math.floor((left+right)/2);
//       if(nums[mid]>nums[right]){
//           left = mid+1;
//       }else{
//           right = mid;
//       }
//   }

//   let pivot = left;
//   left = 0;
//   right = nums.length-1;

//   if(nums[pivot]<=target && target <= nums[right]){
//       left = pivot;
//   }else{
//       right = pivot;
//   }

//   while(left<=right){
//       let mid = Math.floor((left+right)/2);
//       //console.log(mid , nums[mid] , target);
//       if(nums[mid] == target){
//           return mid;
//       }
//       if(nums[mid]<target){
//           left = mid+1;
//       }else{
//           right = mid-1;
//       }
//   }
//   return -1;

// };

// console.log(search([1,2,3,4,5,6],4))

//Q Binary Array Sorting

//let arr = [1,0,1,1,0,0,0];
// function binarySegregation(arr) {
//   let zeroCount = 0;
//   let resultarr = []
//   for(let i of arr) {
//     if(i === 0) {
//       zeroCount++
//     }
//   }
//   for(i=0;i<zeroCount;i++){
//     resultarr.push(0);
//   }
//   for(i=zeroCount;i<arr.length;i++) {
//     resultarr.push(1);
//   }
//   return resultarr;
// }

// console.log(binarySegregation(arr))

// using sort
//  arr.sort((a,b) =>{
//    return a-b
//  });
//  console.log(arr);


// using bubble sort

// function binarySort(arr) {
// for(i=0;i<arr.length;i++){
//   for(j=0;j<arr.length-i;j++) {
//     if(arr[j]>arr[j+1]){
//       [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//     }
//   }
// }
// return arr
// }

// console.log(binarySort(arr))

//Q Maximum in Struct Array

// let arr = [3, 5 ,7, 9, 5, 6, 15, 5];

// function maxStruct(arr) {
//     let sumResult = 0;
//     let index = 0
//     for(i=0;i<arr.length;i += 2){
//         let sum = 12*arr[i] + arr[i+1];
//         if(sum>sumResult) {
//             sumResult = sum;
//             index = i;
//         }
//     }
//     return [sumResult,index];
// }

// console.log(maxStruct(arr));


//Q  number at the odd index is greater than the number at the previous even index

// let arr = [3, 5 ,17, 9, 5, 6, 15, 5];

// function oddMax(arr) {
//     for(i=0;i<arr.length;i += 2) {
//         if(arr[i]>arr[i+1]){
//             [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
//         }
//     }
//     return arr;
// }

// console.log(oddMax(arr));



//Q  Find unique element

// let arr = [6,2,5,2,6,6,2]

// function unique(arr) {
//      for(i=0;i<arr.length;i++){
//          for(j=0;j<arr.length;j++){
//              if(arr[j]===arr[i]&& i !== j){
                
//              }
//          }
//      }
// }
//console.log(unique(arr));

//Q Remove duplicates in an array;

// 1.Method using set

//let a = [1,2,3,4,1,3,6,4];
// //let b = [...new Set(a)];
// // or
// let myArr = Array.from(new Set(a))
// //console.log(b)
 //console.log(myArr)

// //2. using two loops

// let c = [];
// for(let i of a) {
//    if(c.indexOf(i) === -1){
//        c.push(i)
//    }
// }
// console.log(c)


// //3. using sort
// let resArr = [];
// let temp;
// a.sort();
// for(i=0;i<a.length;i++){
//     if(a[i] !== temp){
//         resArr.push(a[i]);
//         temp = a[i]
//     }
// }
// console.log(resArr);

//4. using object
// let arr1 = [5,5,6,4,6,7,7,8,1,1]
// let arr2 = ['a','b','c','a','c']
// let obj = {};
// for(let i of arr2){   
//     //obj[i] = true; this does not work in number
//     obj[i] = i;
// }
//  finalArr = Object.values(obj);
//  console.log(finalArr);



//  // note does't not store duplicate if key and values are same
// let myObj = {
//     a:1,
//     b:2,
//     c:3
// }
// myObj['a'] = 1;
// console.log(myObj)

// Q Flattening a Javascript Object
// var user = {
//     name: "Vishal",
//     address: {
//       primary: {
//         house: "109",
//         street: {             
//           main: "21",
//           cross: "32"
//         }
//       }
//     }
//   };
  
 //1. // using for each

//   var flattendObj = {};
//   const flattenObject = (obj, keyName='user') => {
//     Object.keys(obj).forEach(key => {
//       var newKey = `${keyName}_${key}` 
//       if (typeof obj[key] === "object") {
//         // calling the function again
//         flattenObject(obj[key],newKey);
//       } else {
//         flattendObj[newKey] = obj[key];

//       }
//     });
//     return flattendObj
//   };
 // console.log(flattenObject(user));

 //2 using for of loop

// let finalObject = {}
//  function flattenObject(obj) {
//     let objKeys = Object.keys(obj);
//     for(let key of objKeys) {
//         if(typeof obj[key] === 'object' && obj[key] !== null) {
//            flattenObject(obj[key]);
//         }
//         else {
//             finalObject[key] = obj[key]
//         }
//     }
//     return finalObject;
//  }
  
 //console.log(flattenObject(user))

 //let cloneobj =[];
//  Object.assign(cloneobj,user);
//  console.log(cloneobj)
//  user.address.primary.house = '110';
//  console.log(cloneobj);

// Object.assign(cloneobj,flattenObject(user));
// cloneobj.house = '112';
// console.log(cloneobj);
// console.log(user);
 
// let deepArray = [1,2,[3],4,[[6]]];
// var user1 = {
//     name: "Vishal",
//     address: {
//       primary: {
//         house: "109",
//         street: {             
//           main: "21",
//           cross: "32"
//         }
//       }
//     }
//   };

// const deepCopyFunction = (inObject) => {
//     let outObject, value
//      //console.log('input',inObject)
//     if (typeof inObject !== "object" || inObject === null) {
//       return inObject // Return the value if inObject is not an object
//     }
  
//     // Create an array or object to hold the values
//     outObject = Array.isArray(inObject) ? [] : {}
  
//     for (key in inObject) {
//       value = inObject[key]
//      // console.log('val',key ,value)
  
//       // Recursively (deep) copy for nested objects, including arrays
//       outObject[key] = deepCopyFunction(value);
//     //  console.log('res',outObject)

//     }
//      //console.log('final',outObject)
//     return outObject
//   }

//    console.log(deepCopyFunction(user1));

//     Object.assign(cloneobj,user);
//     console.log(cloneobj)
//     user.address.primary.house = '110';
//    console.log(cloneobj);


//  Object.assign(cloneobj,deepCopyFunction(deepArray));
//   console.log(cloneobj)
//   deepArray[4][0][0] = 10;
//   console.log(deepArray)
//   console.log(cloneobj);