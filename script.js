const musik = document.getElementById("bg-music");
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("open-btn");
const container = document.querySelector(".container");

// Saat klik tombol buka undangan
openBtn.addEventListener("click", () => {
  musik.play()
    .then(() => {
      overlay.style.display = "none"; // hilangkan overlay
      container.style.display = "block"; // tampilkan undangan
    })
    .catch((err) => {
      console.log("Play blocked:", err);
    });
});
