//  function revStr() {
//     var a = document.getElementById("str")
//     var content = a.textContent;
//    // console.log(typeof content);
//     setInterval(function(){
//      content = content[content.length -1] + content.slice(0,-1);
//      console.log(content);
//     },3000)
//  }
//  //revStr();
//  var a = document.getElementById("str")
//  console.log(typeof a.textContent);
//  var content = a.textContent;
// // content = content[content.length -1] + content.slice(0,-1);
//  console.log(content.trim());
//  console.log(content.length);
// var a = 10
// function foo() {
// console.log(a);
//  a = 20;
// console.log(a);
// }
// foo();
// console.log(a);

// 8.
// let random = Math.floor(Math.random() *6);
// console.log(random);
// if(random === 5) {
//    console.log('success');
// }

// 11

// function farntocal() {
//    let tempfar = 45;
//    let temcal = (5*(tempfar-32))/9;
//    console.log(document.URL);
//    console.log(temcal);

// }
// farntocal();

// 13.

// var name = 'abcd';
// var n = 1200;
// this.name = n;
// console.log(this.name)

// 14.

// let str = "index.html"
// let index = str.indexOf('.')
// console.log(index);
// let ext = str.slice(index+1,str.length);
// console.log(ext);

// let str = "index.html"
// let index = str.split('.')
// console.log(index.pop());

// let str = "hello java"
// let arr = ['h','e','l','l','o']
// // console.log(typeof str.slice(2,4));
// // console.log( arr.slice(2,4));
// // console.log(str.indexOf('l'));
// // console.log(arr.indexOf('l'));
// console.log(str.split(' '))
// console.log(arr.splice(0,2,'i'));
// console.log(arr);

// 15.

// let random = Math.floor(Math.random() *30);
// console.log(random);
// let result
// if(random>13) {
//     result = random - 13
//     console.log(result);
// }
// else if(random <= 13) {
//  result = random - 13
//  console.log(Math.abs(result*2));
// }

// MaxCharacter

// const mystr = 'aabbccdddd'
// var obj = {};
// let maxChar = ''
// let maxNum = 0;
// for(let i of mystr) {
// //  if(!obj[i]){
// //    obj[i] = 1;
// //  }
// //   else{
// //     obj[i] = obj[i]+1;
// //   }
// obj[i] = obj[i] + 1 || 1;
// }
// for(let j in obj){
//     if(obj[j]>maxNum){
//         maxChar = j;
//         maxNum = obj[j];
//     }
// }
// console.log(maxChar);
// console.log(maxNum);

// var i;
// for(i = 1; i<20;i++){
//     if(i %3 == 0 && i%5 ==0) {
//         console.log('fizzbuzz');
//       // debugger
//     }
// else if(i%3 == 0){
//     console.log('fizz');
//   //debugger;
// }
// else if(i%5 == 0){
//     console.log('buzz');
//   //debugger
// }
// else{
//     i = i;
//    // debugger
//    console.log(i);
// }

// }

// var  myArr = [1,2,3,4,5,6,7];
// var chunkSize = 2;
// let resultArray = [];

// function arrChunk(array,size){
// for(let i of array) {
//   let last = resultArray[resultArray.length - 1]
//   if(!last || last.length === size){
//     resultArray.push([i])
//   }
//   else{
//     last.push(i)
//   }
// }
// }
// console.log( resultArray);

// arrChunk(myArr,chunkSize);

// function arrChunk(array,size){
//   let index = 0;
//   while(index < array.length){
//     resultArray.push(array.slice(index,index+chunkSize));
//     index += chunkSize;
//   }
//   }

//   arrChunk(myArr,chunkSize);
//   console.log(resultArray)

// const str = 'hellorfdevfcdqo'
// const str2 = "oollewhh"
// let myobj = {}
// let myobj2 = {}

// for(let i of str) {
//  if(!myobj[i]) {
//    myobj[i] = 1
//  }
//  else{
//    myobj[i] += 1;
//  }
// }
// console.log(myobj);

// for(let i of str2) {
//   if(!myobj2[i]) {
//     myobj2[i] = 1
//   }
//   else{
//     myobj2[i] += 1;
//   }
//  }
// console.log(myobj2);

// for(let i in myobj){
//   if(myobj[i] !== myobj2[i]){
//   var a = 10;
//   }
//   else{
//     var a = 20;
//   }
// }
// console.log(a);

// let str1 = "hello"
// let str2 = "olleh"
// function anagram(input) {
//   let myobj = {}
//     for(let char of input) {
//     myobj[char] = myobj[char]++ || 1
//   }
//   console.log(myobj)
//   return myobj
// }
// function isAnagram() {
// let obj1 = anagram(str1);
// let obj2 = anagram(str2);
//  if(str1.length == str2.length){
//   for(let key in obj1) {
//     if(obj1[key] === obj2[key]) {
//       console.log('anagram')
//     }
//     else{
//       console.log('not a anagram')
//     }
//   }
//  }
//  else {
//   console.log('not');

//  }
// }

// isAnagram();

// 2nd solution
// function sortArray(str) {
//   let sortedArray = str.split('').sort().join('')
//  return sortedArray
// }
// function result() {
//   if (sortArray(str1) === sortArray(str2)) {
//    console.log('true')
//   }else{
//     console.log('false')

//   }
// }

// result();

// var mystr = 'hi how are you'
// var result = mystr.split(' ')
// for(let char of result) {
//     var t = char[0].toUpperCase()
//     console.log(t);
// }
// console.log(result);

// 30-march

// let  a = 'apple'
// let b = ''
// 1 console.log(a.split('').reverse().join('')
// for(let i=0;i<a.length;i++) {
//  b = a[i] + b
// }
// console.log(b);
// b = a.split('').reduce((acc,curr)=>{
//  return curr + acc;
// },'')
// console.log(b);

// let a = 051;
// let b = a.toString().split('').reverse().join('')
// let c = Math.sign(a);
// console.log(a.toString().split(''));

// 31st March
// let str = 'aaaaaaaadd11111111111dggjjjj';
// let myobj = {};
// let maxChar = '';
// let maxNum = 0;
// for(let item of str) {
//   myobj[item] = myobj[item] + 1 || 1;
// }
// for(let max in myobj){
// if(myobj[max] > maxNum){
//  maxNum = myobj[max];
//  maxChar = max;
// }
// }
// console.log(maxChar);
// console.log(maxNum);

