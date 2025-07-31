const musik = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");
let isPlaying = false;

// Coba auto play saat load
window.addEventListener("load", () => {
  musik.muted = false; // pastikan tidak mute
  musik.play()
    .then(() => {
      isPlaying = true;
      btn.style.display = "none"; // sembunyikan tombol kalau sukses auto play
      console.log("Auto play berhasil ✅");
    })
    .catch((err) => {
      console.log("Auto play gagal ❌:", err);
      isPlaying = false;
      btn.textContent = "Play Music";
      btn.style.display = "inline-block"; // tampilkan tombol kalau gagal auto play
    });
});

// Event klik untuk play/pause
btn.addEventListener("click", () => {
  if (!isPlaying) {
    musik.play()
      .then(() => {
        isPlaying = true;
        btn.textContent = "Pause Music";
      })
      .catch((err) => {
        console.log("Play blocked:", err);
      });
  } else {
    musik.pause();
    isPlaying = false;
    btn.textContent = "Play Music";
  }
});
