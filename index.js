let sounds = {
    crash: new Audio("crash.mp3"),
    kickBass: new Audio("kickbass.mp3"),
    snare: new Audio("snare.mp3"),
    tom1: new Audio("tom-1.mp3"),
    tom2: new Audio("tom-2.mp3"),
    tom3: new Audio("tom-3.mp3"),
    tom4: new Audio("tom-4.mp3"),

};




let drum = document.querySelectorAll(".drum").forEach(
    (drum) => {
        drum.addEventListener("click", () => {
            const soundID = drum.getAttribute("data-source");
            const sound = sounds[soundID];
            sound.currentTime = 0;
            sound.play();
        });

    });
