const $ = require('jquery');

// using module.exports & require
const info = require('./say-hello');

//using export default & import
// import mixed from './say-hello';

console.log(info.whichSideOfTheForce);
console.log(info.goat);
console.log(info.someNumber);

const sayHello = () => console.log('hello');
sayHello();

$(document).ready( () => {
    $('body').html("Should see this on the page.");

    // console.log(mixed.multiply(5, 3));
    // console.log(mixed.add(4, 7));
    // console.log(mixed.msg());


});

