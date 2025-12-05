let stayButton = document.querySelector(".stay");
  let header = document.querySelector("h1");
   let followButton = document.querySelector(".follow");
   let question = document.querySelector(".question");
   let grabButton = document.querySelector(".grab");
 let callButton = document.querySelector(".call");
let exploreButton = document.querySelector(".explore");
let searchButton = document.querySelector(".search");
   let background = document.querySelector(".background ");
let body  = document.querySelector("body");

stayButton.addEventListener("click", function() {
      console.log("hi")
  stayButton.style.display = "none";
  question.innerHTML = "You decide to stay with Bubbie. She dives deep beneath Stormalong’s docks, where glowing jellyfish light the dark water. Suddenly, you spot something shiny wedged in a coral cave—a piece of a treasure map!";
     grabButton.style.display = "initial";
       followButton.style.display = "none";
            callButton.style.display = "initial";
background.src = "bubbie.jpg";
body.style.backgroundColor = "#341C02";
 
 }) ;


  followButton.addEventListener("click",function(){
followButton.style.display = "none";
  question.innerHTML = "You grab Flapjack’s hand and climb aboard his creaky ship. The sails groan as it drifts toward open water. Adventure waits.";
     exploreButton.style.display = "initial";
       stayButton.style.display = "none";
            searchButton.style.display = "initial";
            background.src = "flapjack.jpg";
            body.style.backgroundColor = "teal";
  });

 grabButton.addEventListener("click", function () {
 
question.innerHTML ="You grab the map—something moves behind you.You turn around—a sea monster looms! Before you can scream, it swallows you whole. Game Over."
body.style.backgroundColor = "teal";
  background.src = "monster.jpg";
  callButton.style.display = "none";
  grabButton.style.display = "none";
});
 callButton.addEventListener("click", function () {
  background.src = "treasure.jpg";
  body.style.backgroundColor = "brown";
  grabButton.style.display = "none";
  callButton.style.display = "none";
  question.innerHTML = "She swims over and nudges the chest open with her nose. Inside, you see a sparkling key.You take the key. It glows in your hand.  suddenly a hidden door in the coral opens, revealing a tunnel filled with treasure";
});

exploreButton.addEventListener("click", function (event) {
  background.src = "island.jpg";
  body.style.backgroundColor = "pink";
  exploreButton.style.display = "none";
  searchButton.style.display = "none";
  question.innerHTML = "You steer the ship into thick fog. Flapjack clings to the railing, excited. Strange shapes loom ahead.Suddenly, the mist parts, revealing a tiny, candy-covered island.Flapjack cheers, and you both jump ashore, ready to explore. Treasure, sticky treats, and more adventures await.";
});
  
searchButton.addEventListener("click", function (event) {
  question.innerHTML = "You explore the cabin. Flapjack bounces nearby.You find a torn map, a rusty compass, and a candy bar.You grab your choice of item and return to the deck. Flapjack cheers.The ship drifts toward the horizon. The sun sparkles on the water. Whatever comes next, you know one thing for sure: life with Flapjack s never boring.";
  background.src = "dock.jpg";
     body.style.backgroundColor = "darkblue";
     exploreButton.style.display = "none";
  searchButton.style.display = "none";
});

