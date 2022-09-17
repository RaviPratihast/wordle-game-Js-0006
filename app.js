'use strict';

// using a common parent for event delegation-> instead of using too many event handlers using one event handler.

const KeyboardKeys=document.querySelector('.keyboard-container');

// const buttons=document.querySelectorAll('.btn');

// test of event delegation

KeyboardKeys.addEventListener('click',function(e){
    console.log(e.target.textContent);
})

// rgb(255,255,255);