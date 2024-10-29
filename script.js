// Walidacja formularza
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email && message) {
        alert('Dziękujemy za wysłanie wiadomości!');
        this.reset();
    } else {
        alert('Wysłano pustą wiadomość');
    }
});

// Zegar
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

// Dynamicznych elementów

function toggleClock() {
    const clock = document.getElementById('clock');
    if (clock.style.display === "none") {
        clock.style.display = "block";
    } else {
        clock.style.display = "none";
    }
}