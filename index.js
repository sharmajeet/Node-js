const fs = require("fs");
//fs stands for file system and we use file system modules hear.
// fs.writeFile("message","Hello from node.js",(err)=>{
//     if (err) throw err;
//     console.log("The file has been saved!");
// });
//creating read module for reading data from file.. we use 'utf8' for data decoding of file.
fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// use of silly name package hear.
const generatename = require("sillyname");
var sillyname = generatename();
console.log(`My name is ${sillyname}.`);

// useing randome-ease package for generating randome numbers
const randomeNo = require("random-ease");
console.log(randomeNo.generateNumber(10, 20));
console.log(randomeNo.generateJobTitle(10, 100));
console.log(randomeNo.generateCompanyName(13, 112));
console.log(randomeNo.generateCurrencyCode(3));

// practice---superheroes package
const myhero = require('superheroes');
console.log(`My Super Hero Name Is : ${myhero.random()}`);