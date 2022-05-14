//DOM Variables
//3 divs
let cards = document.querySelectorAll(".card");
//color to show on the header
let colorTitle = document.querySelector('#code');
//choosing message
let message = document.querySelector('.msg');
//the header
var title = document.querySelector('.title');
//button for easy/hard levele(3/6 divs)
var level = document.querySelectorAll('.btn');
//easy level(3 divs)
var easy = document.querySelector('.easy');
//hard level (6 divs)
var hard = document.querySelector('.hard');
//reset button
var refresh = document.querySelector('.set');
//array for cards color
var cardsColor = divs(6);
//the picked color to be displayed
let rightColor = randomIndex();
//setting the color code in the header == to the right color
colorTitle.textContent = rightColor;
//looping&adding click event to the cards
for(var i = 0; i < cards.length; i++){
  cards[i].style.backgroundColor = cardsColor[i];
  cards[i].addEventListener('click', function (){
  let clickedCard = this.style.backgroundColor;
  if(clickedCard === rightColor){
    //console.log('bravoo');
    message.textContent = "Bravoo!";
    refresh.textContent = "Play Again";
    for(var i = 0; i < cards.length; i++){
    cards[i].style.backgroundColor = clickedCard;
    cards[i].style.visibility = "visible";
    title.style.backgroundColor = clickedCard;
  }
  }else{
    this.style.visibility = "hidden";
    message.textContent = "Ooops, Try Again ";
  }
  });
}
//function for cards colors
// var divs = function (indexNo){
//   var cardsArr = [];
//   for (i = 0; i < indexNo ; i++){
//   cardsArr.push((function randomColor(){
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     return "rgb("+r + ", " +g + ", "+ b +")";
//   }());
//   );
//   return cardsArr;
// }

//function for cards colors
 function divs (indexNo){
  var cardsArr = [];
  for (i = 0; i < indexNo ; i++){
  cardsArr.push(randomColor());
}
return cardsArr;
}

//generate random colot
function randomColor(){
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return "rgb("+r + ", " +g + ", "+ b +")";
}

//function to pick random index
function randomIndex(){
  let index = Math.floor(Math.random() *cardsColor.length);
  return cardsColor[index];
}
//events
//set event
refresh.addEventListener("click",function (){
  cardsColor = divs(6);
  rightColor = randomIndex();
  colorTitle.textContent = rightColor;
  message.textContent = " ";
  refresh.textContent = "Change Colors";
  title.style.backgroundColor = "#C21460";
  for(var i = 0; i < cards.length; i++){
  cards[i].style.backgroundColor = cardsColor[i];
  }
});


//game level
for(var j = 0; j < level.length; j++){
level[j].addEventListener("click", function (){
  console.log('button is clicked');
  if(this.textContent==="Easy"){
  cardsColor = divs(6);
  rightColor = randomIndex();
  colorTitle.textContent = rightColor;
  title.style.backgroundColor = "#C21460";
  message.textContent = " ";
    for(var i = 0; i <cards.length ; i++){
      cards[i].style.backgroundColor = cardsColor[i];
      cards[3].style.visibility = "hidden";
      cards[4].style.visibility = "hidden";
      cards[5].style.visibility = "hidden";
      }
  }if(this.textContent === "Hard"){
    cardsColor = divs(6);
    rightColor = randomIndex();
    colorTitle.textContent = rightColor;
    message.textContent = " ";
    title.style.backgroundColor = "#C21460";
      for(var i = 0; i <cards.length ; i++){
      cards[i].style.backgroundColor = cardsColor[i];
      cards[3].style.visibility = "visible";
      cards[4].style.visibility = "visible";
      cards[5].style.visibility = "visible";
    }
  }
});
}


// hard.addEventListener('click', function(){
//   cardsColor = divs(6);
//   rightColor = randomIndex();
//   colorTitle.textContent = rightColor;
//   title.style.backgroundColor = "#C21460";
//   for(var i = 0; i < cards.length; i++){
//     cards[i].style.backgroundColor = cardsColor[i];
//   }
// });
//
// easy.addEventListener('click',function(){
//   cardsColor = divs(6);
//   rightColor = randomIndex();
//   colorTitle.textContent = rightColor;
//   title.style.backgroundColor = "#C21460";
//     for(var i = 0; i <cards.length ; i++){
//       cards[i].style.backgroundColor = cardsColor[i];
//       cards[3].style.visibility = "hidden";
//       cards[4].style.visibility = "hidden";
//       cards[5].style.visibility = "hidden";
//       }
// });
