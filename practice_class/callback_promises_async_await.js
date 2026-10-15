// function hello () {
//     console.log("hello");
// }

// setTimeout(hello, 4000);




// extra




// setTimeout(() => {
//     console.log("hello");
// }, 4000);







// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// console.log("three");
// console.log("four");






// call back


// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 4, sum);








// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 4, (a, b) => {
//     console.log(a + b);
// });







// const hello = () => {
//     console.log("hello");
// }

// setTimeout(hello, 3000);





// callback hell
// nesting



// let age = 19;
// if (age >= 18) {
//     if(age >= 60) {
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");
// }






// for( let i = 1; i < 5; i++) {
//     for(let j = 1; j < 5; j++) {
//         console.log(j);
//     }
// }





// just consept


// for( let i = 0; i < 5; i++) {
//     let str = "";
//     for(let j = 0; j < 5; j++) {
//         str = str + j;
//     }
//     console.log(i, str);
// }







//






// function getDeta (detaId) {
//     setTimeout(() => {
//         console.log("data", detaId);
//     }, 4000);
// }









// function getDeta (detaId) {
//     setTimeout(() => {
//         console.log("data", detaId);
//     }, 4000);
// }

// getDeta(1);
// getDeta(2);
// getDeta(3);







// function getDeta (detaId, getNextDeta) {
//     setTimeout(() => {
//         console.log("data", detaId);
//         if(getNextDeta) {
//             getNextDeta();
//         }
//     }, 4000);
// }

// getDeta(1, () => {//callback
//     getDeta(2);
// });






// function getDeta (detaId, getNextDeta) {
//     setTimeout(() => {
//         console.log("data", detaId);
//         if(getNextDeta) {
//             getNextDeta();
//         }
//     }, 4000);
// }

// getDeta(1, () => {
//     getDeta(2, () => {
//         getDeta(3);
//     });
// });









// function getDeta (detaId, getNextDeta) {
//     setTimeout(() => {
//         console.log("data", detaId);
//         if(getNextDeta) {
//             getNextDeta();
//         }
//     }, 4000);
// }

// // callback hell
// getDeta(1, () => {
//     console.log("get Deta2 getting....");
//     getDeta(2, () => {
//         console.log("get Deta3 getting....");
//         getDeta(3, () => {
//             console.log("get Deta4 getting....");
//             getDeta(4);
//         });
//     });
// });






// promises







// let promise = new Promise((resolve, reject) => {
//     console.log("i am promise");
// });




// let promise = new Promise((resolve, reject) => {
//     console.log("i am promise");
//     resolve(123);
// });





// let promise = new Promise((resolve, reject) => {
//     console.log("i am promise");
//     resolve("sucses");
// });





// let promise = new Promise((resolve, reject) => {
//     console.log("i am promise");
//     reject("some error");
// });







// let promise = new Promise((resolve, reject) => {
//     console.log("i am promise");
//     reject("some error occurred");
// });












// function getData(dataId, getNextData) {
//     return new promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 3000);
//     });
// }









// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am promise");
//         resolve("success");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promiss fillfil");
// });











// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am promise");
//         // resolve("success");
//         reject("error");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promiss fillfil");
// });

// promise.catch(() => {
//     console.log("rejected");
// });







// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am promise");
//         // resolve("success");
//         reject("network error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promiss fillfil", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });








// promise chain





// function asyncFunc () {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some details");
//             resolve("success");
//         },3000);
//     });
// }

// console.log("fectch details");
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res);
// });









// function asyncFunc1 () {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         },3000);
//     });
// }

// function asyncFunc2 () {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         },5000);
//     });
// }

// console.log("fectch data1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("fectch data2");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });












// function asyncFunc1 () {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         },3000);
//     });
// }

// function asyncFunc2 () {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         },5000);
//     });
// }

// // console.log("fectch data1....");
// // let p1 = asyncFunc1();
// // p1.then((res) => {
// //     console.log("fectch data2...");
// //     let p2 = asyncFunc2();
// //     p2.then((res) =>{});
// // });


// // console.log("fectch data1....");
// // asyncFunc1().then((res) => {
// //     console.log("fectch data2...");
// //     asyncFunc2().then((res) => {});
// // });


// // let p1 = asyncFunc1().then((res) => {});
// // let p2 = asyncFunc2().then((res) => {});


// //  asyncFunc1().then((res) => {
// //     asyncFunc2().then((res) => {});
// //  });









// function getData (dataId, getNextData) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//             if(getNextData) {
//                 getNextData();
//             }
//         },3000);
//     });
// }

// let p1 = getData(1);
// p1.then((res) => {
//     console.log(res);
// });











// function getData (dataId) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1", dataId);
//             resolve("success");
//         },3000);
//     });
// }

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then(() => {
//         console.log(res);
//     });
// });







// function getData (dataId) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1", dataId);
//             resolve("success");
//         },3000);
//     });
// }
// //promise chain
// getData(1).then((res) => {
//     return getData(2);
// })
// .then((res) => {
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// });







// Async-Await





//  async function hello () {
//     console.log("hello");
// };



// function api () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData () {
//     await api();
// }








// function api () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData () {
//     await api();
//     await api();
//     await api();
// }








// function getData (dataId) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1", dataId);
//             resolve("success");
//         },3000);
//     });
// }

// async function getAllData () {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }


// // async function getAllData () {
// //     console.log("get data1....");
// //     await getData(1);
// //     console.log("get data2....");
// //     await getData(2);
// //     console.log("get data3....");
// //     await getData(3);
// //     console.log("get data4....");
// //     await getData(4);
// //     console.log("get data5....");
// //     await getData(5);
// //     console.log("get data6....");
// //     await getData(6);
// //     console.log("get data7....");
// //     await getData(7);
// // }


// (async function () {
//     console.log("get data1....");
//     await getData(1);
//     console.log("get data2....");
//     await getData(2);
//     console.log("get data3....");
//     await getData(3);
//     console.log("get data4....");
//     await getData(4);
//     console.log("get data5....");
//     await getData(5);
//     console.log("get data6....");
//     await getData(6);
//     console.log("get data7....");
//     await getData(7);
// })();