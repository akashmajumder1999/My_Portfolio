// classes & Object



// Object


// const student = {
//     fullName : "akash kumar",
//     age : 27,
//     marks : 94.4,
//     printMarks : function () {
//         console.log("marks = ", this.marks);
//     },
// };






// const employee = {
//     calcTax() {
//         console.log("taxs rate in 10%");
//     },
// };





// const employee = {
//     calcTax1() {
//         console.log("taxs rate in 10%");
//     },
//     calcTax2 : function() {
//        console.log("taxs rate in 10%"); 
//     },
// };





// const employee = {
//     calcTax() {
//         console.log("taxs rate in 10%");
//     },
// };

// const karanArjun = {
//     salary : 50000,
// };

// const karanArjun1 = {
//     salary : 50000,
// };

// const karanArjun2 = {
//     salary : 50000,
// };

// const karanArjun3 = {
//     salary : 50000,
// };

// const karanArjun4 = {
//     salary : 50000,
// };

// karanArjun.__proto__ = employee;

// karanArjun1.__proto__ = employee;

// karanArjun2.__proto__ = employee;

// karanArjun3.__proto__ = employee;

// karanArjun4.__proto__ = employee;









// const employee = {
//     calcTax() {
//         console.log("taxs rate in 10%");
//     },
// };

// const karanArjun = {
//     salary : 50000,
//     calcTax() {
//         console.log("taxs rate is 20%");
//     },
// };

//  karanArjun.__proto__ = employee;





// class in js




// class toyotaCar {
//     start () {
//         console.log("start");
//     }

//     stop () {
//         console.log("stop");
//     }

//     setBrand () {
//         this.brandName = this.brand;
//     }
// }

// let fortuner = new toyotaCar();
// fortuner.setBrand("fortuner");
// let lexus = new toyotaCar();
// lexus.setBrand("lexus");





// constructor methods



// class toyotaCar {
//     constructor(brand) {
//         console.log("creating new object");
//         this.brand = brand;
//     }
//     start () {
//         console.log("start");
//     }

//     stop () {
//         console.log("stop");
//     }
// }

// let fortuner = new toyotaCar("fortuner");
// let lexus = new toyotaCar("lexus");






// class toyotaCar {
//     constructor(brand, mileage) {
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start () {
//         console.log("start");
//     }

//     stop () {
//         console.log("stop");
//     }
// }

// let fortuner = new toyotaCar("fortuner", 12);
// console.log(fortuner);
// let lexus = new toyotaCar("lexus", 10);
// console.log(lexus);





// Inheritance in js



 

// class parent {
//     hello () {
//         console.log("hello")
//     }
// }

// class child extends parent {}

// let obj = new child();







// class person {
//     eat () {
//         console.log("eat");
//     }

//     sleep () {
//         console.log("sleep");
//     }
// }

// class Enginner extends person {
//     work () {
//         console.log("slove problem, build sometimes");
//     }
// }

// class doctor extends person {
//     work ()
//      {
//         console.log("treat patients");
//      }
// }


// let akashObj = new Enginner();







// class person {
//     eat () {
//         console.log("eat");
//     }

//     sleep () {
//         console.log("sleep");
//     }

//     work () {
//         console.log("do nothing");
//     }
// }

// class Enginner extends person {
//     work () {
//         console.log("slove problem, build sometimes");
//     }
// }

// class doctor extends person {
//     work ()
//      {
//         console.log("treat patients");
//      }
// }


// let akashObj = new Enginner();







// super keyword







// class person {
//     constructor () {
//         console.log("enter parent constructor");
//         this.species = "home sapiens";
//     }

//     eat () {
//         console.log("eat");
//     }
// }    

// class Enginner extends person {
//     constructor (branch) {
//         console.log("enter chiled constructor");
//         super();// to invoke parent class constructor
//         this.branch = branch;
//         console.log("exit constructor");
//     }

//     work () {
//         console.log("slove problem, build sometimes");
//     }
// }


// let engObj = new Enginner("chemical engg");











// class person {
//     constructor (name) {
//         this.species = "home sapiens";
//         this.name = name ;
//     }

//     eat () {
//         console.log("eat");
//     }
// }    

// class Enginner extends person {
//     constructor (name) {
//         super(name);
//     }

//     work () {
//         console.log("slove problem, build sometimes");
//     }
// }


// let engObj = new Enginner("akash");









// class person {
//     constructor (name) {
//         this.species = "home sapiens";
//         this.name = name ;
//     }

//     eat () {
//         console.log("eat");
//     }
// }    

// class Enginner extends person {
//     constructor (name) {
//         super(name);
//     }

//     work () {
//         super.eat();
//         console.log("slove problem, build sometimes");
//     }
// }


// let engObj = new Enginner("akash");






// practice question




// let DATA = "secret information";

// class user {
//     constructor (name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData () {
//         console.log("data = ", DATA);
//     }
// }

// let student1 = new user("akash", "abc@gamil.com");
// let student2 = new user("oyshi mondol", "abc@gmail.com");







// question 2



// let DATA = "secret information";

// class user {
//     constructor (name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData () {
//         console.log("data = ", DATA);
//     }
// }


// class Admin extends user {
//     constructor(name, email){
//         super(name, email);
//     }
//     editData () {
//         DATA = "some new value";
//     }
// }

// let student1 = new user("akash", "abc@gamil.com");
// let student2 = new user("oyshi mondol", "abc@gmail.com");

// let teacher1 = new user("dom", "dom@gmail.com");

// let admin1 = new Admin("admin", "admin@gmail.com");