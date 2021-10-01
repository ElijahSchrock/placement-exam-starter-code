// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')


let yourName = "Elijah Schrock"; 

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Ginger Bread Counter
let gbCounterCell = document.querySelector("#qty-gb");
let gbCounts = localStorage.getItem("qtygb");
    if (gbCounts) {
        gbCounterCell.textContent = gbCounts;
    };
document.getElementById('add-gb').addEventListener('click', function() {
    let gbCounts = parseInt(gbCounterCell.textContent);
    gbCounts = gbCounts + 1;
    gbCounterCell.textContent = (gbCounts);
    localStorage.setItem("qtygb", gbCounts);
    console.log('Ginger bread + button was clicked!')
});
document.getElementById("minus-gb").addEventListener("click", function() {
    let gbCounts = parseInt(gbCounterCell.textContent);
    gbCounts = gbCounts - 1;
    gbCounterCell.textContent = (gbCounts);
    localStorage.setItem("qtygb", gbCounts);
    console.log("Ginger bread - button was clicked!");
});

//Chocolate Chip Counter
let chocolateCookieCell = document.querySelector("#qty-cc");
let ccCounts = localStorage.getItem("qtycc");
    if (ccCounts) {
        chocolateCookieCell.textContent = ccCounts;
    };
document.getElementById("add-cc").addEventListener("click", function() {
    let ccCounts = parseInt(chocolateCookieCell.textContent);
    ccCounts = ccCounts + 1;
    chocolateCookieCell.textContent = (ccCounts);
    localStorage.setItem("qtycc", ccCounts);
});
document.getElementById("minus-cc").addEventListener("click", function() {
    let ccCounts = parseInt(chocolateCookieCell.textContent);
    ccCounts = ccCounts - 1;
    chocolateCookieCell.textContent = (ccCounts);
    localStorage.setItem("qtycc", ccCounts);
});

//Sugar Sprinkle Counter
let sugarSprinkleCell = document.querySelector("#qty-sugar");
let sugarCounts = localStorage.getItem("qtysugar");
    if (sugarCounts) {
        sugarSprinkleCell.textContent = sugarCounts;
    };
document.getElementById("add-sugar").addEventListener("click", function(){
    let sugarCounts = parseInt(sugarSprinkleCell.textContent);
    sugarCounts = sugarCounts + 1;
    sugarSprinkleCell.textContent = (sugarCounts);
    localStorage.setItem("qtysugar", sugarCounts);
});
document.getElementById("minus-sugar").addEventListener("click", function() {
    let sugarCounts = parseInt(sugarSprinkleCell.textContent);
    sugarCounts = sugarCounts - 1;
    sugarSprinkleCell.textContent = (sugarCounts);
    localStorage.setItem("qtysugar", sugarCounts);
});

//Quantity Total

let totalCookies = document.querySelector("#qty-total");

let cookieVotes = [
    {name: "gb", counts: gbCounts},
    {name: "cc", counts: ccCounts},
    {name: "sugar", counts: sugarCounts}
];
let sum = []

for (i = 0; i < cookieVotes.length; i ++){
    sum = sum + cookieVotes[i].counts;
};
totalCookies.textContent = (gbCounts + ccCounts + sugarCounts);