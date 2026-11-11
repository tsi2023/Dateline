const targetDate = new Date("2026-12-31T23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "La date est atteinte !";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
            `${days}j ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);
function toggleCard() {
    const countdown = document.getElementById("countdown");
    const card = document.getElementById("inviteCard");
    const arrow = document.getElementById("arrowBtn");

    card.classList.toggle("open");
    arrow.classList.toggle("open");

    countdown.classList.toggle("compact");
}
const scene = document.getElementById("cardScene");
const bouton = document.getElementById("btn");

bouton.addEventListener("click", function () {

    scene.classList.toggle("open");

    bouton.textContent = scene.classList.contains("open")
        ? bouton.dataset.back
        : bouton.dataset.front;
});


