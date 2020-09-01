//Write a JavaScript function to get the first element of an array.
//Passing a parameter 'n' will return the first 'n'  elements of the array.

// let arr = [1,2,3,4,5,6]

// function arrayReturn(arr,n) {
//     if(!n){
//         return arr[0]
//     }
//     else {
//         return arr.splice(0,n)
//     }
// }
// console.log(arrayReturn(arr))

// //Q To return last element

// var last =  function(array, n) {
//     if (array == null)
//       return void 0;
//     if (n == null)
//        return array[array.length - 1];
//     return array.slice(Math.max(array.length - n, 0));
//     };

//     console.log(last([7, 9, 0, -2]));
//     console.log(last([7, 9, 0, -2],3));
//     console.log(last([7, 9, 0, -2],6));

//Q Insert dashes between two even number

 //let num = 5683246;
// let str = num.toString().split('');
// str

// function dashes(num){
//     let strArr = num.toString().split('');
//     for(i=0;i<strArr.length;i++){
//         let currentElement = parseInt(strArr[i]);
//         let nextElement = parseInt(strArr[i+1]);
//         if(currentElement%2==0 && nextElement%2==0){
//             strArr.splice(i+1,0,'-')
//         }
//     }
//     return  strArr.join('');
// }

// console.log(dashes(num))

//17th Aug
//Q max occurance in an array
// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a','a', 2, 4, 9,3,3];

// let myobj= {};
// let maxChar;
// let maxCount=0;

// function maxCharFun(arr) {
//     for(let el of arr1){
//         // if(!myobj[el]){
//         //     myobj[el] = 1;
//         // }
//         // else {
//         //     myobj[el] += 1;
//         // }
//         myobj[el] = myobj[el] +1 || 1;
//     }
//     for(let key in myobj) {
//          if(myobj[key]>maxCount){
//              maxCount = myobj[key];
//              maxChar = key
//          }
//     };
//     return [maxChar,maxCount]
// }
// console.log(maxCharFun(arr1))

//Q char Case interchange

// let str = 'The Quick BrownFox'
// let res = []
// for(let char of str){
//     if(char === char.toUpperCase() && char !== ' ') {
//      res.push(char.toLowerCase());
//         //console.log(char)

//     }
//     else if(char === char.toLowerCase() && char !== ' '){
//         console.log(char)
//       res.push(char.toUpperCase());
//         console.log(char)

//     }
//     else {
//         res.push(char)
//     }
// }

// console.log(res.join(''));

//Q
// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for (var i in a)
// {
//    console.log("row " + i);
//    for (var j in a[i])
//      {
//       console.log(" " + a[i][j]);
//      }
// }

//Q sum of squares of an array;

// let a  = [1,2,3,4];
// let square = 0 ;
// let sum = 0;
// let product = 1;
// let res = []
// for(let el of a){
//     //sum += el*el;
//     square += Math.pow(el,2);
//     sum += el;
//     product *= el;
// }
// square
// sum
// product

//18th Aug
//Q

// let arr = [1,2,3];
// for(var i of arr) {
//     if(i%2==0){
//         i =  i*2;
//         arr.push[i];
//     }
// else {
//     i = i*3;
//     arr.push[i];
// }

// }
// console.log(arr); //not working

// for(i =0;i<arr.length;i++) {
//     if(arr[i]%2==0){
//        arr[i] =  arr[i]*2;
//         //arr.push[i];
//     }
// else {
//     arr[i] =  arr[i]*3;
// }

// }

// console.log(arr);//working

//Q Add and display number
// let numberArr = [];
// let numberInput = document.querySelector(".input-number");
// document.querySelector(".add-number").addEventListener("click", () => {
//   let element = numberInput.value;
//   if (element) {
//     numberArr.push(element);
//     numberInput.value = "";
//   }
// });

// let dispalyHtml = (index, number) => {
//   return `<p> Element ${index} - ${number}</p>`;
// };

