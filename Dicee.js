// for image 1
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage1);

// for image 2
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

// setting winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " Player 1 WINS!!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = " Player 2 WINS!!";
}
else{
    document.querySelector("h1").innerHTML = " Its a DRAW";
}