// function fizz(n){
//     for(i=1;i<n;i++){

//     if(i%15 == 0){
//         console.log('fizzbuzz');
//     }
//     else if(i%5 == 0){
//         console.log('buzz');
//     }
//     else if(i%3 == 0 ){
//         console.log('fizz')
//     }
//     else{
//         console.log(i);
//     }
// }
// }

// fizz(45);

// 1st April

// const arr = [1,2,3,4,5,6,7];
// const step = 2;
// let resArr = []

// 1st solution
// function chunk(arr,step) {
// for(let item of arr) {
//     let last = resArr[resArr.length - 1]
//     if(!last || last.length == step) {
//         resArr.push([item]);
//     }
//     else{
//         last.push(item)
//     }
// }
// }
// chunk(arr,step);
// console.log(resArr);

// 2nd Solution

// let index = 0;

// function chunk(arr,step) {
// while(index < arr.length) {
//     resArr.push(arr.slice(index,index+step));
//     index = index + step;

// }

// }
// chunk(arr,step);
// console.log(resArr);

// const stringA = 'rail safety';
// const stringB = 'fairy T!ales';
// let isAnagram = 'true';

// 1st Solution
// function anagram() {
//   let  mapA = charMap(stringA);
//   let  mapB = charMap(stringB);
//   if(Object.keys(mapA).length !== Object.keys(mapB).length){
//       isAnagram = 'flase';
//   }
//   for(let key in mapA){
//       if(mapA[key] !== mapB[key]) {
//          isAnagram = 'flase'
//       }
//   }
//   return isAnagram;
// }

// function charMap(str) {
//     let charObj = {};
//     for(let index of str.replace(/[^\w]/g, '').toLowerCase()){
//      charObj[index] = charObj[index] + 1 || 1;
//     }
//     return charObj;
// }
// console.log(anagram());

// 2nd soltion
// function anagram() {
//     let  mapA = sort(stringA);
//     let  mapB = sort(stringB);
//     if(mapA !== mapB) {
//         isAnagram = 'flase'
//     }
//     else {
//         isAnagram = 'true'
//     }
//     return isAnagram;
// }

// function sort(str) {
//     let sorted = str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
//     console.log(sorted);
//     return sorted
// }

// console.log(anagram());

// 2ndApril

// 1
// let str = 'how, are you'
// let arr = [];
// for(let item of str.split(' ')) {
//  let upperCase = item[0].toUpperCase();
//  let substr = item.slice(1);
//  arr.push(upperCase.concat(substr));
// }
// console.log(arr.join(' '));

// 2

// function star(n) {
//     for(let row = 0;row<=n;row++) {
//         let stair = ''
//     for(let col = 0;col <= n;col++){
//         if(col <= row) {
//             stair += '*'
//         }
//         else {
//             stair += ' '
//         }
//     }
//     console.log(stair)
//     }
// }

// star(6);

// const express = require("express");
// const router = express.Router();
// const jsonfile = require("jsonfile");
// var bodyParser = require("body-parser");
// router.get('/getSubmissions', (req, res) => {
//     jsonfile.readFile('data/getSubmissions.json', "utf8", (err, data) => {
//         if (err) {
//             throw err;
//         }
//         let type = req.query.type;
//         let status = req.query.status;
//         let filterArr = data.data.filter((obj, i) => {
//             if (obj.Type === type && obj.Status === status) return true;
//             else return false
//         })
//         if (type === 'UserPermissions') {
//             delete data.filter[0].FunctionType
//             data.filter[0].PermissionType = ["User", "Account"]
//         }
//         data.data = filterArr
//         res.status(200).send(data);
//     });
// });

// router.get('/submissions', (req, res) => {
//     let type = req.query.type;
//     let status = req.query.status;
//     jsonfile.readFile(`data/submissions/ApprovalRulesPendingApproval.json`, "utf8", (err, data) => {
//         if (err) {
//             throw err;
//         }
//         res.status(200).send(data[type]);
//     });
// });

// module.exports = router;

// 5th April

// factorial normal

// let result = 1;
// function fac(n) {
// for(i=1;i<=n;i++) {
//     result = result *i;
// }
// console.log(result)
// }
// fac(5);

// recursion factorial

// let result = 1;
// function fac(n) {
// if(n===0){
//     return
// }
// result = result * n;
// fac(n-1);
// }
// fac(6);
// console.log(result);

// vowels

// let str = "hello how ooo"
// let count = 0;
// for(let i of str) {
//     if(i == 'a' || i == 'e' || i == 'o'|| i =='i' || i =='u') {
//         count += 1;
//     }

// }

// console.log(count);

// 6th April

// function star(n,row=0,stair='') {
// if(n === row) {
//     return
// }
// if(n === stair.length) {
//  console.log(stair);
//  star(n,row = row+1,stair = '');
//  return;
// }
// // if(stair.length <= row){
// //     stair += '*'
// // }
// // else{
// //     stair += ' '
// // }
// let step = stair.length <= row ? '*' : ' '
// star(n,row,stair + step);
// }
// star(3)

// Pyramid
//  6th April
// var name = 'abc'
// var Foo = function(name,age){
//     this.name = name
//     this.age = age
//     }
//   Foo.prototype.firstName = function() {
//     var name = 'abc'
//         console.log('my name is ' + this.name + " " + this.lastName);
//         console.log(this)
//   }
//   Foo.prototype.lastName = 'smith'
// var john = new Foo('johnnn',26);
//john.__proto__.firstName();
// console.log(john.lastName);
//john.firstName();
// Foo.prototype.firstName();
// john.firstName();
//console.log(john.name);

// function stairs(n,row = 0,steps ='') {
//   if(n===row) {
//     return
//   }
//    if(n===steps.length) {
//     console.log(steps);
//     return stairs(n,row = row+1,steps='')
// }
// if(steps.length<=row){
//   steps += '*'
// }
// else{
//   steps += ' '
// }
//  stairs(n,row,steps);
// }

// stairs(4);

// function pyramid(n) {
//     let midpoint = Math.floor((2*n -1)/2)
// for(let row=0;row<n;row++) {
//     let stair = '';
//     for(let col =0; col < n*2-1;col++){
//         if(midpoint - row <= col && midpoint + row >= col) {
//                         stair += '*'
//                     }
//                     else {
//                         stair += ' '
//                     }
//                 }
//                 console.log(stair)
//     }
// }

