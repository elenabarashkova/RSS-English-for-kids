
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

document.addEventListener('keydown', function(event) {
    let pushCode = event.code[3];
    let pushPianoKey = document.querySelector(`.piano-key[data-letter="${pushCode}"]`);
    if(pushPianoKey) {
        pushPianoKey.classList.add("piano-key-active");
        let note = pushPianoKey.dataset.note;
        playAudio(document.querySelector(`audio[data-note="${note}"]`));
    }
});

document.addEventListener('keyup', function(event) {
    document.querySelector(`.piano-key[data-letter="${event.code[3]}"]`).classList.remove("piano-key-active");

});

