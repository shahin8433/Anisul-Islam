// var base=prompt("enter your base =");
// var height=prompt("enter height base =");
// var area= base * height;
// document.write("area =" + area);

//////////////////////////////////////////////////////////////////////////////
//////////////////////// class 12 make template converter //////////////////
// var fah=parseFloat(prompt("enter your fahrenheit"));
// var cel= (fah-32) * (5/9);
// document.write("celcius =" + cel)

//////////////////////////////////////////////////////////////////////////////
//////////////////////// class-14: if ,else if, else /////////////////////////
// var num1=parseInt(prompt("Enter first number:"));
// var num2=parseInt(prompt("Enter second number:"));
// if(num1>num2){
//                     document.write("Large Number is = "+num1);
// }
// else if(num2>num1){
//                     document.write("Large Number is = "+ num2)
// }
// else{
//                     document.write("Equal Number")};

//////////////////////////////////////////////////////////////////////////////
////////////// class-16 logical operator /////////////////////////////
// var mark=prompt("inter your mark");
// if(mark >= 100 || mark < 0)
// {console.log("invalid mark")}

// if(mark >=79 && mark<=100)
// {console.log("A+")}
// else if(mark >=69 && mark<=80)
// {console.log("B+")}
// else if(mark >=59 && mark<=70)
// {console.log("C+")}
// else if(mark >=49 && mark<=60)
// {console.log("D+")}
// else if(mark >=39 && mark<=40)
// {console.log("F+")}
// else
// {console.log("fail")}

// Large Number
// var num1 = prompt("Enter num1");
// var num2 = prompt("Enter nu2");
// var num3 = prompt("Enter num4");
// if(num1>num2 && num1>num3 ){
//                     document.write("Large number = "+ num1);
// }
// else if(num2>num1 && num2>num3){
//                     document.write("Large number = "+ num2);
// }
// else{
//                     document.write("Large number = "+ num3)
// }

// Vowel/consonant
// var letter = prompt("Enter your letter");
// letter = letter.toLowerCase();
// if (letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u"){
//                     document.write("Letter is vowel")
// }
// else{
//                     document.write("letter is consonant")
// }

//////////////////////////////////////////////////////////////////////////////
///////////////// class 18 for loop //////////////////////////////////////
// for(var x=1; x<=10; x=x+1){
//                     document.write("<h1>Bangladesh</h1>")
// }
// for(var x=3; x<=100; x=x+3){
//                     document.write(x +"<br>")
// }

//////////////////////////////////////////////////////////////////////////////
////////////////////// class 20 while loop //////////////////////////////////////
// var i =1;
// while(i<=50){
//                     i=i+1;
//                     console.log(""+i)
// }

// var i=1;
// var sum=0;
// while(i<=10){
//                     i=i+1;
//                     sum=sum+i;

// }
// console.log(sum)

// var i=1;
// var sum=0;
// while(i<=50){
//                  if(i%3==0 && i%5==0) {
//                     console.log(" "+i)
//                     sum=sum+i;
//                  }

//                     i=i+1;

// }
// console.log(sum);

//////////////////////////////////////////////////////////////////////////////
///////////////////// class-21: do while loop /////////////////////////////////
// var i=1;
// do{
//                     console.log(i);
//                     i++
// }
// while(i<=10)

//////////////////////////////////////////////////////////////////////////////
//////////////// class-23: ternary Operator ////////////////////////////////
// var num=Number(prompt("Enter your number"));
// if(num>0){
//                     console.log("positive")
// }
// else{
//                     console.log("negative")
// }
// var num=Number(prompt("Enter your number"));
// var result= num>0 ? "positive": "negative";
// console.log(result)

// var num=Number(prompt("Enter your number"));
// if(num>0){
//                     console.log("positive")
// }
// else if(num<0){
//                     console.log("Negative")
// }
// else{
//                     console.log("Zero")
// }
// var num=Number(prompt("Enter your number"));
// var result= num>0 ? "positive" : num<0 ? "negative" : "zero"
// console.log(result)