// let dispalyNumber = '';
// document
//   .querySelector(".display-number")
//   .addEventListener("click", function () {
//     if (numberArr.length) {
//       for (i = numberArr.length - 1; i >= 0; i--) {
//         dispalyNumber += dispalyHtml(i, numberArr[i]);
//         document
//           .querySelector(".results")
//           .insertAdjacentHTML("afterbegin", dispalyNumber);
//       }
//     //   document
//     //       .querySelector(".results").innerHTML = dispalyNumber;
//      }
//   });

//Q sum of individual item of two array
// let  array1 = [1,0,2,3,4,5];
// let  array2 = [3,5,6,7,8,2,3,4,5,];
// let sumArray = [];
// let aLength = array1.length;
// let blength = array2.length;
// let finalLength;
//  aLength>=blength ? finalLength = aLength : finalLength = blength;
//  console.log(finalLength)

// for(i=0;i<finalLength;i++){
//     if(array1[i]&&array2[i]){
//         sumArray.push(array1[i]+array2[i]);
//     }
//     else if(!array1[i]){
//         sumArray.push(array2[i])
//     }
//     else if(!array2[i]){
//         sumArray.push(array1[i])
//     }
// }
// console.log(sumArray)

// 20 Aug
//Q
// const reverseString = str => [...str].reverse().join('');
// let a = reverseString('have a nice day');
// a

// let mystr = 'have a nice day'
// b = [...mystr]
// c = mystr.split('')
// b
// c
// console.log(b == c)

//Note - Sort changes the original array

//Q compare two arrays
// let a = [1,2,3];
// let b = [1,2,3];
// console.log(JSON.stringify(a) == JSON.stringify(b))

// //Q
// const maxItemOfArray = (arr) => arr.sort((a, b) => b - a)[0];
// let maxItem = maxItemOfArray([3, 5, 12, 5]);
// maxItem

// //Q
// const arrEqual = (arr) => arr.every(item => item === arr[0]);
// console.log(arrEqual([1,2,3]))
// console.log(arrEqual([1,1,1]))

// //Q Average of numbers
// const average = (...arr) => arr.reduce((a,b) => {
//       return a+b
// },0)/arr.length

// console.log(average(1,2,3,4))

// // with ES5

//  function average2(arr) {
//     let sum =0
//     console.log(arr)
//    for(i of arr){
//       sum += i;
//    }
//    return sum;
// }

// console.log(average2([10,2,3,4]))

// function foo(a,b){
//       return a+b;
// }

// console.log(foo(5,6))
// console.log(foo.call(this,5,6))
// console.log(foo.apply(this,[5,6]))

// find and replace with split and join

// let str = 'i love India very much'
// console.log(str.length)
// let arr = str.split('love')
// arr
// console.log(arr.length)
// let str2 = arr.join('Love')
// console.log(str2)
// console.log(str2.length)

//20 Aug

//Q flattening of an array

// let arr = [1, [2], [3, [[4]]], [5, 6]];

// //let flattenArray = [];

// function flatArray(arr,shallow = false,flattenArray) {

//     if(!flattenArray){
//         flattenArray = [];
//     }
//     if(shallow){
//         return flattenArray.concat(...arr);
//     }
//   for (let i=0;i<arr.length;i++) {
//     if (Array.isArray(arr[i])) {
//       flatArray(arr[i],shallow,flattenArray);
//     } else {
//       flattenArray.push(arr[i]);
//     }
//   }
//   return flattenArray;
// }

// console.log(flatArray(arr));
// console.log(flatArray(arr,true));

// //Q flattening of an Object

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

// console.log(typeof user === Object)

// let flattenObject = {};
//   function flatObject(obj){
//      for(let key in obj) {
//          if(typeof obj[key] === "object"){
//              flatObject(obj[key])
//          }
//          else {
//              flattenObject[key] = obj[key]
//          }
//      }
//      return flattenObject
//   }

//   console.log(flatObject(user))

//   let a = [1,2,[4]];
//   let b  = [];
//   let c = b.concat(...a)
//   b
//   b.push(a);
//   b
//   c