//pyramid(4)

// 9th April
// function pyramid(n, row = 0, stair = '') {
//   let midpoint = Math.floor((2 * n - 1) / 2);
//   if (n === row) {
//     return
//   }
//   if (stair.length === (2 * n - 1)) {
//     console.log(stair);
//     return pyramid(n, row + 1, stair = '')
//   }
//   if (midpoint - row <= stair.length && midpoint + row >= stair.length) {
//     stair += '*'
//   }
//   else {
//     stair += ' '
//   }
//   //console.log(stair);
//   return pyramid(n,row,stair)
// }
// pyramid(3);

// 15th April
// Fibonacci

// function fib(n) {
// let result = [0,1];
// for(i=2;i<=n;i++) {
//   let a = result[i-2];
//   let b = result[i-1];
//   result.push(a+b);
// }
// console.log(result)
// }
// fib(7);

// Recursive
// function fib(n) {
//   if(n<2){
//     return n;
//   }
//   return b = fib(n-1) + fib(n-2);
// }
// fib(45);
// console.log(b);
// 6th May
// const arr1  = [1,2,3,4];
// const arr2 = [4,5,6];
// let resultArray = []
// function combine(arr1,arr2) {
// let last1 = arr1[arr1.length - 1];
// let last2 = arr1[arr2.length - 1];

// while(last1 || last2){
// if(last2){

// }
// }
// }

// JavaScript
// 9th April
// //let bicycle1 = new Bicycle(30, 5, 23);
// function Bicycle(speed, gear, tyrePressure) {
//   this.speed = speed;
//   this.gear = gear;
//   this.tyrePressure = tyrePressure;
//   this.inflatTyre = function () {
//     this.tyrePressure += 3;
//   };
// }
// let bicycle1 = new Bicycle(30,5,20);
// bicycle1.inflatTyre();
// let bicycle2 = new Bicycle(40, 15, 30);
// bicycle2.inflatTyre();

// function Mechanic(name) {
//   this.name = name;
// }
// let mike = new Mechanic("mike");
// mike.inflatTyre = bicycle1.inflatTyre;
// let pressure = mike.inflatTyre.call(bicycle1);
// console.log(bicycle1);

// const fruits = ["kiwi", "banana", "strawberry"]

// console.table(fruits)
// console.log(fruits)

// 11th April
// Inheritance

// function Employee(name,age){
//   this.name = name;
// }
// Employee.prototype.getName = function() {
//   return 'My name is ' + this.name;
// }
// let john = new Employee('johnn');
// console.log(john.getName());

// function Manager(name,dept) {
//   this.name = name;
//   this.dept = dept
// }
// Manager.prototype.getDept = function() {
//   return 'My dept is ' + this.dept
// }
// let mark = new Manager('Mark','IT');
// console.log(mark.getDept());
// //console.log(mark.getName());
// mark.__proto__.__proto__= Employee.prototype;
// console.log(mark.getName());

//  15th April
// var age = 30;
// var obj = {
//   name:'john'
// }
// function change(ag,b) {
//   ag = 40;
//   b.name = 'mike'
// }
// change(age,obj);
// console.log(age,obj);

// Object Create

// let person = {
//   calculateAge : function() {
//     console.log(2016 - this.dob)
//   }
// }
// let john = Object.create(person);
// john.name = 'john';
// john.dob = 1990;
// john.calculateAge();

// let mike = Object.create(person,{
//   name : {value:'mike'},
//   dob:{value:1985}
// })
// mike.calculateAge();

// 20th April
// Call,Bind

// name = 'ricky';
// lastName = 'ponting'
// let mark = {
//   name:'mark',
//   age:25,
//   lastName:'waugh',
//   fullName : function(greet,message) {
//     return `${greet} ${this.name} ${this.lastName}  ${message}`;
//   }
// }
//  console.log(mark.fullName('hi','how are you'));

// let johnn = {
//   name:'john',
//   lastName:'langer'
// }
// console.log(mark.fullName.call(johnn,'hi','how are you'));
//  johnn.fullName = mark.fullName;
//  console.log(johnn.fullName.call(mark,'hi','how are you'));

// var micky = mark.fullName.bind(this,'hello ');
// console.log(micky(' how are you'));

// 21st, 22nd 23rd

// (function() {
//   function Questions(question,options,correctAnswer) {
//     this.questions = question;
//     this.options = options;
//     this.correctAnswer = correctAnswer;
//    }

//    Questions.prototype.getOptions = function() {
//      console.log(this.questions);
//      for(i=0;i< this.options.length;i++) {
//        console.log(i + " : " + this.options[i]);
//      }
//    }

//    Questions.prototype.getAnswer = function(input) {
//      if(input === this.correctAnswer){
//       console.log('correct answer');
//        }
//        else{
//          console.log('wrong answer please try again');
//        }
//    }

//     function score() {
//         sc = 0;
//         return function currentScore(status) {
//             if(status){
//               sc++
//             }
//             return sc
//         }
//     }

//    let q1 = new Questions('Is Javascript easy',['yes','no'],1);
//    let q2 = new Questions('what is my name',['mike','john'],0);
//    let q3 = new Questions('How are you',['fine','bad','okay'],0);
//    let quesArray = [q1,q2,q3];

//    function gameOn() {
//     let n = Math.floor(Math.random()*quesArray.length);
//     let currentQuestion = quesArray[n];
//     currentQuestion.getOptions();
//     let input = prompt('please enter your answer');
//     if(input !== 'exit') {
//       currentQuestion.getAnswer(+input);
//       gameOn();
//     }
//    }

// gameOn();

// })()

// ES6
//  var name = 'john'
// ES5
// function Person(name) {
// this.name = name;
// }

// Person.prototype.greet = function(arr) {
//   let greetArray = [];
//   //let self = this;
//   greetArray = arr.map(function(el){
//    return `${this.name} is friend with ${el}`
//   }.bind(this))
// console.log(greetArray);
// }
//  let arr = ['john','mark','sam'];
//  new Person('john').greet(arr);

//  Es6
//  function Person(name) {
//   this.name = name;
//   }

