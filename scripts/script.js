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
var tmp, current, top = deck.length;
if(top) while(--top) {
  current = Math.floor( Math.random() * (top+1) );
  tmp = deck[current];
  deck[current] = deck[top];
  deck[top] = tmp;
}

var clicks =  0;
var firstChoice = null;
var score = 0;

function resetCards() {
  document.querySelectorAll('.card:not(.found)').forEach(function(card) {
    card.style.backgroundImage=`url(images/access.png)`;

  }) 
}

function removeCards(first, second) {
  cards = document.querySelectorAll('.card');
  cards[first].classList.add('found');
  cards[second].classList.add('found');
  document.querySelector('.score').innerHTML = `${++score} matches found in ${clicks/2} tries.`;
  firstChoice = null;
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.card').forEach(function(card, index) {
    card.addEventListener('click', function(event) {
      clicks++;
      card.style.backgroundImage=`url(images/${deck[index]})`; 
      if(clicks%2==0) {
        if(deck[firstChoice] == deck[index]) {
          setTimeout(removeCards(firstChoice, index),  1000);
        } else {
          setTimeout(resetCards,  1000);
        }
      } else  {
        firstChoice = index;
      }
    })
  })
});