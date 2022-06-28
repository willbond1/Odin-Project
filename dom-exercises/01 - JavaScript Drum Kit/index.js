window.addEventListener("keydown", e => {
    const keyCode = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyCode}"`);
    const divKey = document.querySelector(`div.key[data-key="${keyCode}"]`);
    if(!audio)
        return;

    audio.currentTime = 0;
    audio.play();
    divKey.classList.add("playing");
});

const keys = document.querySelectorAll("div.key");
keys.forEach(key => {
    key.addEventListener("transitionend", function(e) {
        if(e.propertyName !== "transform")
            return;
        this.classList.remove("playing");
    });
});