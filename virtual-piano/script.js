
function playAudio(audio) {
    audio.currentTime = 0;
    audio.play();
}

document.getElementById('piano').onclick = function (event) {
    let note = event.target.dataset.note;
    if (note) {
        event.target.classList.add("piano-key-active");
        playAudio(document.querySelector(`audio[data-note="${note}"]`));
    }
};
