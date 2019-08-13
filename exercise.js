// Exercise 1
// The below function does not work. The variable twoPlusTwo gets set to
// undefined. Refactor the function to make it work.

function addNumbers(numberA,numberB) {
  return numberA + numberB ;
}

var twoPlusTwo = addNumbers(2,2);

console.log(twoPlusTwo);

// Exercise 2
// Write a function called yell that logs out an uppercase version of a string.

function yell(string){
    console.log(string.toUpperCase());
}

yell("would you just look at it?!?");

// Write a function called yell10 that uses your yell function to log out an
// uppercase version of a string 10 times.

function yell10(a){
    for(var i=0; i< a; i++ ) {
    yell("Hello World");
    }
}

yell10(10);


// Exercise 3
// Write a function called longest that returns the longest of two input strings
//or arrays.

function longest(a,b){
    if(a.length > b.length){
        console.log(a);
    } else{
        console.log(b);
    }
}

longest("hope", "this really works!")

// Exercise 4
// Write a function called isVowel that takes a character (i.e. a string of
// length 1) and returns true if it is a vowel, uppercase or lowercase. The
// function should return false if the character is not a vowel.

function isVowel(string){
    var vowels =[
        "a",
        "e",
        "i",
        "o",
        "u"

    ];
    for (var i = 0; i < vowels.length; i++ ) {
        if ( string.toLowerCase() != vowels[i] ) {
            return false;
        } else {
            return true;
        }
    }
}
var runVowel = isVowel("a");
console.log(runVowel);
