// Centralized JavaScript file

// 1. Named Constant
const MAX_CAR_PRICE = 5000000;

// 2. Functions to display messages on the screen and in the console
function displayMessage(message) {
    let messageElement = document.createElement("p");
    messageElement.textContent = message;
    document.body.appendChild(messageElement);
}
  
function logMessage(message) {
    console.log(message);
}
  
function showMessageAndLog(message) {
    displayMessage(message);
    logMessage(message);
}

// 3. Alert message when the page loads
window.onload = function() {
    alert("Hello, this is my website!!");
};

// 4. Modify the Webpage for Interaction
// Finding elements by ID, class name, and tag name
var BMWcarprice = document.getElementById("img1");
var messages = document.getElementsByClassName("message");
var paragraphs = document.getElementsByTagName("p");

// Adding a new attribute to an element
BMWcarprice.setAttribute("data-price", "Starting at $59,400");

// Changing CSS of an element
BMWcarprice.style.border = "2px solid red";

// 5. React to User Actions
// onclick event
BMWcarprice.addEventListener("click", function() {
    alert("BMW X5, starting at $59,400");
});

// onmouseover event to change color of the first message element
if (messages.length > 0) {
    messages[0].onmouseover = function() {
        this.style.color = "blue";
    };
}

// 6. Using else if statements for conditional logic
let cars = 2000000;
let bigcars = 100000;
let total = cars * 8;
let total2 = bigcars * 5;

alert("Total price for all cars is " + total);

if (total > MAX_CAR_PRICE || total2 > 450000) {
    showMessageAndLog("It's a big amount of money");
} else if (total > 2500000) {
    showMessageAndLog("It's a moderate amount of money");
} else {
    showMessageAndLog("It's a small amount of money");
}

// 7. Loop to automate repetition
let carBrands = ["BMW", "Audi", "Mercedes"];
carBrands.forEach(brand => displayMessage("Brand: " + brand));

// 8. Array usage
let carPrices = [59000, 74000, 85000];
for (let i = 0; i < carPrices.length; i++) {
    console.log("Price of car " + (i + 1) + ": " + carPrices[i]);
}

// 9. Scheduling tasks with setInterval and clearInterval
let count = 0;
let interval = setInterval(() => {
    console.log("Interval count: " + count);
    count++;
    if (count === 5) {
        clearInterval(interval);
        console.log("Interval stopped");
    }
}, 1000);
