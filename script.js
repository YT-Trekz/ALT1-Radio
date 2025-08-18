const hardcoreSongs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3"
];

let currentSong = 0;
const player = document.getElementById("hardcorePlayer");

// Functie om het volgende nummer te spelen
function playNextSong() {
    currentSong++;
    if (currentSong >= hardcoreSongs.length) {
        currentSong = 0; // herhalen
    }
    player.src = hardcoreSongs[currentSong]; // nieuwe source
    player.load(); // laad het nieuwe nummer
    player.play(); // start afspelen
}

// Event listener voor wanneer een nummer klaar is
player.addEventListener("ended", playNextSong);
