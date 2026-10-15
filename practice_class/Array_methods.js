// Arrays


// let mark = [97, 83, 75, 67, 89, 96];
// console.log(mark);
// console.log(mark.length);


// let heroes = ["iron man", "spider man", "super man", "black panther", "ant man"];
// console.log(heroes);



// looping over an Array
//for loop


// let heroes = ["iron man", "spider man", "super man", "black panther", "ant man"];

// for(let idx = 0; idx < heroes.length; idx++) {
//     console.log(heroes[idx]);
// }




// let heroes = ["iron man", "spider man", "super man", "black panther", "ant man"];

// for(let idx = 1; idx <= heroes.length; idx++) {
//     console.log(heroes[idx-1]);
// }





// let heroes = ["iron man", "spider man", "super man", "black panther", "ant man"];

// for(let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i]);
// }





// for of loop



// let heroes = ["iron man", "spider man", "super man", "black panther", "ant man"];

// for(let el of heroes) {
//     console.log(el);
// }





// let heroes = ["iron man", "spider man", "super man", "black panther", "ant man"];

// for(let hero of heroes) {
//     console.log(hero);
// }






// let cities = ["joypuhat", "akkelpur", "naogaon", "bogura", "rajshahi"];

// for(let city of cities) {
//     console.log(city.toUpperCase());
// }




// Practice question


// let mark = [78, 56, 79, 97, 93];

// let sum = 0;

// for(let val of mark) {
//     sum = sum + val;
// }

// console.log(sum);








// extra



// let mark = [78, 56, 79, 97, 93];

// let sum = 0;

// for(let val of mark) {
//     sum += val;
// }

// console.log(sum);


// let avg = sum / mark.length;
// console.log(`avg mark of the class = ${avg}`);





// practice question 2


// let item = [250, 645, 300, 900, 50];

// let idx = 0;
// for(let val of item) {
//     console.log(`value at index ${idx} = ${val}`);
//     item++;
// }





// let item = [250, 645, 300, 900, 50];

// let i = 0;
// for(let val of item) {
//     let offer = val / 10;
//     item[i] = item[i] - offer;
//     console.log(`value after offer = ${item[i]}`);
//     i++;
// }






// let item = [250, 645, 300, 900, 50];

// for(let i = 0; i < item.length; i++) {
//     let offer = item[i] / 10;
//     item[i] -= offer;
// }

// console.log(item);





// Array methods


//push methods

// let foodItem = ["banana", "litchi", "tomato", "potato"];

// foodItem.push("chips", "burgar");
// console.log(foodItem);


//pop methods



// let foodItem = ["banana", "litchi", "tomato", "potato"];

// foodItem.pop();
// console.log(foodItem);







// let foodItem = ["banana", "litchi", "tomato", "potato"];

// let deletedItem = foodItem.pop();
// console.log(foodItem);
// console.log("deleted item = ", deletedItem);





//toString methods




// let foodItem = ["banana", "litchi", "tomato", "potato"];

// console.log(foodItem);
// console.log(foodItem.toString());
// console.log(foodItem);




// let mark = [65, 78, 90, 54, 77];

// console.log(mark.toString());


// concat methods

// let marvel_heroes = ["thor", "spiderman", "ironman"];
// let dc_heroes = ["superman", "batman"];

// let heroes = marvel_heroes.concat(dc_heroes);
// console.log(heroes);








// let marvel_heroes = ["thor", "spiderman", "ironman"];
// let dc_heroes = ["superman", "batman"];
// let indian_heroes = ["saruk khan", "saman khan"];

// let heroes = marvel_heroes.concat(dc_heroes, indian_heroes);
// console.log(heroes);





// ushift methods



// let marvel_heroes = ["thor", "spiderman", "ironman"];

// marvel_heroes.unshift("batman");




// shift methods


// let marvel_heroes = ["thor", "spiderman", "ironman"];

// let  val = marvel_heroes.shift();
// console.log("deleted = ", val);






// slice methods



// let marvel_heroes = ["thor", "spiderman", "ironman", "doctor", "diver"];

// console.log(marvel_heroes);

// console.log(marvel_heroes.slice(1, 4));
// console.log(marvel_heroes.slice(1));



// splice methods


// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// arr.splice(2, 2, 101, 102);

//add eliment
// arr.splice(2, 0, 102);

//delete eliment
// arr.splice(3, 1);

//replace eliment
// arr.splice(3, 1, 107);




// practice question


// let companies = ["Blomberg", "Microsoft", "uber", "Google", "IBM", "netflix"];

// // companies.shift();
// // companies.splice(2, 1, "Ola");
// companies.push("amazon");