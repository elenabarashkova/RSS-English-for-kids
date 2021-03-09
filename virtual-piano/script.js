
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


let tabBtnWrap = document.querySelector('.btn-container');

tabBtnWrap.onclick = function(event) {
    let btnActive = document.querySelector('.btn.btn-active');
    if(!event.target.classList.contains("btn-active")) {
        btnActive.classList.remove("btn-active");
        event.target.classList.add("btn-active");
    }
    if(document.querySelector('.btn-notes.btn-active') !== null) {
        document.querySelector('.piano').classList.add("show-notes");
        document.querySelector('.piano').classList.remove("show-letters");
    } else if(document.querySelector('.btn-letters.btn-active') !== null) {
        document.querySelector('.piano').classList.add("show-letters");
        document.querySelector('.piano').classList.remove("show-notes");
    }
};

