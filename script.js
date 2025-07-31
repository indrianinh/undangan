const musik = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");
let isPlaying = true;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    musik
      .play()
      .then(() => {
        isPlaying = true;
        btn.textContent = "Pause Music"; // ubah tulisan tombol
      })
      .catch((err) => {
        console.log("Play blocked:", err);
      });
  } else {
    musik.pause();
    isPlaying = false;
    btn.textContent = "Play Music"; // ubah tulisan tombol
  }
});
