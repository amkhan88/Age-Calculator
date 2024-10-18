// Initialize the clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

// Age Calculation Logic
document.getElementById('calculate-btn').addEventListener('click', () => {
    const birthdate = new Date(document.getElementById('birthdate').value);
    if (!birthdate) {
        alert('Please select a valid birthdate!');
        return;
    }
    const today = new Date();
    const age = calculateAge(birthdate, today);
    displayResult(age);
    launchConfetti();
});

function calculateAge(birthdate, today) {
    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    return { years, months, days };
}

function displayResult({ years, months, days }) {
    const result = document.getElementById('result');
    result.textContent = `🎂 You are ${years} years, ${months} months, and ${days} days old!`;
}

// Random Quote Logic with Auto-Change
const quotes = [
    "Believe in yourself.",
    "Keep pushing forward.",
    "Success is a journey.",
    "Dream big, work hard.",
    "Never stop learning.",
    "The best time for new beginnings is now.",
    "Challenges are what make life interesting."
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateQuote() {
    const quoteBox = document.getElementById('quote-box');
    quoteBox.textContent = getRandomQuote();
    quoteBox.classList.add('fade'); // Add fade animation

    setTimeout(() => {
        quoteBox.classList.remove('fade'); // Reset the animation
    }, 1000);
}

// Change the quote every 5 seconds
setInterval(updateQuote, 5000);

// Initial quote on load
updateQuote();

// Confetti Effect
function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
