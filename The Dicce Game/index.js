var random1 =Math.floor(Math.random()*6+1);
var randomimage1="images/dice"+random1+".png";
document.querySelector("img.img1").setAttribute("src",randomimage1);

var random2 =Math.floor(Math.random()*6+1);
var randomimage2="images/dice"+random2+".png";
document.querySelector("img.img2").setAttribute("src",randomimage2);

if(random1>random2) {
document.querySelector("h1").textContent="🏆Player 1 wins";
}
else if(random1===random2) {
  document.querySelector("h1").textContent="Draw";
}
else{
  document.querySelector("h1").textContent="Player 2 wins🏆";
}
