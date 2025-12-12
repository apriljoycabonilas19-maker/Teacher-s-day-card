document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playButton = document.getElementById("playButton");
    const card = document.querySelector('.card');
    let isPlaying = false;

    // Audio Play/Pause Toggle
    playButton.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            playButton.innerHTML = '<i class="fas fa-music"></i> Play Audio';
        } else {
            // Start playing and catch any potential error (e.g., if the file isn't found)
            audio.play().catch(error => {
                console.error("Audio playback failed:", error);
                playButton.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Audio Error';
                isPlaying = false;
            });
            playButton.innerHTML = '<i class="fas fa-pause"></i> Pause Audio';
        }
        isPlaying = !isPlaying;
    });

    // Reset button text when audio finishes
    audio.addEventListener('ended', function () {
        isPlaying = false;
        playButton.innerHTML = '<i class="fas fa-music"></i> Play Audio';
    });

    // Card open/close (3D flip)
    card.addEventListener('click', function () {
        card.classList.toggle('open');
    });
});
