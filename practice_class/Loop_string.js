//Loop & String


// For loop

// for(let i = 1; i <= 5; i ++ ) {
//     console.log("akash amjumder");
// }

// console.log("loop ended.");




// for(let count = 1; count <= 50; count ++ ) {
//     console.log("oyshi mondol.");
// }

// console.log("loop ended.");




// let sum = 0;

// for(let i = 1; i <= 5; i ++) {
//     sum = sum + i;
// }

// console.log("sum = ", sum);
// console.log("loop ended.");




// let sum = 0;
// let n = 7;

// for(let i = 1; i <= n; i ++) {
//     sum = sum + i;
// }

// console.log("sum = ", sum);
// console.log("loop ended.");




// for(let i = 1; i <= 5; i ++ ) {
//     console.log("i = ", i);
// }

// // console.log(i);




// for(var i = 1; i <= 5; i ++ ) {
//     console.log("i = ", i);
// }

// console.log(i);





// Infinite lopp- ja kokhono calano hobe na(dengurs!)



// for(let i = 1; i >= 0; i ++ ) {
//     console.log("i = ", i);
// }






// While loop




// let i = 1;
// while(i <= 5) {
//     console.log("i = ", i);
//     i++;
// }


// let i = 1;
// while(i <= 10) {
//     console.log("akash majumder");
//     i ++;
// }





// Do-while loop


// let i = 20;
// do{
//     console.log("akash");
//     i ++;
// } while (i <= 10);





// let i = 1;
// do{
//     console.log("i = ", i);
//     i ++;
// } while (i <= 10);



// For-of loop---string and arrays er opor kaj kore



// let str = "akash majumder";

// for(let val of str) {
//     console.log("val = ", val);
// }





// let str = "akash majumder";

// for(let i of str) {
//     console.log("i = ", i);
// }






// let str = "akash majumder";

// let lenth = 0;
// for(let i of str) {
//     console.log("i = ", i);
//     lenth++;
// }

// console.log("string of lenth = ", lenth);




// For-in loop---object & arrays a babohar kora hoi





// let student = {
//     fullName : "akash",
//     age : 27,
//     cgpa : 8.2,
//     isPass : true,
// }

// for (let key in student) {
//     console.log("key = ", key);
// }






// let student = {
//     fullName : "akash",
//     age : 27,
//     cgpa : 8.2,
//     isPass : true,
// }

// for (let key in student) {
//     console.log("key = ", key, "value = ", [key]);
// }






// let student = {
//     fullName : "akash",
//     age : 27,
//     cgpa : 8.2,
//     isPass : true,
// }

// for (let i in student) {
//     console.log("i = ", i, "value = ", [i]);
// }







// Practice question=event & odd



// for(num = 0; num <= 100; num++) {
//     if(num%2 === 0) {
//         console.log("num = ", num);
//     }
// }



// for(num = 0; num <= 100; num++) {
//     if(num%2 !== 0) {
//         console.log("num = ", num);
//     }
// }



// Practice question



// let gameNum = 25;
// let userNum = prompt("guess the game number");

// while (userNum != gameNum) {
//     userNum = prompt("you enter the wrong number. Guess again : ");
// }

// console.log("congratulations, you entered the right number.");



// String


// let str = "akash kumar";
// let str2 = "oyshi mondol";

// console.log(str[2]);
// console.log(str2[4]);






// let specialStr = `this is a template literal`;
// console.log(specialStr);




// let obj = {
//     item : "pen",
//     price : 10,
// };

// console.log(`the cost of ${obj.item} is ${obj.price} taka`);
// console.log(obj);
// console.log("the cost of", obj.item, "is", obj.price);





// console.log("akash\nkumar");
// console.log("oyshi\tmondol");





// let str = ("akash\nkumar");

// console.log(str.length);





// let str = ("akash kumar");

// str = str.toUpperCase();
// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);





// let str = ("AKASH KUMAR");

// str = str.toLowerCase();
// console.log(str);






// let str = ("akash kumar");

// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);






// let str = ("AKASH KUMAR");

// newStr = str.toLowerCase();
// console.log(str);
// console.log(newStr);




// let str = "       akash kumar in    java     ";
// console.log(str.trim());





// let str = "akash kumar";

// console.log(str.slice(0, 3));
// console.log(str.slice(0));
// console.log(str.slice());






// let str1 = "akash";
// let str2 = "oyshi";

// let newStr = str1.concat(str2);
// console.log(newStr);
// console.log(str1 + str2);





// let str = "hello";

// console.log(str.replace("h", "y"));
// console.log(str.replace("ell", "ami"));
// console.log(str.replace("hello", "wellcome"));






// let str = "i love js";

// console.log(str.charAt(0));
// console.log(str.charAt(1));
// console.log(str.charAt(2));
// console.log(str.charAt());