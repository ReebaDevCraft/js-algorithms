function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFormattedDate() {
    let date = new Date();
    return date.toISOString().split('T')[0];
}

