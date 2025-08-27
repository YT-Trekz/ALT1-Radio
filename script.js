const players = document.querySelectorAll("audio");

players.forEach(player => {
  player.addEventListener("play", () => {
    players.forEach(other => {
      if (other !== player) {
        other.pause();
        other.load();
      }
    });

    if (!player.dataset.refreshed) {
      player.dataset.refreshed = "true";
      player.pause();
      player.load();
      player.play();
    }
  });

  player.addEventListener("pause", () => {
    player.dataset.refreshed = "";
  });
});

import * as A1 from 'alt1/base';
A1.identifyApp('appconfig.json');
