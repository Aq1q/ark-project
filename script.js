
let amount = 0;
const tameCounter = document.getElementById('tameCounter');
const ls = window.localStorage;
const resetButton = document.getElementById('reset');
const dinos = document.querySelectorAll('.dino_tab');


dinos.forEach(dino => {
   dino.addEventListener('click', () => {
      changeColor(dino)
   });
});

resetButton.addEventListener('click', reset);
//seting amount depending on localstorage
amount = ls.getItem('amount');


//seting tame counter depending on localstorage
if (amount == null) {
   ls.setItem('amount', 0);
   tameCounter.innerHTML = 'You tamed: ' + 0 + ' creatures.';
} else if (amount == 1) {
   tameCounter.innerHTML = 'You tamed: ' + amount + ' creature.';
} else if (amount != 148) {
   tameCounter.innerHTML = 'You tamed: ' + amount + ' creatures.';
} else {
   tameCounter.innerHTML = 'You tamed every single creature.';
}

//change bgcolor of dino tab depending on localstorage
if (ls.getItem('amount') > 0 ) {
   for (let i=0; i <= ls.getItem('amount'); i++){
      if (ls.key(i) !== 'amount') {
         document.getElementById(ls.key(i)).style.backgroundColor = 'green';
      }
   }
}

function changeColor(element) { 
   const id = element.id;
   const cssObj = window.getComputedStyle(element, null);

   //check if box's bgcolor is set to red or green and change it respectively
   if(cssObj.getPropertyValue('background-color') === 'rgb(188, 25, 62)'){
      element.style.backgroundColor = 'green';
      ls.setItem(id, 'green');
      //tamed dinos +1
      amount++;
   } else {
      element.style.backgroundColor = 'rgb(188, 25, 62)';
      ls.removeItem(id);
      //tamed dinos -1
      amount--;
   }

   setAmount();

   ls.setItem('amount', amount);
}

function setAmount() {
   if(amount == 148){
      tameCounter.innerHTML = 'You tamed every single creature.';
   } else if(amount == 1) {
      tameCounter.innerHTML = 'You tamed: ' + amount + ' creature.';
   } else {
      tameCounter.innerHTML = 'You tamed: ' + amount + ' creatures.';
   }
}

function reset(){
   amount = 0;
   for (let i=0; i <= ls.getItem('amount'); i++){
      if (ls.key(i) !== 'amount') {
         document.getElementById(ls.key(i)).style.backgroundColor = '';
      }
   }
   setAmount();
   ls.clear();
}