//   Person.prototype.greet = function(arr) {
//     let greetArray = [];
//     //let self = this;
//     greetArray = arr.map(el =>
//       `${this.name} is friend with ${el}`
//     )
//   console.log(greetArray);
//   }
//    let arr = ['john','mark','sam'];
//    new Person('john').greet(arr);

// spread and rest

// let arr1 = [1,2,3]
// let arr2 = [4,5,6];
// let arr3 = [...arr1, ...arr2]
// console.log(arr3);
// let arr4 = [...arr1];
// console.log(arr4);
// let arr5 = arr2;
// console.log(arr5);
// console.log(arr1.push.apply(arr1,arr2));
// console.log(arr1);

// function foo(a,b,c,d) {
// return a +b+c+d;
// }
// console.log(foo(1,2,3,4))
// console.log(foo.apply(this,[1,2,3,5]));
// console.log(foo(...[1,2,3,4]));

// Rest parameters

// function foo(...arr) {
// let result = 0;
// for(let i of arr){
//  result += i;
// }
// console.log(result)
// }

// foo(1,2,3,4);

// let arr = [1,2,3,6];
// function foo(arr) {
//   let result =0;
//   for(let i of arr) {
//    result += i
//   }
//   console.log(result)
// }

// foo(arr);

// let a =[1,2,3,4]
// console.log(...a);

// Default Parameter

// function foo(a,b,c,d=2) {
// console.log(a +b+c+d);
// }
// foo(1,2,3,4);

// 23rd

// function outer() {
//   let a = 20;
//   return function inner() {
//      return a +10;
//   }
// }

// let closure = outer();
// console.log(closure());

// let arr = [10,20,30,40];
// function foo() {
// arr.forEach((value,key) =>{
//   console.log(key,value)
// })
// }
// foo();

// Classess

// function CurrentAge(dob) {
//   this.dob = dob;
// }
// CurrentAge.prototype.calculateAge = function() {
//   return 2020 - this.dob
// }
// let john = new CurrentAge(1990);
// console.log(john.calculateAge());
// console.log(john.__proto__.calculateAge()); //Not working becoz it is pointing to __proto___ object which doest not have dob property

// class CurrentAge {
//    name = 'deepak'
//   constructor(dob,name) {
//     this.dob = dob;
//     this.name = name;

//   }
//   calculateAge() {
//     console.log(this.name)
//     return 2020 - this.dob;
//   }
// }
// let johnny = new CurrentAge(1993);
//  console.log(johnny.calculateAge());

// Inheritance

// es5
// function Person5(name,dob,job) {
// this.name= name;
// this.dob = dob;
// this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//   let age = new Date().getFullYear() - this.dob
//   return age;
// }

// function Athelete5(name,dob,job,games,medal){
//   Person5.call(this,name,dob,job);
//   this.games = games;
//   this.medal = medal;
// }

// Athelete5.prototype = Object.create(Person5.prototype);
// //Athelete5.prototype = Person5.prototype; //this is also working

// let john = new Athelete5('john',1993,'swimmer',3,9);
// //john.__proto__.__proto__ = Person5.prototype;  //this is also working
// console.log(john.calculateAge());

// ES6

// class Person6{
//   constructor(name,dob,job){
//     this.name= name;
//     this.dob = dob;
//     this.job = job;
//   }
//   calculateAge() {
//     let age = new Date().getFullYear() - this.dob
//     return age;
//   }
// }

// class Athelete6 extends Person6{
// constructor(name,dob,job,games,medal){
//   super(name,dob,job);
//   this.games = games;
//   this.medal = medal
// }
// }
// let john = new Athelete6('john',1990,'swimmer',3,9);
// console.log(john.calculateAge());

// Promises

// const ids = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([1, 2, 3, 4]);
//     }, 2000);
//   });

// const recipe = (recipeid) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       () => {
//         const recipeList = {
//           title: "pasta",
//         };
//         resolve(`recipe id is ${recipeid} and name is ${recipeList.title}`);
//       },
//       1500,
//       recipeid
//     );
//   });
// };

