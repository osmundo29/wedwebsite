// Fade-in when page loads
window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
});

const music = document.getElementById("bg-music");

function playMusic() {
  music.play();
}
function pauseMusic() {
  music.pause();
}

const targetDate = new Date("2025-11-08T08:00:00").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "💍 It's your wedding day! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}, 1000);

navbar = document.querySelector(".navbar").querySelectorAll("a");
console.log(navbar);

navbar.forEach((element) => {
  element.addEventListener("click", function () {
    navbar.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

//Invitation Section

const envelope = document.querySelector(".envelope-wrapper");
envelope.addEventListener("click", () => {
  envelope.classList.toggle("flap");
});
