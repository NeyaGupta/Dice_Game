var randomNumber1= Math.floor(Math.random()*6)+1;

var randomDiceImage= "dice" + randomNumber1 +".png";

randomImageSource= "images/"+ randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
 image1.setAttribute("src",randomImageSource );


 var randomNumber2= Math.floor(Math.random()*6)+1;

var randomDiceImages= "dice"+ randomNumber2 +".png";

randomImageSource= "images/"+ randomDiceImages;

var image1= document.querySelectorAll("img")[1];
 image1.setAttribute("src",randomImageSource );



 //for the image to be changed

 if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins !";
 }
 else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins ! 🚩";
 }
 else{ 
    document.querySelector('h1').innerHTML ="Draw 🙃";
}