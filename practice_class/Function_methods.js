// Functions & methods

// function myFunction() {
//     console.log("akash majumder");
//     console.log("i am learning js");
// }

// myFunction();
// myFunction();





// function myFunction(msg) {
//     console.log(msg);
// }

// myFunction("i love js");




// function sum(x, y) {
//     console.log(x + y);
// }

// sum(58, 48);





// function sum(x, y) {
//     s = x +y;
//     return s;
// }

// let val = sum(2, 4);
// console.log(val);




// // sum function
// function sum(a, b) {
//     console.log(a+b);
// }


// // multiplication function
// function mul(a, b) {
//     console.log(a*b);
// }


// Arrow function



// const arrowFunction = (a, b) => {
//     console.log(a + b);
// }

// arrowFunction(3, 6);



// const mulFunction = (a, b) => {
//     console.log(a * b);
// }

// mulFunction(3, 6);



// const dividedFunction = (a, b) => {
//     console.log(a / b);
// }

// dividedFunction(10, 2); 




// const mulFunction = (a, b) => {
//     return a * b;
// }

// let mul = mulFunction(3, 6);
// console.log(mul);





// practice question


// function countVowels (str) {
//     let count = 0;
//     for(const char of str) {
//       if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         count++;
//       }  
//     }
//     return count;//console.log(count);
// }




// question 2



// const countVow = (str) => {
//     let count = 0;
//     for(const char of str) {
//       if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         count++;
//       }  
//     }
//     return count;//console.log(count);
// }






// forEach loop in Arrays


// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printVal(val) {
//     console.log(val);
// });




// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val) => {
//     console.log(val);
// });




// let arr = ["akash", "oyshi"];

// arr.forEach((val) => {
//     console.log(val);
// });







// let arr = ["akash", "oyshi"];

// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// });







// let arr = ["akash", "oyshi", "kumar"];

// arr.forEach((val, idx) => {
//     console.log(val.toUpperCase(), idx);
// });






// let arr = ["akash", "oyshi", "kumar"];

// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// });




// practice question



// let nums = [3, 4, 5, 6, 7, 8];

// nums.forEach((num) => {
//     console.log(num*num);// num**2
// });




// extra 






// let nums = [3, 4, 5, 6, 7, 8];

// let calcSquare = ((num) => {
//     console.log(num*num);
// });

// nums.forEach(calcSquare);







// Some more arrays methods


// map methods




// let nums = [3, 4, 5, 6, 7, 8];

// nums.map((val) => {
//     console.log(val);
// });






// let nums = [3, 4, 5, 6, 7, 8];

// let newNums = nums.map((val) => {
//     return val;
// });

// console.log(newNums);





// let nums = [3, 4, 5, 6, 7, 8];

// let newArr = nums.map((val) => {
//     return val * val;
// });

// console.log(newArr);







// let nums = [3, 4, 5, 6, 7, 8];

// let newArr = nums.map((val) => {
//     return val * 2;
// });

// console.log(newArr);




// filter methods



// let arr = [3, 4, 5, 6, 7, 8];

// let newArr = arr.filter((val)=> {
//     return val % 2 === 0;
// });

// console.log(newArr);







// let arr = [3, 4, 5, 6, 7, 8];

// let newArr = arr.filter((val)=> {
//     return val % 2 !== 0;
// });

// console.log(newArr);




// let arr = [3, 4, 5, 6, 7, 8];

// let newArr = arr.filter((val)=> {
//     return val > 4;
// });

// console.log(newArr);






// Reduce methods



// let arr = [1, 2, 3, 4, 5, 6, 7];

// const output = arr.reduce((res, curr) => {
//     return res+ curr;
// });

// console.log(output);




// lurgest value


// let arr = [9, 4, 5, 6];

// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr; 
// });

// console.log(output);





// let arr = [9, 4, 5, 6, 101];

// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr; 
// });

// console.log(output);





// low value



// let arr = [9, 4, 5, 6, 101];

// const output = arr.reduce((prev, curr) => {
//     return prev < curr ? prev : curr; 
// });

// console.log(output);





// Practice question


// let marks = [98, 64, 75, 90, 93, 78];

// const newMarks = marks.filter((val) => {
//     return val > 90;
// });

// console.log(newMarks);





// 2nd question


// let n = prompt("enter a number");

// let arr = [];

// for( let i = 1; i <= n; i++) {
//     arr[i - 1] = i; 
// }

// console.log(arr);