//////////////////////////////////////////////////////////////////////////////
// ///////////////// class-24: function ///////////////////////////////////
// function shahin(num1,num2){
//                     var result=num1+num2;
//                     console.log(result)
// }
// shahin(5,3);
// function shahin(num1,num2){
//                     var result=num1+num2;
//                     return result
// }
// var x=shahin(5,4);
// console.log(x)

// function addition(num1,num2){
//                     var addition=num1+num2;
//                     console.log(addition)
// }
// function subtraction(num1,num2){
//                     var addition=num1-num2;
//                     console.log(addition)
// }
// addition(4,6);
// addition(2,3);
// subtraction(10,6)

//////////////////////////////////////////////////////////////////////////////
/////////////// class-25: IIFEs and function expression; ///////////////////
// (function shahin(num1,num2){
//                     var result=num1+num2;
//                     console.log(result)
// })(2,3)
// var newfunction=function shahin(num1,num2){
//                     var result=num1/num2;
//                     console.log(result)
// }
// newfunction(48,6);

/////////////////////////////////////////////////////////////////////
///////////////// class-26: create and use array ////////////////////////
// var fdName= ["mirad","roman","sohag"];
// console.log(fdName.length);
// console.log(fdName[2]);
// fdName.push("shahin");
// fdName.pop()
// console.log(fdName);

// var country1=["bangladesh"];
// var country2=["india"];
// var country= country1.concat(country2);
// console.log(country)

/////////////////////////////////////////////////////////////////////
///////////////// class-27: loop an array //////////////////////////
// var num=[10,20,30,40,50,60]
// var sum=0;
// for(var i=0; i<=5; i++){
//                     console.log(num[i])
//                     sum=sum+ num[i]
// }
// console.log(sum)
// var num=new Array();
// for(var i=0; i<=5; i++){
//                     num[i]=parseInt(prompt("Enter your number:"))
// }

// var sum=0;
// for(var i=0; i<=5; i=i+1){
//                     console.log(num[i]);
//                     sum=sum+num[i];
// }
// console.log(sum)

// var sum=0;
// for(var i=0; i<=5; i++){
//                     console.log(num[i]);
//                     sum=sum+num[i]
// }
// console.log("sum= "+sum)

//////////////////////////////////////////////////////////////////////////////
//////////////////// class-28: arry library function ///////////////////////
// var shahin=["shahin","shamim","suntana","rajiya"]
// adding elements using splice
// shahin.splice(2,1,"roman","badhon")
// console.log(shahin)

// removing element using splice
// shahin.splice(1,2);
// console.log(shahin)

//////////////////////////////////////////////////////////////////////////////
///////////////////////////// class-31: create a object ///////////////
// function student(name,age,cgpa,lang){
//                     this.name=name;
//                     this.age=age;
//                     this.cgpa=cgpa;
//                     this.lang=lang;
// }
// var s1= new student("anisul",27, 2.33,"bangla,english");
// var s2=new student("shahin",18, 3.21,"bangla english,hindi");
// var s3=new student("shamim",17,2.11,"bangla")
// console.log(s1)
// console.log(s1.age)
// console.log(s1["name"])

////////////////////////////////////////////////////////////////////////////////
///////////////////////// class-35:object model /////////////////////////////////
// var myheading=document.getElementById("heading1");
// myheading.innerHTML="change"

// var myheading=document.querySelector("#heading1");
// myheading.innerHTML="change"
// var myheading=document.querySelector(".heading1");
// myheading.innerHTML="change"
// var myheading=document.querySelector("h1");
// myheading.innerHTML="this is change"

// var myheading=document.querySelector(".div1 a");
// myheading.innerHTML="text change"
//////////////////////////////////////////////////////////////////////////////
// ///////////////////////// js class-37: onclick event  //////////////////////
// function mymassege1(){
//                     alert("I am button 1")
// }
// function mymassege2(){
//                     alert("I am button 2")
// }
// function mymassege1(){

