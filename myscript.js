window.onload= () =>{

let arrayNum=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
let arrSym=['&#9824', '&#9827', '&#9829', '&#9830'];
let randomNum = arrayNum[Math.floor(Math.random() * arrayNum.length)];
    let randomSuit = arrSym[Math.floor(Math.random() * arrSym.length)];


  if(randomSuit === '&#9829' || randomSuit === '&#9830')
  {

    document.querySelector('#top').className= 'top-suit red';
    document.querySelector('#bottom').className= 'bottom-suit red';
  }




   document.querySelector('#number').innerHTML= randomNum;
   document.querySelector('#top').innerHTML= randomSuit;
    document.querySelector('#bottom').innerHTML= randomSuit;
};