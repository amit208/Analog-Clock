// This code will select the secHand
let secHand = document.querySelector("#secHand");

// This code will select the hoursHand
let hourHand = document.querySelector("#hourHand");

// This code will select the minHand
let minHand = document.querySelector("#minHand");

// This code will get the current time
let currentTime = new Date();

// This code will get the current second form the current time. After this the sec will be incremneted every sec using a setInterval function
let sec = currentTime.getSeconds();

// This code will get the min of the current Time and will be incremented every min using a setInterval function
let min = (currentTime.getMinutes());

// This code will get the hour of the current Time and will be incremented every hour using a setInverval function
let hour = (currentTime.getHours());

// Incrementor --> This variable will be used to increment the min and the hour
let i = sec - 1;

// This code will set the angle of the sec, min, and hour hand according to the current timming and will change the css to rotate the hands
function runClock() {
    // This code will increment the incrementor every second
    i++;

    // This code will reset the seconds to 0 on every 60th second
    if (sec > 59) {
        sec = 0;
    }
    // Seconds will increment the second after every one sec
    sec += 1;
    // This code will get the angle corrosponding to the current second
    let angleCorrospondingToSec = sec * 6 + "deg";


    // This code will get the angle corrosponding to the current minute
    let angleCorrospondingToMin = (min + i/60) * 6 + "deg";

    // This code will get the angle corrosponding to the current hour
    let angleCorrospondingToHour = (hour + i/3600) * 30 + "deg";


    // This code will rotate the secHand
    secHand.style.transform = `rotate(${angleCorrospondingToSec})`;

    // This code will rotate the minHand
    minHand.style.transform = `rotate(${angleCorrospondingToMin})`;

    // This code will rotate the hourHand
    hourHand.style.transform = `rotate(${angleCorrospondingToHour})`;
}

// This code will run the clock instantly for the first time, without this code the clock will run after one sec
runClock();

// This code will run the "runClock" function every second
setInterval(function () {
    runClock();
}, 1000);