//                     var myVar= document.getElementById("paraid");
//                     myVar.innerHTML="i am button 1"
// }
// function mymassege2(){

//                     var myVar= document.getElementById("paraid");
//                     myVar.innerHTML="i am button 2"
// }
// var myVar= document.querySelector("#image")
// function mymassege1(){
//                     myVar.src= "./image/passport.jpg"
// }
// var myVar= document.querySelector("#image")
// function mymassege2(){
//                     myVar.src= "./image/image2.png"
// }
//////////////////////////////////////////////////////////////////////////////
////////////////  js class-38:Find, create , add .remove ////////////////////////
// var heading3 = document.createElement("h1");
// var text = document.createTextNode("this is heading3");
// heading3.appendChild(text);

// var mydiv = document.querySelector(".my-div");
// mydiv.appendChild(heading3);
// var heading2 = document.getElementsByTagName("h1")[1];
// mydiv.removeChild(heading2);

// var heading0 = document.createElement("h1");
// var text0 = document.createTextNode("this is heading0");
// heading0.appendChild(text0);
// var heading1 = document.getElementsByTagName("h1")[0];
// mydiv.insertBefore(heading0, heading1 );

//////////////////////////////////////////////////////////////////////////////
///////////////  js class-39: dom traversing and manipulating //////////////////
// downwords-querySelector/ queryselectorall
// const studentList = document.querySelector(".student-list");
// const studentA = studentList.querySelector(".student-a");

//////////////////////////////////////////////////////////////////////////////
/////////////////  js class-41: changing css style //////////////////////////////
// var myVar = document.querySelector("#paraId")
// function addStyle(){
//                     myVar.classList.add("para-style");
// }
// function removeStyle(){
//                     myVar.classList.remove("para-style");
// }

//////////////////////////////////////////////////////////////////////////////
/////////////////  js class-42:Event listener- //////////////////////////////////
// var myVar = document.querySelector("button")
// myVar.addEventListener("click", myfun);
// function myfun(){
//                     alert("hellow")
// }
// var myVar = document.querySelector("h1");
// myVar.addEventListener("mouseover", function(){
//                     myVar.classList.add("my-style")
// });
// myVar.addEventListener("mouseout", function(){
//                     myVar.classList.remove("my-style")
// });

//////////////////////////////////////////////////////////////////////////////
///////////////////////// js class-43:event listeners //////////////////////////
// var myVar = document.querySelectorAll(".mybutton")[0];
// myVar.addEventListener("click", function(){
//                     var text = this.innerHTML;
//                     document.querySelector(".heading1").innerHTML = text + "is clicked"
// });
// var myVar = document.querySelectorAll(".mybutton")[1];
// myVar.addEventListener("click", function(){
//                     var text = this.innerHTML;
//                     document.querySelector(".heading1").innerHTML = text + "is clicked"
// });
// var myVar = document.querySelectorAll(".mybutton")[2];
// myVar.addEventListener("click", function(){
//                     var text = this.innerHTML;
//                     document.querySelector(".heading1").innerHTML = text + "is clicked"
// });
// for (var i=0; i<3; i++){
//                     var myVar = document.querySelectorAll(".mybutton")[i];
// myVar.addEventListener("click", function(){
//                     var text = this.innerHTML;
//                     document.querySelector(".heading1").innerHTML = text + "is clicked"
// });
// }

//////////////////////////////////////////////////////////////////////////////
//////////////////////////  js class-44:play audio /////////////////////////////
// for (var i=0; i<3; i++){
//                     var myVar = document.querySelectorAll(".mybutton")[i];
// myVar.addEventListener("click", function(){
//                   var text=this.innerHTML;
//                   console.log(text);
//                   audioPlay(text);
//                   playAinim(text);

// });
// };
// document.addEventListener("keypress", function(event){
//                     var text = event.key;
//                     audioPlay(text);
//                     playAinim(text);
// })

