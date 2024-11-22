let num;
let attempt = 0;
let attemptData = document.getElementById("attempt");
let userinp = document.getElementById("inp");
let subBtn = document.getElementById("submit");
let resbtn = document.getElementById("resBtn");
let message = document.getElementById("msg");
let startWindow = document.getElementById("startWindow");
let startBtn = document.getElementById("startBtn");
let gameContainer = document.querySelector('.container');

function startGame() {
    num = Math.floor(Math.random() * (100 - 1)) + 1;
    attempt = 0;
    attemptData.innerHTML = attempt;
    userinp.value = ""; // Clear input field
    message.innerHTML = ""; // Clear message
    startWindow.style.display = "none"; // Hide start window
    gameContainer.style.display = "block"; // Show game container
}

function check() {
    let usernum = parseInt(userinp.value);
    
    // Input validation
    if (isNaN(usernum) || usernum < 1 || usernum > 100) {
        message.innerHTML = "Please enter a number between 1 and 100.";
        message.style.color = "orange";
        return;
    }

    if (usernum === num) {
        message.innerHTML = "Congratulations!! You have guessed the Number";
        message.style.color = "green";
        resbtn.style.display = "block"; // Show restart button
        subBtn.disabled = true; // Disable submit button
    } else if (usernum > num) {
        message.innerHTML = "Too High!! Try Again";
        message.style.color = "red";
        resbtn.style.display = "block"; // Show restart button
    } else {
        message.innerHTML = "Too Low!! Try Again";
        message.style.color = "red";
    }

    attempt++;
    attemptData.innerHTML = attempt;

    setTimeout(() => {
        userinp.value = "";
        message.innerHTML = "";
    }, 1000);
}

function restart() {
    num = Math.floor(Math.random() * (100 - 1)) + 1;
    attempt = 0;
    attemptData.innerHTML = attempt;
    userinp.value = ""; // Clear input field
    message.innerHTML = ""; // Clear message
    resbtn.style.display = "none"; // Hide restart button
    subBtn.disabled = false; // Enable submit button
}

startBtn.addEventListener("click", startGame);
subBtn.addEventListener("click", check);
resbtn.addEventListener("click", restart);