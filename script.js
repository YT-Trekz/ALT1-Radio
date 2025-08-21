
const players = document.querySelectorAll("audio");

// Voor elk audio-element een eventlistener
players.forEach(player => {
  player.addEventListener("play", () => {
    // Pauzeer alle andere audio's
    players.forEach(other => {
      if (other !== player) {
        other.pause();
      }
    });
  });
});