// function audioPlay(text){
//                     switch(text){
//                                         case"a":
//                                         var audio = new Audio("./audio/audio1.mp3");
//                                         audio.play();
//                                         break;
//                                         case"b":
//                                         var audio = new Audio("./audio/audio2.mp3");
//                                         audio.play();
//                                         break;
//                                         case"c":
//                                         var audio = new Audio("./audio/audio3.mp3");
//                                         audio.play();
//                                         break;
//                     }
// }
// function playAinim(text){
//                     var selectButton = document.querySelector("." + text);
//                     selectButton.classList.add("anim");
//                     setTimeout(function(){
//                                         selectButton.classList.remove("anim");
//                     }, 1000);
// }

//  document.addEventListener("keypress", function(event){
//                     var text = event.key;
//                     var myVar = document.querySelector("p");
//                     myVar.innerHTML = " you have press key " + text;
//  })

//////////////////////////////////////////////////////////////////////////////
///////////  class-47: event object onchange event ///////////////////////////
// const input = document.querySelector("input[name=name]");
// input.addEventListener ("change", changeHandler);
// function changeHandler(e){
//                     // console.log("changed")
//                     // console.log(e);
//                     // console.log(e.type);
//                     // console.log(e.target);
//                     // console.log(e.target.className);
//                     // console.log(e.target.id);
//                     console.log(e.target.value);
// }

// const programs = document.querySelectorAll("input[name=program");
// // console.log(programs)
// Array.from(programs).map((program)=> {
//                  program.addEventListener("change", programHandler)
// })
// function programHandler(e){
//                   if(e.target.checked){
//                     console.log(e.target.value);
//                   }
// }

// const department = document.querySelector("#department");
// // console.log(department)
// department.addEventListener("change", handlerDepartment)
// function handlerDepartment(e){
//                     console.log(e.target.value)
// }

//////////////////////////////////////////////////////////////////////////////
//////////////////////////  class-48: onsubmit event ///////////////////////////
// const form = document.querySelector("form")
// const name =document.querySelector("div #name")

//////////////////////////////////////////////////////////////////////////////
//////////////////////////  class-64: //////////////////////////////////
// function add(x,y){
//                     var sum=x+y;
//                     console.log(sum)
// }
// add(5,6)

// var add = (x,y) =>{
//         var sum=x+y;
//         console.log(sum)
// }
// add(2,3)

//////////////////////////////////////////////////////////////////////////////
///////////  class-52:keyboardEvent ///////////////////////////
// const textarea= document.querySelector("textarea");
// textarea.addEventListener("keydown",function(e){
//   // console.log("keydown");
//   if(e.repeat){
//     alert("do not repeat")
//   }
// })
// textarea.addEventListener("keypress",function(){
//   console.log("keypress");
// })
// textarea.addEventListener("keyup",function(e){
//   // console.log("keyup");
//   // console.log(e.key);
//   // console.log(e.keyCode);
//   // console.log(e.code);
//   // console.log(e.shiftKey);
//   if(e.shiftKey){
//     console.log(`shift+ ${e.key}`);
//   }
// })




//////////////////////////////////////////////////////////////////////////////
///////////  class-66: default and rest parameter ///////////////////////////
// default paremeter
// function message(text="hello everyone"){
//                     console.log(text);
// }
// message();
// message("i love bangladesh");
// rest parameter
// function printNumber(x,y,...z){
//                    console.log(`x= ${x}, y= ${y}, z= ${z}`)
// }
// printNumber(1,2,3,4,5);

//////////////////////////////////////////////////////////////////////////////
///////////  class-67: default and rest parameter ///////////////////////////
// function sum(x,y,z){
//                     return x+y+z;
// }
// let numbers = [1,2,3];
// console.log(sum(...numbers));

// let allNumbers1 = [4,5, ...numbers];
// console.log(allNumbers1);

