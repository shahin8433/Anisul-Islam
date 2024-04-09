// var base=prompt("enter your base =");
// var height=prompt("enter height base =");
// var area= base * height;
// document.write("area =" + area)

// class 12 make template converter
// var fah=parseFloat(prompt("enter your fahrenheit"));
// var cel= (fah-32) * (5/9);
// document.write("celcius =" + cel)

// class-14: if ,else if, else
// var num1=parseInt(prompt("Enter first number:"));
// var num2=parseInt(prompt("Enter second number:"));
// if(num1>num2){
//                     console.log("Large Number is= "+num1);
// }
// else if(num2>num1){
//                     console.log("Large Number is= "+ num2)
// }
// else{
//                     console.log("Equal Number")

// class-16 logical operator
// var mark=prompt("inter your mark");
// if(mark >= || mark >=0)
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

// class 18 for loop

// for(var x=1; x<=10; x=x+1){
//                     document.write("<h1>Bangladesh</h1>")
// }
// for(var x=3; x<=100; x=x+3){
//                     document.write(x +"<br>")
// }

// class 20 while loop
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

// class-21: do while loop
// var i=1;
// do{
//                     console.log(i);
//                     i++
// }
// while(i<=10)

// class-23: ternary Operator
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

// class-24: function
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

// class-25: IIFEs and function expression;
// (function shahin(num1,num2){
//                     var result=num1+num2;
//                     console.log(result)
// })(2,3)
// var newfunction=function shahin(num1,num2){
//                     var result=num1/num2;
//                     console.log(result)
// }
// newfunction(48,6);

// class-27: loop an array
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

// class-28: arry library function
// var shahin=["shahin","shamim","suntana","rajiya"]
// adding elements using splice
// shahin.splice(2,1,"roman","badhon")
// console.log(shahin)

// removing element using splice
// shahin.splice(1,2);
// console.log(shahin)

// class-31: create a object

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
// // console.log(s1.age)
// // console.log(s1[name])

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



//////////////////////  js class-39: dom traversing and manipulating ///////////////////////////////
// downwords-querySelector/ queryselectorall
// const studentList = document.querySelector(".student-list");
// const studentA = studentList.querySelector(".student-a");
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
for (var i=0; i<3; i++){
                    var myVar = document.querySelectorAll(".mybutton")[i];
myVar.addEventListener("click", function(){
                    var text = this.innerHTML;
                    document.querySelector(".heading1").innerHTML = text + "is clicked"
});
}

//////////////////////////  js class-44:play audio /////////////////////////////
// for (var i=0; i<3; i++){
//                     var myVar = document.querySelectorAll(".mybutton")[i];
// myVar.addEventListener("click", function(){
//                   var text=this.innerHTML;
//                   console.log(text);  
//                   switch(text){
//                     case "a":
//                     var audio = new audio
//                   }
// });
// }

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
