// Event in js




// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
// };





// extra


// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };







// let box = document.querySelector("#box");

// box.onmouseover = () => {
//     console.log("box was clicked");
// };


// Event object





// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//     console.log(e);
    
// };

// let box = document.querySelector("#box");

// box.onmouseover = () => {
//     console.log("you are inside div");
// };










// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
    
// };

// let box = document.querySelector("#box");

// box.onmouseover = () => {
//     console.log("you are inside div");
// };










// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target); 
//     console.log(evt.clientX, evt.clientY);   
// };

// let box = document.querySelector("#box");

// box.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target); 
//     console.log(evt.clientX, evt.clientY);
// };





// Event listeners



// addEventlistener


// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked");
// });

// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked-handler2");
// });







// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) => {
//     console.log("btn1 was clicked");
//     console.log(evt.type);
//     console.log(evt.target);
// });

// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked-handler2");
// });





// removeEventlistener



// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked-handler1");
// });

// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked-handler2");
// });

// const handler3 = () => {
//     console.log("btn1 was clicked-handler3");
// };

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked-handler4");
// });


// btn1.removeEventListener("click", handler3);






// practice question




// let mode = document.querySelector("#mode");
// let currMode = "light";

// mode.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }

//     console.log(currMode);
// });







// extra




// let mode = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light";

// mode.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else {
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }

//     console.log(currMode);
// });