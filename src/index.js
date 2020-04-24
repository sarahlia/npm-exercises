const $ = require('jquery');

const sayHello = () => console.log('hello');
sayHello();

$(document).ready( () => {
    $('body').html( 'This should show up on the page' );
});

