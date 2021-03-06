'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score1El = document.querySelector('#score--0');
const score2El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
 
const swichPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer===0 ? 1:0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

let scores,currentScore,activePlayer,playing;

const init = function () {

    scores =[0,0];
    currentScore =0;
    activePlayer = 0;
    playing =true;

    score1El.textContent = 0;
    score2El.textContent = 0;
    current1El.textContent =0;
    current0El.textContent =0;

    diceEl.classList.add('hidden');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
}
init();
btnRoll.addEventListener('click',function () {
    if(playing){
        const dice = Math.trunc(Math.random()*6)+1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
    
        if(dice !== 1){
            currentScore = currentScore + dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
           // current0El.textContent = currentScore;
        }else{
    
            swichPlayer();
        }
    }    
});

btnHold.addEventListener('click',function () {
    if(playing){
    scores[activePlayer]= scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 50){
        playing= false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        diceEl.classList.add('hidden');
    }else{
        swichPlayer();
    }
}
});

btnNew.addEventListener('click',init)


