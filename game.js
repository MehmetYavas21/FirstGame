const speak = function(name, time){
    console.log('Hallo ' + name + ' good ' + time + '!');
};
speak('memo', 'afternoon');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//https://www.w3schools.com/jsref/met_win_prompt.asp

const firstFunction= function(){
    let person = prompt('Welcome to the Guess-Game! Please enter your name','Who is the next');
    if (person != null){
        document.getElementById('intro').innerHTML= `Hello ${person} Welcome to the best game!`;
    }
    alert ('Welcome ' + person);
};

firstFunction();

const playFunction = function(){
    let number1 = prompt ('Choose the first number between 0 and 25', ' The First Number') 
    let number2 = prompt('Choose a second number between 0 and 25' ,'Second Number');
    if (number1 + number2 !=null){
        document.getElementById('play').innerHTML('Thank you!');
    }
};

playFunction();
