const openSite = document.getElementById("openSite");
const welcome = document.getElementById("welcome");
const home = document.getElementById("home");
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const envelope = document.getElementById("envelope");
const toast = document.getElementById("toast");

openSite.addEventListener("click", async () => {
  welcome.classList.remove("active");
  welcome.style.display = "none";
  home.classList.add("visible");
  window.scrollTo({ top: 0, behavior: "smooth" });
  try {
    await music.play();
    musicLabel.textContent = "Pause music";
  } catch (error) {
    musicLabel.textContent = "Play music";
  }
});

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicLabel.textContent = "Pause music";
    } catch (error) {
      showToast("Tambahkan file music.mp3 terlebih dahulu ♡");
    }
  } else {
    music.pause();
    musicLabel.textContent = "Play music";
  }
});

document.getElementById("openLetter").addEventListener("click", () => {
  envelope.classList.toggle("open");
  document.getElementById("openLetter").textContent =
    envelope.classList.contains("open") ? "Close the letter ♡" : "Open the letter ♡";
});

document.getElementById("wishBtn").addEventListener("click", () => {
  document.getElementById("wishText").textContent =
    "May your days be filled with warmth, courage, laughter, and lovely surprises. Happy birthday, Naura! ♡";
  showToast("A wish is on its way ♡");
  for (let i = 0; i < 18; i++) createHeart();
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart-particle";
  heart.textContent = Math.random() > 0.5 ? "♡" : "✿";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 18) + "px";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.querySelector(".floating-hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6500);
}
setInterval(createHeart, 950);
