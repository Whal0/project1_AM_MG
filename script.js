// Walidacja formularza
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email && message) {
        alert('Dziękujemy za wysłanie wiadomości!');
        this.reset();
    } else {
        alert('Proszę uzupełnić wszystkie pola.');
    }
});