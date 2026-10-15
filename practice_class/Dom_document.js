// Dom-document object model


// console.dir(document.body);
// console.log(document.body);


// document.body.childNodes[1].innertext = "abcd";



// Dom manipulation

// #id

// let heading = document.getElementById("heading");
// console.dir(heading);
// console.log(heading);




// .class

// let headings = document.getElementsByClassName("hed");
// console.dir(headings);
// console.log(headings);




// tag

// let paras = document.getElementsByTagName("p");
// console.dir(paras);





// Query selector


// let fastElement = document.querySelector("p");
// console.dir(fastElement);


// let allElement = document.querySelectorAll("p");
// console.dir(allElement);



// propertice

// let fastEl = document.querySelector("#button");
// console.dir(fastEl);
// console.log(fastEl.tagName);





// Practice question


// let h2 = document.querySelector("h2");

// console.dir(h2);

// h2.innerText = h2.innerText + " from apna collage";





// question no-2


// let divs = document.querySelectorAll(".box");

// console.log(divs);



// divs[0].innerText = "new unic value 1";
// divs[1].innerText = "new unic value 2";
// divs[2].innerText = "new unic value 3";




// loop babobar kore


// let idx = 1;
// for(div of divs) {
//     div.innerText = `new unic value ${idx}`;
//     idx++;
// }





// attribute


// get  attribute



// let div = document.querySelector("div");

// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);








// let para = document.querySelector("p");

// console.log(para.getAttribute("class"));




// set attribute



// let para = document.querySelector("p");

// console.log(para.setAttribute("class", "newClass"));



// style



// let div = document.querySelector("div");

// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
// // div.style.visibility = "hidden";
// div.style.fontSize = "1.2rem";

// div.innerText = "hello!"



// let newBtn = document.createElement("button");
// newBtn.innerText = "cleck me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// // div.append(newBtn);
// // div.prepend(newBtn);
// // div.before(newBtn);
// div.after(newBtn);







// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>hi i am new</i>";

// // console.log(newHeading);

// document.querySelector("body").prepend(newHeading);







// Delete eliment


// let para = document.querySelector("p");
// para.remove();




// practice question




// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// // let body = document.querySelector("body");
// // body.prepend(newBtn); 

// // extra
// document.querySelector("body").prepend(newBtn);




// question 2


// let para = document.querySelector("p");

// para.classList.add("newClass");
// para.classList.remove("newClass");