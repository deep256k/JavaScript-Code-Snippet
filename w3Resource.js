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

// let num = 5683246;
// let str = num.toString().split('');
// str

// function dashes(num){
//     let strArr = num.toString().split('');
//     for(i=0;i<strArr.length;i++){
//         let currentElement = parseInt(strArr[i]);
//         let nextElement = parseInt(strArr[i+1]);
//         if(currentElement%2===0 && nextElement%2===0){
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
// let str2 = arr.join('')
// console.log(str2)
// console.log(str2.length)

let arr = [1,2]
let arr1 = [3,4];
arr.push(arr1);
arr