// ids
//   .then((getIds) => {
//     console.log(getIds);
//     return recipe(getIds[2]);
//   })
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((err) => {
//     console.log("name error");
//   });

// async function getRecipeAw() {
//   const getids = await ids;
//   const name = await recipe(getids[2]);
//   console.log(name);
//   return name;
// }
// getRecipeAw().then(res =>{
//   console.log('1',res)
// });

// fetch('https://jsonplaceholder.typicode.com/users').then(res =>{
//   return res.json()
// }).then(result =>{
//   console.log(result)
// })
// .catch(err =>{
//   console.log(err);
// });

// async function getDataAw(){
//   try{
//     const data = await fetch('https://jsonplaceholder.typicode.com/users11');
//     const result = await data.json();
//     return result;
//   }
//  catch(err){
//    console.log(err);
//  }
// }
// getDataAw().then(res =>{
//   console.log(res);
// })

// operator

// var a;
// var b;
// a = b = 20;
// console.log(a,b)

// var a = 'teacher';
// switch(a){
//   case 'teacher': console.log('techer');
//   break;
//   case 'swimmer':console.log('swimmer');
//   break;
//   default:console.log('not mentioned')
// }

// function fn(){
//   var a = b = 20;
// }
// fn();
// console.log(b);
// console.log(a);

// for(i=0;i<20;i++){
//   if(i === 10){
//     break;
//   }
//   console.log('hello'+ i)
// }

// const arr = [10,120,30,40];
// for(var i=0; i<arr.length; i++) {
// 	setTimeout(function(){
// 	console.log('index'+ i + 'value' + arr[i])
// }, 2000)
// }

//24th April
// var a = [1,2,3];
// var b = a;
// b.push(4);
// b= [1,2]
// console.log(a,b)

// var a = [1,2,3]
// function foo() {
//  a = [1,2]
//   return a;
// }
// console.log(foo());
// console.log(a)

// Implict and exciplict binding of this
// Note:Explicit binding takes precedence over implicit binding,

// var myMethod = function () {
//   console.log(this.a);
// };

// var obj1 = {
//   a: 2,
//   myMethod: myMethod
// };

// var obj2 = {
//   a: 3,
//   myMethod: myMethod
// };

// obj1.myMethod(); // 2
// obj2.myMethod(); // 3

// obj1.myMethod.call( obj2 ); // ?????
// obj2.myMethod.call( obj1 ); // ?????

// Hard Binding
// Hard binding takes precedence over explicit binding.
// var myMethod = function () {
//   console.log(this.a);
// };

// var obj1 = {
//   a: 2
// };

// var obj2 = {
//   a: 3
// };

// myMethod1 = myMethod.bind(obj1); // 2
// myMethod1.call( obj2 ); // 2

//  console.log(obj1);

// var obj1 = {
//   a:null,
//   b:null
// }

// var obj2 = {
//   c:30,
//   d:20
// }

// if(obj2.c){
//   obj1 = ({...obj1},a = obj2.c);
// }
// console.log(obj1);

// 5th May
// Iterator

// const arr  = [1,2,3,4,5];
// console.log(arr.__proto__[Symbol.iterator]());
// let iterator = arr[Symbol.iterator]();
// console.log(arr);
// console.log(iterator);
// console.log(iterator.next());

// function *generator() {
// yield 1;
// yield *anotherGenerator();
// return 'hello'
// yield 3;
// }

// function *anotherGenerator() {
//   yield 2;
// }
// let iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// let obj = {a:2};
// let myArr = [];
// myArr.push({...obj,b:4});
// console.log(myArr)

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

// Linked List

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
//   insertNode(data) {
//     this.head = new Node(data, this.head);
//   }
//   size() {
//     let counter = 0;
//     let node = this.head;
//     while (node) {
//       counter++;
//       node = node.next;
//     }
//     return counter;
//   }

//   getFirst() {
//     return this.head;
//   }

//   getLast() {
//     let lastNode = null;
//     let node = this.head;
//     if (!this.head) {
//       return null;
//     }
//     while (node.next) {
//       node = node.next;
//       if (node.next === null) {
//         lastNode = node;
//       }
//     }
//     return lastNode;
//   }
//   clear() {
//     this.head = null;
//   }
//   removeFirst() {
//     if (!this.head) {
//       return;
//     }
//     return (this.head = this.head.next);
//   }
//   removeLast() {
//     if (!this.head) {
//       return;
//     }
//     if (this.head.next === null) {
//       return (this.head = null);
//     }
//     let firstNode = this.head;
//     let secondNode = this.head.next;
//     while (secondNode.next) {
//       firstNode = secondNode;
//       secondNode = secondNode.next;
//     }
//     firstNode.next = null;
//   }

//   insertLast(data) {
//     let lastNode = new Node(data);
//     if (!this.head) {
//       this.head = lastNode;
//     }
//     let getLastNode = this.getLast();
//     getLastNode.next = lastNode;
//   }

//   getAt(index) {
//     let counter = 0;
//     let node = this.head;
//     while (node) {
//       if (counter === index) {
//         return node;
//       }
//       counter++;
//       node = node.next;
//     }
//     return null;
//   }
//   removeAt(index) {
//     if (!this.head) {
//       return;
//     }
//     if (index === 0) {
//       this.head = this.head.next;
//     }
//     const previous = this.getAt(index - 1);
//     if (previous || previous.next) {
//       previous.next = previous.next.next;
//     } else {
//       return;
//     }
//   }
// }

// const n1 = new Node(5);
// const l1 = new LinkedList();
// l1.head = n1;
// l1.insertNode(10);
// l1.insertNode(20);
// l1.insertNode(30);
// console.log(l1);
// console.log(l1.size());
// console.log(l1.getFirst());
// console.log(l1.getLast());
//l1.clear();
//l1.removeFirst();
//l1.removeLast();
//l1.insertLast(5);
//l1.getAt(1);
//console.log(l1.getAt(2));
//l1.removeAt(1);
//console.log(l1)

// Geeks For Geeks

// Array Rotation

//left Rotation

// let arr = [1,2,3,4,5,6,7];
// function leftRotation(arr,n) {
//  let modeifiedArray = arr.slice(0,n);
//  arr.splice(0,n);
//  let resultArray = [...arr,...modeifiedArray];
// console.log(resultArray);
// }
// leftRotation(arr,3);

// function rightRotation(arr,n){

// }

// rightRotation
// let arr1 = [1,2,3,4,5]
// let arr2 = arr1.slice(3);
// arr1.splice(3)
// console.log(arr2);
// console.log(arr1)
// console.log([...arr2,...arr1]);

//conversion pascal case
// let str = "BeneficiaryName";
// newFormat = str.match(/[A-Z][a-z]+/g).join(' ');
// final = newFormat[0].toUpperCase() + newFormat.substr(1).toLowerCase();
// console.log(final)

// Local Stroage

//localStorage.setItem('name','Deepak');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
// localStorage.setItem('name','Deepak');
// localStorage.clear();

// // stroing objects in local stroage

// const fullName = {
//   firstName : 'Steve',
//   lastName: 'Waugh'
// }

// localStorage.setItem('Fullname',JSON.stringify(fullName));
// console.log(JSON.parse(localStorage.getItem('Fullname')));
//localStorage.clear();

//Generic Function for localStorage

// function setLocalStroage(key,item){
//   localStorage.setItem(key, JSON.stringify(item));
// }

// function getLocalStroage(key) {
//   return JSON.parse(localStorage.getItem(key))
// }

// setLocalStroage('Name',fullName);
// console.log(getLocalStroage('Name'))

// setLocalStroage('MyName','deepak');
// console.log(getLocalStroage('MyName'))
// localStorage.clear();

//sessionStorage.setItem('name','steve');

//closure

// var a = 10;
//  function outer(){
//    var b = 20;
//    var inner = function(){
//      a++;
//      b++;
//      console.log(a);
//      console.log(b);
//    }
//    return inner
//  }

//  var innerfn = outer();
//  innerfn();
//  var innerfn2 = outer();
//  innerfn2();

// // 1
// for( i=0;i<10;i++){
//  setTimeout(function(){
//   // console.log(i)
//  },2000)
// }

// // 2
// for(let i=0;i<10;i++){
//   setTimeout(function(){
//     //console.log(i)
//   },2000)
//  }

// //  3

// for(var i=0;i<10;i++){
//   (function(){
//     var currentIndex = i;
//     setTimeout(function(){
//       console.log(currentIndex)
//     },2000)
//   })()

//  }

//promises are eager

// const promise = new Promise((resolve, reject) => {
//   console.log('Text inside promise');
//   resolve('Hello world!');
// });

//  console.log('Before calling then method on Promise');

// promise.then(message => console.log(message));

// Destructuring
// ES5

// const john = ['john',26];

// // ES6

// const [name,age] = ['john',26];

// Array Methods
// 1.Indexof
// 2.findIndex
// 3.Find

//mock questions

//get only values in to an array
// var myObj ={
//   a:1,
//   b:2
// }

// var arr = Object.values(myObj);//first way
// var arr2 = Object.entries(myObj)
// console.log(arr)
// console.log(arr2)

// let myArr = []//second way
// for(let key in myObj){
//  myArr.push(myObj[key])
// }
// console.log(myArr);

// let str = 'hello';
// let revStr = ''
// for(let i of str){
//   revStr = i+revStr
// }
// console.log(revStr)

//Q
// myObj ={
//   a:1,
//   b:2,
//   getA(){
//     let self = this;
//     return function(){
//      console.log(self.a);
//      console.log(self.b);
//     }
//   }
// }

//  myObj.getA()();

//Q
// myObj = {
//   a:1,
//   b:2,
//   getA(){
//     console.log(this.a);
//     //console.log(this);
//     return this;
//   },
//   getB(){
//     console.log(this.b)
//   }
// }
// myObj.getA().getB();

//Q
// const fn1 = function(x){
//   this.x = x;
// }
// const fn2 = function(x,y){
//   fn1.call(this,x)
//   this.y = y;
// }

// fn1.prototype.getX = function(){
//   console.log(this.x);
// }

// fn1.prototype.gety = function(){
//   console.log(this.y);
// }

// fn2.prototype = fn1.prototype;
// let obj2  = new fn2(10,20);
// obj2.getX();
// obj2.gety();

//Q

// class Parent{
// constructor(x){
//   this.x = x
// }
// getX(){
//   console.log(this.x)
//   console.log(this.y)
// }
// }

// class child extends Parent{
//   constructor(x,y){
//     super(x)
//     this.y = y
//   }
// }

// let instance1  = new child(100,20);
// instance1.getX();

// var myobj1  = {
//   a:1,
//   b:2
// }
// var myobj2  = {
//   a:1,
//   b:2
// }

// console.log(myobj1 == myobj2)
// console.log(JSON.stringify(myobj1)===JSON.stringify(myobj2));

// Deep and shallow copy

//1.shallow copy

// let arr1 = [1,2,3,4];
// let arr2 = arr1;
// let arr3 = [...arr1]
// let arr4 = arr1.slice();
// let arr5 = [];
// Object.assign(arr5,arr1)
// let arr6 = Array.from(arr1)
// arr1[0]=10;
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);
// console.log(arr6);
// console.log(arr1  === arr2);

//Deep Copy

// let arr1 = [[1],2,3,4];
// let arr2 = arr1;
// let arr3 = [...arr1]
// let arr4 = arr1.slice();
// let arr5 = [];
// Object.assign(arr5,arr1)
// let arr6 = Array.from(arr1)
// let arr7 = JSON.parse(JSON.stringify(arr1));//deep copy
// arr1[0][0]=10;
// console.log(arr1);
// console.log(arr2);
// // console.log(arr3);
// // console.log(arr4);
// // console.log(arr5);
// // console.log(arr6);
//  console.log(arr7);
// console.log(arr1  === arr2);
// console.log(arr1[0] === arr2[0])

// let myobj1 = {
//   a:1,
//   b:2,
//   c:{
//     d:3
//   }
// }
// let myobj2 = myobj1;
// let myobj3 = {}
// Object.assign(myobj3,myobj1)
// const myobj4 = JSON.parse(JSON.stringify(myobj1))
// myobj1.a=10;
// myobj1.b = 20;
// myobj1.c.d = 30
// console.log(myobj2)
// console.log(myobj3)
// console.log(myobj4)

//Q

// let arr1 = [10,2,3,40]
// let arr2 = [1,9,6]
// let arr3 = [...arr1,...arr2];
// let arr4 = arr1+arr2
// console.log(arr3)
// arr3.sort(function(a,b){
//   return a-b
// })
// console.log(arr3);

//Q

// var myobj = {
//   a:20,
//   getA(){
//     let inner = function(){
//       console.log(this.a)
//     }
//     inner.call(this)
//   }
// }

//  myobj.getA();

// var myobj = {
//   a:20,
//   getA(){
//     let inner = () =>{
//       console.log(this.a)
//     }
//     inner();
//   }
// }

//myobj.getA()

// Q
 //let arr = [1,2,3,4,5]
// let sum =0;
// for(let i of arr){
//   sum = sum+i;
// }
// console.log(sum)

// let result = arr.reduce((acc,red)=> acc+red,5);
// console.log(result);

//Q

// function fun(a,b){
// if(a,b){
//   return a+b
// }
// else{
//   return function(b){
//     return a+b
//   }
// }
// }
// console.log(fun(1,2));
// console.log(fun(1)(3))

//Q find minimum and maximum sum after removing one number

// var a = [10,2,3,4];
// var min = Math.min.apply(null,a)
// var max =  Math.max.apply(null,a)
// var sum = a.reduce((acc,curr)=>{
//   return acc+curr
// })
// var minSum = sum-max;
// var maxSum = sum-min;

//Q find length of an integer without converting to string

// let a = 123457544;

// function length(a){
//   let len = 0;
//   while(a !=0 ){
//     a = a/10;
//     a = Math.floor(a);
//     len++
//   }
//  return len
// }
// console.log(length(a));

//Q count of maximum number

// let arr = [1,2,3,4,4,4]

// let max = Math.max(...arr);
// console.log(max);

// let count = 0;
// for(let i of arr){
//   if(i===max){
//     count++
//   }
// }
// console.log(count)

//Q

// var myObj ={
//   a(){
//     console.log('a');
//     return this;
//   },
//   b(){
//  console.log('b')
//     return this
//   }
// }

// myObj.a().b().a();

//Q

// fn(2)(2)(3)=12;
// fn(2)(1)(3)=9;
// fn(2,3,3)=15;
// fn()=0;

// function myfn(a,b,c){
//   if(a&b&c){
//     return (a+b)*c
//   }
//   if(a){
//     return function(b){
//      return function(c){
//        return (a+b)*c
//      }
//     }
//   }
//   else{
//     return 0;
//   }
// }

// console.log(myfn(2,3,3));
// console.log(myfn(2)(2)(2));
// console.log(myfn())

//Q

// const x = [1,2,3];
// x[-1] = 199
// console.log(x)

// console.log(x[x.indexOf(4)]);

//Q
// const arr = [1,20,3,23,43];
// const res = arr.sort((a,b)=>{
//   return b-a;
// })

// console.log(res)

//Q
//console.log(Number.MIN_VALUE);

// console.log([1,2,3]+[4,5,6])

//Q

// function foo(){
//   return 'hello'
// }

// const str = foo `hi`
// console.log(str)

//document.body.contentEditable = true;

// var a = 'Is';
// function test() {
//     var a = 'Fun';
//     function again() {
//       alert(a);
//         var a = 'JavaScript';
//         alert(a);
//     }
//     again();
//     alert(a);
// }
// test();
// alert(a);

// $('div').on('click', function(){
//   console.log('div clicked');
// });
// $('button').click(function(){
//    console.log('button clicked');
// });

// Suppose you want to use arrow functions in your program with an argument named thisArg. What happens in the following scenarios?
// When the invocation of arrow function will occur, then what will happen if thisArg is passed to call, bind or apply method?
// Also, if you prepend the arguments to the call then the first argument (thisArg) should be set to which value?

// var a=12;
// var b=11;
// var result=eval("a*b");
// console.log(result);

// str = " apple apple"
// console.log(str.replace(/apple/g, " banana"))

// function abc(val = 'DoSelect') {
//   return val;
//  }
//  var def = abc();
//  console.log(def);

//  let sampleTxt;
// try {
//     sampleTxt = fs.openSync('/FILE_PATH', 'a');
//     fs.appendFileSync(sampleTxt, 'some_text', 'utf8');
// } catch (e) {
//     // handle error
// }
// finally {
//     // ...
// }

// function job(state) {
//   return new Promise(function(resolve, reject) {
//   if (state) {
//     resolve('Promise success');
//   }
//   else {
//     reject('Promise error');
//   }
// });
// }
// let promise = job(true);

// promise
// .then(function(data) {
//   console.log(data);
//   return job(false);
// })

// .catch(function(error) {
//   console.log(error);
//   return 'Promise Error caught';
// })

// .then(function(data) {
//   console.log(data);
//   return job(true);
// })
// .catch(function(error) {
//   console.log(error);
// });

// function findFirstPosition(arr, fn) {
//   let pos = false;
//   for(let i = 0; i < arr.length; i++) {
//       let row = arr[i];
//       for(let j = 0; j < row.length; j++) {
//           if (fn(row[j])) {
//           pos = [i, j];
//           break;
//       }
//    }
// }
//    return pos;
// }

// const demo = new Promise(resolve => {throw 'Hello World'});
// demo.catch(() => 'Hello World 2').then(console.log.bind(console));

// const fn = a => console.log(a)

// for(var i = 0; i < 3; i++) {
// 	setTimeout(function()  {
// 		fn(i);
// 	}, 0);
// }

// for(let i = 0; i < 3; i++) {
// 	setTimeout(function() {
// 		fn(i);
// 	}, 0);
// }

// function seq() {
//   let i = 0;
//   return function() {
//     return ++i;
//   };
// }
// let seq1 = seq();
// let seq2 = seq();

// alert( seq1() ); // line 1
// alert( seq1() ); // line 2
// alert( seq2() ); // line 3

// const array = [16, 32, 64, 128];
// for (var i = 0; i < array.length; i++) {
//    setTimeout(function() {
//      console.log('Ind_Val: ' + i + ', elem: ' + array[i]);
//    }, 3000);
// }

// let myArray = ['Ricky','mark','steve'];
// let filterArray = myArray.filter(ele =>{
//   let arrElemnt = ele.toLowerCase();
//   return arrElemnt.includes('ri')
// })
// console.log(filterArray)

// var test = (function () {
//   console.log("hrllo0");
// })();

// let str = "helloworld";
// console.log(str.split('').sort().join(''))

// let a = [1,2,3,4,5];
// b = a.map(el =>{
//    return el = el+1;
// })

// console.log(b);

//Currying

// using closure

// function multiply(x){
//         return function(y){
//          return function(z){
//              console.log(x*y*z)
//          }
//         }
// }

// const multi1 = multiply(2);
// const multi2 = multi1(3);
// multi2(4)

//multiply(2)(3)(4)


// using bind

// function multiply(x,y){
//   console.log(x*y)
// }

// const multi = multiply.bind(this,2);
// multi(3);

//Reduce

// const arr = [];
// arr.push(5);
// arr.push(10);
// //arr = [1] //this will throw error
// console.log(arr);

// let arr = [1,3,5,6,7,9]
// let sum = 0
//  arr.reduce((acc,curr) =>{
//    sum = acc + curr;
//    return acc + curr;
// }
// )
// console.log(sum)
// console.log(arr);

// let a = [1,2,3];
// let b = [3,4,5];
// let c = [5,7];
// a.push(...b); //Differenence between concat and pudh
// let d = a.concat(b);
// console.log(a);
// console.log(d);

// a.push(...b,...c);
// console.log(a);


//With reduce 
// let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     function(accumulator, currentValue) {
//       return accumulator.concat(currentValue)
//     },
//     []
//   )
  // flattened is [0, 1, 2, 3, 4, 5]


//   Remove Duplicate using reduce

// let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
// let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
//   if (accumulator.indexOf(currentValue) === -1) {
//     accumulator.push(currentValue)
//   }
//   return accumulator
// }, [])

// console.log(myOrderedArray)

// function rotation(arr,n){
//   let arr2 = [];
//   let arr3 =''
//    arr2 = arr.splice(arr.length-n);
//    arr2 = arr2.concat(arr)
//    arr3 = arr2.join(' ');
//    return arr3
//  }
 
//  console.log(rotation([1,2,3,4,5],2));

//Q console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));


//Q var a={},
// b={key:'b'},
// c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b]);


//Q
// (function(x) {
//   return (function(y) {
//       console.log(y);
//   })(2)
// })(1);


//Q
// var hero = {
//   _name: 'John Doe',
//   getSecretIdentity: function (){
//       return this._name;
//   }
// };

// var stoleSecretIdentity = hero.getSecretIdentity;

// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());

//Q
// var length = 10;
// function fn() {
// 	console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     arguments[0]();
//   }
// };

// obj.method(fn, 1,3);

// var a = [1,2,3];
// a = [0,...a]
// a = [...a,4];
// console.log(a);


// var b = 1;
// function outer(){
//    	var b = 2
//     function inner(){
//         b++;
//         var b = 3;
//         console.log(b)
//     }
//     inner();
// }
// outer();


// 'use strict';
// const user = {
//   id: 551,
//   name: 'Tom',
//   getId() {
//     return this.id;
//   },
//   credentials: {
//     id: 120,
//     username: 'tom',
//     getId() {
//       return this.id;
//     }
//   },
// };

// const getId = user.credentials.getId;
// console.log(getId());


// function fn() {
//   let a = 20;
// }
// fn();
// console.log(a);




/////Interview


// var person = {
//   fname: "Sophia",
//   lname: "Jackson",
//   age: 35,

//   getName: function (a,b,c) {
//     console.log(this.fname);
//     console.log('arg',a,b,c)
//   },

//   getAge: function () {
//     console.log(this.age);
//   }
// };

// var userName = person.getName;

// userName.call(person,1,2,3);
//  userName.apply(person,[1,2,3]);
//  let test = userName.bind(person,10);
//  test(2,3);


// let employee1 = { 
//    name: 'mark',
//   address:{
//    'street':''
// },
//   getName:function() {
//     return this.name
//   }
// }

// let employee2 = { 
//    name: 'ricky'
// }

// obj = employee1;
// Object.assign(obj,employee1);
// obj.name = 'Steve'

// employee1.getName.call();

// ["John", "Alex"].print();


// Array.prototype.print = function(){
//         let arr = this.array;
//         for(let i of arr){
//            return i;
//         }
// }
//    let a = [1,2,3];
//   a.print();
// // "John", "Alex"
  
//     function Person(name,age) {
//         this.name = name;
//         this.age = age
//     }

//       Person.prototype.getName = function() {
//               return this.name
//   }

//   function Employee(name,age,last) {
//           Person.call(this,name,age);
//           this.last = last;
//   }
     
//    Employee.protoype = Object.create(Person.protoype);

//    Employee.getName();

// function fn(){
//   var a = 10;
  
// }
//Q
// x = new Array();
// y = new Array();
// x[1] = 4;
// y[2] = 6;
// x = y;
// console.log(x)

// //Q

// var fn;
// for(var i=0;i<9;i++){
  
//    fn = function() {
//      return i;
//    }
  
// }

// console.log(fn())

// //Q
// let a  = [];
// console.log(typeof a);
// console.log(Array.isArray(a));


//Q
// let emp1 = {
//   name:'mark',
//   city:'bang',
//   state:'karna'
// }
// let emp2 = {};
// Object.assign(emp2,emp1);
// emp2.city = 'delhi';
// console.log(emp1)
// console.log(emp2)


// function urlSlug(str) {
//   const splitArr = str.split(' ')
//   if(splitArr.length > 1) {
//     const newArr = splitArr.filter((s,i) =>{
//       if(s !== '') {
//         console.log(s)
//         return s.toLowerCase()
//       } 
//     }
//     );

//     return newArr.join('-');
//   } else {
//        return splitArr[0];
//   }
 
// }

// console.log(urlSlug(' Global Title'))


// function urlSlug(str) {
//   const splitArr = str.split(' ')
//   if(splitArr.length > 1) {
//     let newArr = []
//     splitArr.forEach((s,i) =>{
//       if(s !== '') {
//         newArr.push(s.toLowerCase())
//       } 
//     });
//     return newArr.join('-');
//   } else {
//        return splitArr[0];
//   }
 
// }

//console.log(urlSlug('WinterIsBAck'))


// function modeifieSring(str) {
//   const splitArr = str.split(' ');
//   if(splitArr.length>1) {
//     let newArr = [];
//     splitArr.forEach((el) =>{
//       if(el !== ''){
//         newArr.push(el.toLowerCase());
//       }
//     })
//     return newArr.join('-')
//   }
//    else {
//      return splitArr[0]
//    }
// }


// console.log(modeifieSring(' Winter Is BAck'))

 //let arr = ['Hello','how','are','you'];

// let arr1 = arr.map(el =>{
//   if(el.length>3){
//     return el.toLowerCase();
//   }
// })

// console.log(arr1);

// let arr2 = arr.filter(el =>{
//   if(el.length>3){
//     console.log(el.toLowerCase() === 'hello')
//     return el.toLowerCase();
//   }
// })

//  console.log(arr2)

// function filterArray(arr) {
//   return arr.filter((el => {
//     if(el>0 && el %1 === 0) {
//       return el
//     }
//   })).map(ele => {
//     return ele*ele;
//   })
// }

// function filterArray(arr) {
//   return arr.filter(el => (el>0 &&el%1===0)).map(el => el*el)
// }
//console.log(filterArray([2.9, -3, 4, 9,1.5]))

// Polyfill for bind

// let obj = {
//   firstName:'Mark',
//   lastNmae :'Waugh'
// }

// function fullName() {
//   return this.firstName + " " + this.lastNmae
// }

// fullName.call(obj));


// let arr = ['Hello','how','are','you'];

// let arr1 = arr.map(el =>{
//   if(el.length>3){
//     return el.toLowerCase();
//   }
// })

// console.log(arr1);

// let arr2 = arr.filter(el =>{
//   if(el.length>3){
//     return el.toLowerCase();
//   }
// })

// console.log(arr2)

// function filterArray(arr) {
//   return arr.filter((el => {
//     if(el>0 && el %1 === 0) {
//       return el
//     }
//   })).map(ele => {
//     return ele*ele;
//   })
// }

// function filterArray(arr) {
//   return arr.filter(el => (el>0 &&el%1===0)).map(el => el*el)
// }
//console.log(filterArray([2.9, -3, 4, 9,1.5]))





// let a = [];

// // a.splice(1,1,20);
// // a.splice(2,1,30);


// function insert(index,element) {
//   a[index] = element
//   console.log(a);
//   return a;
// }

// insert(0,10); //
// insert(1,20);
// insert(4,30);
// insert(1,50);

