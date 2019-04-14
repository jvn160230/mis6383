const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

console.log('Starting Classwork 4 \n');

const fs = require('fs');

var fileString = fs.readFileSync('departments.json');
console.log('departments.json has been read \n');
var myJSON = JSON.parse(fileString);
console.log('departments.json strings have been parsed into objects:');
console.log(myJSON);

var myString = JSON.stringify(myJSON);
fs.writeFileSync('myString.txt', myString)
console.log('\nJSON objects have been stringified and written to myString.txt');

console.log('\nClasswork 4 terminated');
