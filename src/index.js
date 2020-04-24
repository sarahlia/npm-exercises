const $ = require('jquery');

const sayHello = () => console.log('hello');
sayHello();

$(document).ready( () => {
    $('body').html("Should see this on the page.");
});