// let allNumbers2 = [4,...numbers,5];
// console.log(allNumbers2);

// let allNumbers3 = [...numbers,4,5];
// console.log(allNumbers3);

// let oddNumbers = [1,3,5];
// let evenNumbers = [2,4,6];
// let totalNumbers = [...oddNumbers,...evenNumbers];
// console.log(totalNumbers);

// let copyArray = [...totalNumbers];
// console.log(`copyArray = ${copyArray}`);

// let chars = [`A`, `b`, ...`Anisul`, `z`];
// console.log(chars)

// let personalinfo1 = {name: `shahin alam`, age: 18};
// let personalinfo2 = {id: `101`, nationality: "bd"};
// let p1= {...personalinfo1};
// console.log(p1)
// let p2= {...personalinfo1, ...personalinfo2};
// console.log(p2);

//////////////////////////////////////////////////////////////////////////////
///////////////////  js class-68: object literals /////////////////////////////
// function student1(name, age){
//                     return{
//                                         name:name,
//                                         age: age
//                     }
// }
// console.log(student1("shahin", 18));

// function student2(name, age){
//                     return{
//                                         name,
//                                         age
//                     }
// }
// console.log(student2("mirad", 20));
// let message1 = {
//                     body : function(){
//                                         return(`I love bangladesh`)
//                     }
// }
// console.log(message1.body());
// let message2 = {
//                     body(){
//                                         return(`I love bangladesh`)
//                     }
// }
// console.log(message2.body())
// let message3 = {
//                     'body name' (){
//                                         return(`I love bangladesh`);
//                     }
// }
// console.log(message3['body name']())
//////////////////////////////////////////////////////////////////////////////
////////////////////  js class-69: for of, for in loop ///////////////////////
// const student1 = ["s1", "s2","s3","s4"];
// for(let name of student1){
//                     console.log(name);
// }
// const student2 = {
//                     name: "shahin",
//                     age: 18,
//                     id : 26
// }
// for (let x in student2){
//                     console.log(x);
//                     console.log(student2[x]);
// }
// let student = {
//                     id: 101,
//                     name: "shahin",
//                     age: 18
// }
// for(let x in student){
//                     console.log(`${x} : ${student[x]}`)
// }

//////////////////////////////////////////////////////////////////////////////
///////////  class-70: forEach vs for ///////////////////////////
// var numbers =[5,7,8,9];
// for(var x=0; x<numbers.length; x++){
//                     console.log(numbers[x])
// }
// var numbers =[5,7,8,9];
// numbers.forEach(function(x){
//                     console.log(x)
// })

// var numbers =[5,7,8,9];
// var squreNumbers = [];
// numbers.forEach(function(x){
//                     squreNumbers.push(x*x);
// })
// console.log(squreNumbers)
// var numbers =[5,7,8,9];
// console.log(numbers);
// numbers.forEach(function(x,index,arr){
//                     arr[index] = x+5;
// })
// console.log(numbers);

//////////////////////////////////////////////////////////////////////////////
///////////  class-71: map and filter array ///////////////////////////
// var numbers=[2,4,5,6,10];
// var squarenumbers=[];
// numbers.forEach(function(x){
//                     squarenumbers.push(x*x);
// })
// console.log(squarenumbers)

// var squarenumbers= numbers.map(function(x){
//                     return x*x;
// })
// console.log(squarenumbers);

// var newArray= numbers.filter(function(x){
//                     return x>5;
// })
// console.log(newArray)

//////////////////////////////////////////////////////////////////////////////
///////////  class-72: Arrow fucntion part-1 ///////////////////////////
// function display1(){
//                     console.log("i am display 1") //tradition funtion
// }
// display1();

// const display2= () =>{
//                     console.log("i am display 2") // arrow function
// }
// display2()

// function message1(){
//                     return "i am message 1"
// }
// console.log(message1())
// const message2= ()=> "i am message 2"
// console.log(message2())

