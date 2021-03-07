
function playAudio(audio) {
    audio.currentTime = 0;
    audio.play();
}

class Piano {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this); // (*)
    }

    onClick(event) {
        let note = event.target.dataset.note;
        if (note) {
            playAudio(document.querySelector(`audio[data-note="${note}"]`));
        }
    };
}
new Piano(document.getElementById('piano'));