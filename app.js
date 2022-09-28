'use strict';

// using a common parent for event delegation-> instead of using too many event handlers using one event handler.

const KeyboardKeys=document.querySelector('.keyboard-container');


// data provided by user and kept in the array.

const arrInputData=[];

// test of event delegation

KeyboardKeys.addEventListener('click',function(e){
    // console.log(e.target.textContent);
    if(e.target.classList.contains('btn-key')){
        console.log(e.target.textContent);
       if(arrInputData.length<5){
        arrInputData.push(e.target.textContent);

         
       }
    }

    console.log(arrInputData);
})


