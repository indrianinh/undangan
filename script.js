const musik = document.getElementById("bg-music");
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("open-btn");
const container = document.querySelector(".container");

// Saat klik tombol buka undangan
openBtn.addEventListener("click", () => {
  musik.play()
    .then(() => {
      overlay.classList.add("fade-out"); // kasih animasi hilang
    })
    .catch((err) => {
      console.log("Play blocked:", err);
      overlay.classList.add("fade-out");
    });
});
