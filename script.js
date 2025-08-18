// Hardcore playlist
const hardcoreSongs = [
  "song1.mp3",
  "song2.mp3",
  "song3.mp3"
];

let currentSong = 0;
const player = document.getElementById("hardcorePlayer");
const nowPlaying = document.getElementById("nowPlaying");

// Laad eerste nummer
function loadSong(index) {
  player.src = hardcoreSongs[index];
  player.load();
  player.play();
  nowPlaying.textContent = "Now playing: " + hardcoreSongs[index];
}

// Als nummer eindigt -> ga naar volgende
player.addEventListener("ended", () => {
  currentSong++;
  if (currentSong >= hardcoreSongs.length) {
    currentSong = 0; // begin opnieuw
  }
  loadSong(currentSong);
});

// Start meteen met eerste nummer
loadSong(currentSong);
