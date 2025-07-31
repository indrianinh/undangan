const musik = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");
let isPlaying = false;

// Coba auto play saat load
window.addEventListener("load", () => {
  musik.muted = false; // pastikan nggak mute
  musik.play()
    .then(() => {
      isPlaying = true;
      btn.textContent = "Pause Music";
      console.log("Auto play berhasil ✅");
    })
    .catch((err) => {
      console.log("Auto play gagal ❌:", err);
      isPlaying = false;
      btn.textContent = "Play Music";
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