//////////////////////////////////////////////////////////////////////////////
///////////  class-73: arrow function part-2 ///////////////////////////
// var students = [   {
//                     id: 101,
//                     name: "anisul islam",
//                     gpa: 2.32
// },
// {
//                     id: 102,
//                     name: "rifat islam",
//                     gpa: 4.32
// },
// {
//                     id: 103,
//                     name: "mirad islam",
//                     gpa: 3.32
// },
// {
//                     id: 101,
//                     name: "rony",
//                     gpa: 5.00
// }
// ];
// function studentNames1(){
//                     return students.filter(function(x){
//                                         return x.gpa >4;
//                     }).map(function(y){
//                                         return y.name;
//                     })
// }
//     console.log(studentNames1())     // traditional function

// const studentNames2 = ()=> students.filter((x)=> x.gpa>4).map((y)=>y.name);
// console.log(studentNames2());

//////////////////////////////////////////////////////////////////////////////
///////////  class-74: destructuring array and ohjects //////////////////////
// array destructure
// let numbers = [5,6,7,9]
// let [num1,num2,num3,num4] = numbers;
// console.log(num1);
// console.log(num4);

// swap variables
// let a=5, b=7;
// [a,b] = [b,a]
// console.log(a);
// console.log(b);

// object destructure
// const studentinfo = {
//                     id: 101,
//                     fullName: 'anisul islam',
//                     lang: {
//                                         native: 'bangla',
//                                         beginer: 'english'
//                     }
// }

// const {id, fullName,lang}= studentinfo
// console.log(id);
// console.log(fullName);
// console.log(lang.native)

// function parameters destructure
// const studentinfo = ({id, fullName})=>{
//                     console.log(`${id}, ${fullName}`)
// }
// const student = {
//                     id: 101,
//                     fullName: 'anisul islam'
// }
// studentinfo(student)

//////////////////////////////////////////////////////////////////////////////
///////////  class-75: array find , findIndex method //////////////////////

// let numbers= [5, 15, 14, 26];
// // const evenNumbers = (value)=> {
// //                     if(value%2===0)
// //                     return value;
// // }
// // let firstEvenNumbers = numbers.find(evenNumbers);
// let firstEvenNumbers = numbers.find((x)=> x%2===0);
// console.log(firstEvenNumbers);
// let firstEvenNumbersIndex = numbers.findIndex((x)=> x%2===0);
// console.log(firstEvenNumbersIndex);

// const students = [
//                     {
//                                         id: 101,
//                                         gpa: 2.31
//                     },
//                     {
//                                         id: 101,
//                                         gpa: 3.31
//                     },
//                     {
//                                         id: 101,
//                                         gpa: 4.31
//                     },
//                     {
//                                         id: 101,
//                                         gpa: 5.00
//                     },
// ]
// console.log(students.find((x)=> x.gpa>4));


//////////////////////////////////////////////////////////////////////////////
///////////  class-78: Synchronous vs Asynchronous //////////////////////
// const taskOne=()=>{
//                     console.log("taskOne");
// }
// function dataLoding(){
//                     console.log("taskTwo dataloding");
// }
// const taskTwo=()=>{
//                setTimeout(dataLoding, 3000)
// }
// const taskThree=()=>{
//                     console.log("taskThree");
// }
// const taskFour=()=>{
//                     console.log("taskFour");
// }
// const taskFive=()=>{
//                     console.log("taskOne");
// }

// taskOne()
// taskTwo()
// taskThree()
// taskFour()
// taskFive()

//////////////////////////////////////////////////////////////////////////////
///////////  class-79: callback and higher order function ///////////////////
// function square(x){
//                     console.log(`square of ${x}: ${x*x}`);
// }

// function higherOrderFunction (num, callback){
//                     callback(num)
// }
// higherOrderFunction(5, square)

// const taskOne = (callback) => {
//   console.log("taskOne");
//   callback();
// };

