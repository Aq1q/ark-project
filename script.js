//variable to count amount of tamed dinos
let amount = 0;
const tameCounter = document.getElementById('tameCounter');


const ls = window.localStorage;

//seting amount depending on localstorage
amount = ls.getItem('amount');


//seting tame counter depending on localstorage value
if (ls.getItem('amount') == null) {
   ls.setItem('amount', 0)
   tameCounter.innerHTML = "You tamed: " + 0 + " creatures.";
} else if (ls.getItem('amount') == 1) {
   tameCounter.innerHTML = "You tamed: " + amount + " creature.";
} else if (ls.getItem('amount') != 148){
   tameCounter.innerHTML = "You tamed: " + amount + " creatures.";
} else {
   tameCounter.innerHTML = "You tamed every single creature.";
}

//change bgcolor of dino tab depending on localstorage
if (ls.getItem('amount') > 0 ) {
   for (let i=0; i <= ls.getItem('amount'); i++){
      if (ls.key(i) == "amount") {
      } else {
         document.getElementById(ls.key(i)).style.backgroundColor = "green";
      }
   }
}

function color(id){
   const element = document.getElementById(id);
   const cssObj = window.getComputedStyle(element, null);

   //check if box's bgcolor is set to red or green and change it respectively
   if(cssObj.getPropertyValue("background-color") === "rgb(188, 25, 62)"){
      document.getElementById(id).style.backgroundColor = "green";
      ls.setItem(id, "green");
      //tamed dinos +1
      amount++;
   } else {
      document.getElementById(id).style.backgroundColor = "rgb(188, 25, 62)";
      ls.removeItem(id);
      //tamed dinos -1
      amount--;
   }
   //A message saying the amount of tamed dinos
   if(amount == 148){
      tameCounter.innerHTML = "You tamed every single creature.";
   } else if(amount == 1) {
      tameCounter.innerHTML = "You tamed: " + amount + " creature.";
   } else {
      tameCounter.innerHTML = "You tamed: " + amount + " creatures.";
   }

   ls.setItem('amount', amount);
}

function reset(){
   ls.clear();
   window.location.reload();
}