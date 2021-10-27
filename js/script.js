'use strict';
/* variables */
/* the var variable notation acts as a scriptwide accessible variable.
 its rarely used. let is the standard practice use for variables*/
 /*
var nameOfVar = "itsValue"
*/
/*contstants are values that once made cannot be changed*/
/*
const nameOfVar = "itsValue"
*/
/*standard practice for creating variables */
/*
let nameOfVar = "itsValue"
*/
/*you  can also make it an object which means it has multiple properties
 and can even have nested funtions*/
 /*
 let nameOfVar = {
     property1: itsValue,
     property2: someValue,
     nameOfFuntion: function() {
         typeOfFuntion(this.targetVariable)
     }
 }
*/
/*Something to notice for syntex is the this. before the target
 in the funtion is necessary to target the funtions inside the object itsef.
 it will not work properly without that syntex*/


/*funtions*/

/*
  function() {
    typeOfFuntion(target variable);
}
*/



    /*click event that can be used to activate something when clicked*/ 
    /*
const button = document.getElementById('see-review');

button.addEventListener('click', function() {
    console.log('click');
} )
*/


     /*showing and hiding content*/
/*
const button = document.getElementById('see-review');

button.addEventListener('click', function() {

    const test = document.getElementById('test');

    if (test.classList.contains('display-none')) {
    test.classList.remove('display-none');
     
    }
    else {
        test.classList.add('display-none')
    }
} )
*/
const button = document.getElementById('hamburgerBtn');

button.addEventListener('click', function() {
    const showingDiv = document.getElementById('displayNav');

    if (showingDiv.classList.contains('display-none')){
        showingDiv.classList.remove('display-none');
        button.style.color = 'black';
    }
    else {
        showingDiv.classList.add('display-none');
        button.style.color = 'rgba(255, 255, 255, 0.589)'
    }
})