// const taskTwo = (callback) => {
//   setTimeout(() => {
//     console.log("taskTwo dataloading");
//     callback();
//   }, 3000);
// };
// const taskThree = (callback) => {
//   console.log("taskThree");
//   callback();
// };
// const taskFour = (callback) => {
//   console.log("taskFour");
//   callback();
// };
// const taskFive = () => {
//   console.log("taskFive");
 
// };

// taskOne(() => {
//   taskTwo(() => {
//     taskThree(()=>{
//                     taskFour(()=>{
//                                         taskFive()
//                     })
//     });
//   });
// });

//////////////////////////////////////////////////////////////////////////////
///////////  class-80: promise part-1 ////////////////////////////////////////
// console.log("wellcome");
// const promise1 = new Promise((resolve, reject)=>{
//   let completedPromise = true;
//   // let completedPromise = false;
//   if(completedPromise){
//     resolve("complete promised 1");
//   }
//   else{
//     reject("not completed promise 1")
//   }
// })
// // promise1.then((res1)=>{
// //   console.log(res1);
// // })
// // .catch((err)=>{
// //   console.log(err);
// // })
// const promise2 = new Promise((resolve, reject)=>{
//   resolve("completed promise 2")
// })
// // promise2.then((res2)=>{
// //   console.log(res2);
// // })
// Promise.all([promise1, promise2]).then(([res1,res2])=>{
//   console.log(res1,res2);
// })

// const promise1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("completed promise 1")
//   }, 2000)
// })
// const promise2= new Promise((resolve, reject)=>{
//   resolve("completed promise 2")
// },1000)
// Promise.race([promise1, promise2]).then((res)=>{
//   console.log(res);
// })
// console.log("end");

//////////////////////////////////////////////////////////////////////////////
///////////  class-81: promise part-2 ////////////////////////////////////////
// console.log("wellcome");
// const taskOne=()=>{
//   return new Promise((resolve, reject)=>{
//     resolve("task 1 is completed")
//   })
// }
// const taskTwo=()=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("task 2 is completed")
//     },2000)
//   })
// }
// const taskThree=()=>{
//   return new Promise((resolve, reject)=>{
//     // resolve("task 3 is completed")
//     reject("task 3 is not completed")
//   })
// }
// const taskFour=()=>{
//   return new Promise((resolve, reject)=>{
//     resolve("task 4 is completed")
//   })
// }
// taskOne()
// .then((res)=>console.log(res))
// .then(taskTwo)
// .then((res)=>console.log(res))
// .then(taskThree)
// .then((res)=>console.log(res))
// .then(taskFour)
// .then((res)=>console.log(res))
// .catch((res)=>console.log(res))

// console.log("end");

//////////////////////////////////////////////////////////////////////////////
///////////  class-82: async await ////////////////////////////////////////
// console.log("wellcome");
// const taskOne=()=>{
//   return new Promise((resolve, reject)=>{
//     resolve("task 1 is completed")
//   })
// }
// const taskTwo=()=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("task 2 is completed")
//     },2000)
//   })
// }
// const taskThree=()=>{
//   return new Promise((resolve, reject)=>{
//     // resolve("task 3 is completed")
//     reject("task 3 is not completed")
//   })
// }
// const taskFour=()=>{
//   return new Promise((resolve, reject)=>{
//     resolve("task 4 is completed")
//   })
// }
// // async function callAllTask(){
// //   const t1= await taskOne();
// //   console.log(t1);
// //   const t2 = await taskTwo();
// //   console.log(t2);
// //   const t3 = await taskThree();
// //   console.log(t3);
// //   const t4 = await taskFour();
// //   console.log(t4);
// // }
// async function callAllTask(){
// try{
//   const t1= await taskOne();
//   console.log(t1);
//   const t2 = await taskTwo();
//   console.log(t2);
//   const t3 = await taskThree();
//   console.log(t3);
//   const t4 = await taskFour();
//   console.log(t4);
// }
// catch (e){
//   console.log(e);
// }
// }
// callAllTask()

// console.log("end");