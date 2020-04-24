const $ = require('jquery');

//using export default & import
import mixed from './say-hello';


const sayHello = () => console.log('hello');
sayHello();

$(document).ready( () => {
    $('body').html("Should see this on the page.");

    console.log(mixed.multiply(5, 3));
    console.log(mixed.add(4, 7));
    console.log(mixed.msg());
});

