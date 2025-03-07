let drum = document.querySelectorAll(".drum").forEach(
    (drum) => {
        drum.addEventListener("click", () => {
            const soundID = drum.getAttribute("data-source");
            const sound = sounds[soundID];
            sound.currentTime = 0;
            sound.play();
        });
    });
