document.addEventListener("DOMContentLoaded", () => {
  let audio = document.getElementById("audio-play");

  // Loop through IDs from music-play2 to music-play31
  for (let i = 1; i <= 31; i++) {
    let buttonId = "music-play" + i;
    let playButton = document.getElementById(buttonId);

    playButton.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playButton.textContent = "❚❚"; // Change button text to pause symbol
      } else {
        audio.pause();
        audio.currentTime = 0; // Reset audio to beginning
        playButton.textContent = "►"; // Change button text to play symbol
      }
    });
  }
});
