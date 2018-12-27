var myHeading = document.querySelector('h1');//object
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
        
      myImage.setAttribute ('src','images/bloom-blossom-dew-56866.jpg');
    }
};
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
// Basically, anything. Everything in JavaScript is an object, and can be stored in a variable. Keep this in mind as you learn.
