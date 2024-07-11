var randomNumber1 = Math.floor(Math.random() * 6) + 1; // from 1-6 
var randomDiceImage =  "images/dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // from 1-6 
var randomDiceImage2 =  "images/dice" + randomNumber2 + ".png"; // dice1.png - dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);


if (randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = " 🚩Draw🚩"

} else if (randomNumber1 > randomNumber2 ){

    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
} else if (randomNumber1 < randomNumber2 ){

    document.querySelector("h1").innerHTML = " Player 2 Wins!🚩"
}
document.getElementById("refreshButton").addEventListener("click", function() {
    location.reload();
  });
 













// First TRY FAILED 

// const randomImage =  [  'images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];
// let randomNumber1 = randomImage[(Math.floor(Math.random() * randomImage.length))]
// alert(randomNumber1[2])

// const randomImage2 =  [  'images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];
// let randomNumber2 = randomImage[(Math.floor(Math.random() * randomImage2.length))]
// document.getElementsByClassName("img1")[0].src = randomNumber1;
// document.getElementsByClassName("img2")[0].src = randomNumber2;

// // document.getElementById("h1").innerHTML = "Draw!"



// // if ( randomNumber1 == randomNumber2){



// // } else if ( randomNumber(0) != randomNumber2){
// //     // alert("your code is not working, if conditional is not working well");
// //     document.getElementById("header").innerHTML = "Draw!"
// // }
