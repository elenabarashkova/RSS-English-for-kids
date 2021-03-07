
function playAudio(audio) {
    audio.currentTime = 0;
    audio.play();
}

document.getElementById('piano').addEventListener( 'mousedown', function (event) {
    let note = event.target.dataset.note;
    if (note) {
        event.target.classList.add("piano-key-active");
        playAudio(document.querySelector(`audio[data-note="${note}"]`));
    }
});

document.getElementById('piano').addEventListener( 'mouseup', function (event) {

        event.target.classList.remove("piano-key-active");

});