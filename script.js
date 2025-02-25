console.log('Welcome!');

var num = 10;
var string = 'Hello World! (Don\'t click me)';
var isRad = true;

console.log('10 * 2 = ' + (num*2));

document.getElementById('jsTest').innerHTML = string;
document.getElementById('jsTest').addEventListener('click', function() {
    alert('Click!');
});