// 21st Aug

//Union of two array

//1 using sets

//   let a1 = [1, 2, 3];
//   let a2 = [3,4,2]
//   let a3 = a1.concat(a2);
//   let a4 = Array.from(new Set(a3));
//   let a5 = [...new Set(a3)];

//using indexof
// for(let i of a2){
//   if( a1.indexOf(i) == -1) {
//       a1.push(i);
//   }
// }
// console.log(a1)

//using objects

// 23rd Aug

// let arr = [1, [2], [3, [[4]]],[5,6]];
// let emp = [];
// let res = emp.concat(...arr);
// let res2 = emp.concat.apply(emp,arr)
// res
// res2

//Q finding min and max without using build in

// let numbers = [10,4,7,87,6]
// max = -Infinity, min = +Infinity;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(max);
// console.log(min);

//Q Write a JavaScript function to find the difference of two arrays
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, [2], [3, [[4]]],[5,6]];

// function flatArray(arr,flattenArray){
//   if(!flattenArray){
//     flattenArray = []
//   }
//   for(let i of arr){
//       if(Array.isArray(i)){
//           flatArray(i,flattenArray)
//       }
//       else{
//         flattenArray.push(i);
//       }
//   }
//   return flattenArray;
// }

// function difference(arr1,arr2){
//     let flatArray1 = flatArray(arr1);
//     let flatArray2 = flatArray(arr2);
//     let combineArray = flatArray1.concat(flatArray2);
//     let finalArray = [];
//     let myObj = {};
//     for(let i of combineArray){
//         myObj[i] = myObj[i] + 1 || 1
//     }
//     for(let i in myObj){
//         if(myObj[i] === 1){
//             finalArray.push(i)
//         }
//     }
//     return finalArray.map(Number);
// }

// console.log(difference(arr1,arr2));

// function differenceOf2Arrays (array1, array2) {
//     var temp = [];
//     array1 = array1.toString().split(',').map(Number);
//     array2 = array2.toString().split(',').map(Number);

//     for (var i in array1) {
//     if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
//     }
//     for(i in array2) {
//     if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
//     }
//     return temp.sort((a,b) => a-b);
//     }

//     console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
//     console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

//     //Q flattening of the array
//     let a = [1,2,[[3]],4,[[5],6]];
//     a1 = a.toString().split(',').map(Number)
//     console.log(a1);

//     //Q convering an string array to number
//     let b = ['2',3,'4','5'];
//     let b1 = b.map(Number);
//     console.log(b.map(parseInt));
//     console.log(b1)
//     console.log(b.map(i => parseInt(i)));

//     //Q
//     let c = '2.3';
//     console.log(parseInt(c));
//     console.log(Number(c));

//Q Remove flase value fron array
//  let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];
//  let res = []
//  for(let i of arr){
//      if(i){
//         res.push(i);
//      }
//  }
//  console.log(res);

//24TH AUG

//    const carData = [
//     {
//       carNo: 'KA-64-YX-0619',
//       color: 'Red',
//       slot: 1,
//       date: '24th May 2020, 4:24 PM',
//     },
//     {
//       carNo: 'KA-64-YX-1659',
//       color: 'White',
//       slot: 2,
//       date: '24th May 2020, 4:24 PM',
//     },
//     {
//       carNo: 'KA-64-YX-2615',
//       color: 'Blue',
//       slot: 3,
//       date: '24th May 2020, 4:24 PM',
//     },
//     {
//       carNo: 'KA-64-YX-6619',
//       color: 'Black',
//       slot: 4,
//       date: '24th May 2020, 4:24 PM',
//     },
//     {
//       carNo: 'KA-64-YX-8614',
//       color: 'Red',
//       slot: 5,
//       date: '24th May 2020, 4:24 PM',
//     },
//   ];

//   let res = carData.filter(obj =>{
//       return obj.color === 'Red' && obj.carNo.includes('KA')

//   });
//   console.log(res);

