//  onclick='document.getElementById("chi").innerText="what is my name?"'

//  var general
//  console.log(general);  
//  console.log(typeof general)
//  general =  4
//  console.log( general)
//  console.log(typeof general)
//   general="3"
//   console.log(typeof general)
//    general = true
//    console.log(typeof general)
//   general = null
//   console.log(typeof general)
// general = [ 1, 2, 3, 4, 5,6]
// console.log(general)
// console.log(typeof general)
//    console.log(general.length)

//     // num1 =prompt("enter some value")
//     // console.log( num1+9)

//     // console.log(parseInt(num1) + 6)

//     // console.log(typeof prompt)
//  console.log( 4 +"6")
// console.log (5 + "the       ")
//  var the
//  console.log(typeof the)

//   the = 1
//   console.log( the)

//   console.log(4+the)

// //   alert( "this is an alert")

//   // operators in js
//    //arithmetic operators
//    console.log(2-1)
// var diff= 3-1
//  // increment and decrement operators
//  diff++
//  console.log(diff)
// console.log( "diff:" + diff)
// var add = 4+3
// console.log("add:"+ add)
// var mult = 4* 5
// console.log("mult:"+ mult)
//  var mod = 6%4
//  console.log("mod:"+ mod)
//  var div = 9/3
//  console.log("div:"+ div)

//  // assignment operators
//   s = 4
//    s+= 3
//    console.log( s)

//    x= 3
//    x*=4
//    console.log( x)

//    // comparison operators

//    s1= 5
//    s2= "3"
//    if(s1== s2){
//       console.log("if part")
//    }
      
   
//    else{
//     console.log("else part")

//     }

//     //bolean operators
//    if(!(s1=s2) && !(s1===s2)){
//     console.log("if part")
//    }

//    else{
//     console.log("else part")
//    }

//    //ternary operators

//    console.log(  1<2 ? true:false)
   // in ternary operators what  the browser follows is the order in which "true or false" appears  after the "?".
    // for instance in this example, "false" will be shown in the browser be the statement is true . unless otherwise "true"
    // will be shown



    //js switch statement
// var weight= parseFloat(prompt("Enter your age"))

// switch(weight) 

// {
//     case 1: document.write(" your weight is one")
//                  break
//     case 2: document.write("your weight is two")
//                  break
//     case 3: document.write("your weight is three")
//                  break
//      default:document.write(" your weight is not 1 2 ")

// }


// var age = parseInt(prompt("Enter your age"));
// age = parseInt(age);
// if(age > 60){
//     document.write("check your sugar and salt intake")
// }

// else if(age > 30){
//     document.write("check what you take and maintain your health")
// }

// else{
//     document.write("Enjoy your youthful age")
// }

//   const date = ("sunday","monday"," tuesday","wednesday","thursday","friday","saturday")
// switch ( date().getDate()){
//     case 0: day = sunday;
//     case 1:
//          day  = "monday";
//          break
//     case 2: day ="tuesday";
//     break
//     case 3: day = "wednesday";
//     break
//     case 4: day ="thursday";
//     break
//      case 5: day = "friday";
//      break
//      case 6: day =" saturday";
// }


// string method
//  myVariable = ("mathematics")
//  console.log(myVariable.length)

//  console.log("i enjoy coding".length)
//  console.log("this is my family".length)
//  console.log(myVariable.charAt(3))
//  console.log(myVariable.charAt(8))
//  console.log(myVariable.lastIndexOf("ics"))
// console.log(myVariable.slice(0,3))
// console.log(myVariable.toUpperCase())
// console.log(myVariable.toLowerCase())
// console.log(myVariable.includes("math"))
// console.log(myVariable.slice(2, 9)
// +"****"+myVariable.slice(-3))
// console.log(myVariable.split("1","6"))

 arr = [23, "emeka", 45]
 console.log(arr)
come = arr.splice(1,1)
console.log(arr)
console.log(come)

 // object; gives a mmore detailed information about a particular an item. Gives a more detailed information about a datatype
 // to access the cont
 const obj = {name:"Emeka", Age:23, own_house: true, car:["toyota", "benz"], times:function(num){
   return num*2000
 }}
  console.log(obj)
   let name= obj.name
 console.log(name)
   let house= obj.own_house
   console.log(house)
   console.log(obj.own_house)
   console.log(obj.car[1])

   console.log(obj["Age"])
   console.log(obj["own_house"])
   // method is a function declared inside an object

   console.log(obj.times(5))

   // ADDING A CONTENT TO AN OBJECT
obj.Age=58
console.log(obj)
 obj.networth  ="$200"
 console.log(obj)
 // object do not have a method they take the method we created

  delete obj.Age
  console.log(obj)     


  // LOOP: USE  TO REPEAT STH OVER AND OVER AGAIN
    for(let n = 1; n<21; n++){
      console.log( n,"hello world")
    }
    // for(initial value, condition)

    // using loop to create a multilication table


 for(let m = 1; m<21; m++){
      console.log( m +"X"+ 2 + "=" + m *2)
    }

    let str =  { name:"emmanunel", color:"blue",}
      for(let n in str){
        console.log(str[n])
      }
      for(let n in str){
        console.log(n)
      }
      let fruits = ["apple", "banana", "mango"];

for (let n of fruits) {
  console.log(n);
}

    // for in or for of: for in return the index of the character, while for of returns the character itse
   
 //while loop
    let x2= 10;
    while(x2 <=20){
      console.log("hello",x2)
      x2+=2
    }

      // in do while loop we want the code to run first at least once before repeating.
      do{
        console.log("come",x2)
        x2 += 2
      }while(x2<=10)


        // btnClick.addEventListener("click",function(){
        //   let inputVal = data.value
        //   if (inputVal >=18 && inputVal<=40){
        //     result.innerHTML ="YOU ARE QUALIFIED"
        //     result.style.color="green";
        //     result.style.border="1px solid green"
        //   }
        //   else{
        //     result
        //   }
        // })
        let result = document.getElementById("res");
let data = document.getElementById("ip");
let btnclick = document.getElementById("btn");
console.log(data.value)

btnclick.addEventListener("click",function(){
  let inputvalue = data.value
  if (inputvalue < 18){
    // location.href ="index.html"
    result.innerText = " yups! you are underaged but join the teenage group"
    result.style.color = "blue";
    result.style.border = "1px solid blue"
    result.style.borderRadius="2rem"
    result.style.padding = "7px"
    result.style.fontSize ="15px"

    //redirection time
     setTimeout(() => {
        location.href = "index.html";
    }, 3000);

  }
  else if (inputvalue >= 18 && inputvalue <= 40){
    result.innerText = " You! comgratulations you are qualified"
    result.style.color = "green";
    result.style.border = "1px solid green"
      result.style.borderRadius="2rem"
    result.style.padding = "7px"
    result.style.fontSize ="15px"

    //redirection time
    setTimeout(()=>{
      location.href="index.html"
    }, 3000)
  }
  else{
    result.innerText = "not qualified"
    result.style.color = "red";
    result.style.border = "1px solid red"
      result.style.borderRadius="2rem"
    result.style.padding = "7px"
    result.style.fontSize ="15px"
  }
})