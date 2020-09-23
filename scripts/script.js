const images = [
  'aviator-glasses-goat.svg',
  'baby-goat.svg',
  'bowie-goat.svg',
  'dark-phillip-goat.svg',
  'frida-goat.svg',
  'hello-goaty.svg',
  'levar-goat.svg',
  'purple-glasses-goat.svg',
  'rainbow-goat.svg'
]

var deck = images.concat(images)
var chosen = [];
var score = 0;
var clicks = 0;

function shuffle() {
  var tmp, current, top = deck.length;
  if(top) while(--top) {
    current = Math.floor( Math.random() * (top+1) );
    tmp = deck[current];
    deck[current] = deck[top];
    deck[top] = tmp;
  }
}

function resetCards() {
  first = chosen.shift();
  second = chosen.shift();
  cards = document.querySelectorAll('.card');
  cards[first].style.backgroundImage=`url(images/access.png)`;
  cards[second].style.backgroundImage=`url(images/access.png)`;
}

function removeCards() {
  first = chosen.shift();
  second = chosen.shift();
  cards = document.querySelectorAll('.card');
  cards[first].classList.add('found');
  cards[second].classList.add('found'); 
  document.querySelector('div.score > h1').innerHTML = `${++score} matches found in ${clicks/2} tries.`;

  number_found = document.querySelectorAll('.found').length 
  if( number_found == 18) {
    player = window.prompt("Congratulation!  Please enter your name", "Access Conference 2020");
    sessionStorage .setItem('player', player);
    location = "highscore.html";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  shuffle();
  document.querySelectorAll('.card').forEach(function(card, index) {
    card.addEventListener('click', function(event) {
      if(chosen.includes(index)){
        return;
      }

      chosen.push(index)
      clicks++
      card.style.backgroundImage=`url(images/${deck[index]})`; 
      
      if(chosen.length%2==0) {
        if(deck[chosen[0]] == deck[chosen[1]]) {
          setTimeout(removeCards,  1000);
        } else {
          setTimeout(resetCards,  1000);
        }
      } 
    })
  })
});