//   let arr  = ['hello','how','helo','are'];
//   let  result = arr.filter(el => {
//       return el.includes('he')
//   });
//   console.log(result)

//25th Aug

// let arr = ["hello", "how", "helo", "are"];
// let arr2 = arr.sort((a, b) => {
//   if (a < b) return -1;
//   else if (a > b) return 1;
//   return 0;
// });
// console.log(arr2);
// console.log(arr);

//Q Sort the specified array of objects by title value
// const library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];

//  function sortTitle(arr){
//    return arr.sort((x,y)=>{
//         if(x.title<y.title) return -1;
//         else if(x.title>y.title) return 1;
//         return 0;
//     })
//  }

 //console.log(sortTitle(library))


 //Q
//  let arr = [10,20,10,40,50,60,70];
  
//  function twoSum(arr,target) {
//      for(i=0;i<arr.length;i++){
//          for(j=0;j<arr.length;j++){
//              if(i !== j){
//                  if(arr[i] + arr[j] === target){
//                      return [i, j];
//                  }
//              }
//          }
//      }
//   }

//   console.log(twoSum(arr,60))

//Q retrieve the value of a given property from all elements in an array
// const library = [ 
//     { author: 'Bill Gates', title: 'Thee Road Ahead', libraryID: 1254},
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//     ];
 
//     function propertyValue(arr,key){
//       return arr.map(el => {
//          if(el.hasOwnProperty(key)){
//              return el[key]
//          }
//       }
//      )
//     }

//     console.log(propertyValue(library,'title'))

//Q  difference betwwen map and filter
//   let arr = [1,2,3,4];
//   let arr2  = arr.filter(el => el>2);
//   console.log(arr2) 

//   let arr = [1,2,3,4];
//   let arr2  = arr.map(el => el>2);
//   console.log(arr2) 

//26th Aug
//Q Find the longest common starting substring in a set of strings-only two elements

// function longest_common_starting_substring(arr1){
//     var arr= arr1.concat().sort(),
//     a1= arr[0], a2= arr[arr.length-1], L= a1.length, i= 0;
//     while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
//     return a1.substring(0, i);
//     }
    
//     console.log(longest_common_starting_substring(['go', 'google'])); 
    
//     console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial'])); 
    
//     console.log(longest_common_starting_substring(['abcd', '1234'])); 



//Q Fill an array with values on supplied bounds

// const randomFill = (start,end,steps) => {
//     let result = []
//    if(start<end){
//        for(i=start;i<=end;i = i + steps){
//           result.push(i);
//        }
//    }
//    else if(start>end){
//        for(i=start;i>=end;i = i-steps){
//         result.push(i);

//        }
//    }
//    return result
// }

// console.log(randomFill(5,20,5))
// console.log(randomFill(50,20,5))
// console.log(randomFill(0, -5, 1))

//Nullish operator
// var a;
// var b = a ?? null;
// console.log(b);

//Q
// class Person{
//     constructor(ages){
//         this.ages = ages
//     }
//     details(){
//         this.name = 'Deepak';
//         this.age = 28
//     }
// }

// let deepak = new Person(29);
// deepak.details();
// console.log(deepak)

//27th Aug
//q
// function fill(n,el){
//     let arr = [];
//     while(arr.length<n){
//         arr.push(el);
//     }
//     return (
//         arr
//         );
// }
// console.log(fill(4,11))


//Q 

// function incrementalArray(el,length){
//     let arr = [];
//     while(arr.length<length){
//         arr.push(el);
//         el++
//     }
//     return arr;
// };
// console.log(incrementalArray(10,4))
// console.log(incrementalArray(-6,4));

// //Q
// function incrementalArray2(start,end){

//     let arr = [];
//     length = end - start;
//     while(arr.length <= length){
//         arr.push(start);
//         start++
//     }
//     return arr;
// };
// console.log(incrementalArray2(2,4))
// console.log(incrementalArray2(-6,4));

//q allDeepEqual([ [1,2], [1,2] ])