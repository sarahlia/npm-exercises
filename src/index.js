const $ = require('jquery');

// using module.exports & require
// const info = require('./say-hello');

//using export default & import
import mixed from './say-hello';

// import {wow, meh} from './say-hello';

const sayHello = () => console.log('hello there');
sayHello();

$(document).ready( () => {
    $('body').html("Should be on our page.");

    // console.log(info.whichSideOfTheForce);
    // console.log(info.goat);
    // console.log(info.someNumber);

    console.log(mixed.multiply(5, 3));
    console.log(mixed.add(4, 7));
    console.log(mixed.msg());

    // console.log(wow(7, 6));
    // console.log(meh(7, 6));

});

