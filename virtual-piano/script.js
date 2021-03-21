let isMousedown;

function playAudio(audio) {
    audio.currentTime = 0;
    audio.play();
}

function addActive(pianoKey) {
    pianoKey.classList.add("piano-key-active");
}

function removeActive(pianoKey) {
    if(pianoKey) {
        pianoKey.classList.remove("piano-key-active");
    }
}

function playNote(note) {
    playAudio(document.querySelector(`audio[data-note="${note}"]`));
}

function mouseEventsAdd(event) {
    isMousedown = true;
    let note = event.target.dataset.note;
    if (note) {
        addActive(event.target);
        playNote(note);
    }
}

document.getElementById('piano').addEventListener('mousedown', mouseEventsAdd);

document.addEventListener( 'mouseup', function (event) {
    if(isMousedown) {
        isMousedown = false;
        removeActive(document.querySelector(".piano-key-active"));
    }
});

document.getElementById('piano').addEventListener('mouseover', function (event) {
    if(isMousedown) {
        mouseEventsAdd(event);
    }
});

document.addEventListener( 'mouseout', function (event) {
    removeActive(event.target);
});

document.addEventListener('keydown', function(event) {
    let pushCode = event.code[3];
    let pushPianoKey = document.querySelector(`.piano-key[data-letter="${pushCode}"]`);
    if(pushPianoKey && !event.repeat) {
        addActive(pushPianoKey);
        let note = pushPianoKey.dataset.note;
        playNote(note);

    }
});

document.addEventListener('keyup', function(event) {
    removeActive(document.querySelector(`.piano-key[data-letter="${event.code[3]}"]`));

});


let tabBtnWrap = document.querySelector('.btn-container');

tabBtnWrap.onclick = function(event) {
    if(!event.target.classList.contains("btn-active")) {
        document.querySelector('.btn.btn-active').classList.remove("btn-active");
        event.target.classList.add("btn-active");
    }
    const pianoClassList = document.querySelector('.piano').classList;
    if(document.querySelector('.btn-notes.btn-active') !== null) {
        pianoClassList.add("show-notes");
        pianoClassList.remove("show-letters");
    } else if(document.querySelector('.btn-letters.btn-active') !== null) {
        pianoClassList.add("show-letters");
        pianoClassList.remove("show-notes");
    }
};

// fullscreen

function activateFullscreen(element) {
    if(element.requestFullscreen) {
        element.requestFullscreen();        // W3C spec
    }
    else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();     // Firefox
    }
    else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();  // Safari
    }
    else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();      // IE/Edge
    }
}
function deactivateFullscreen() {
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

document.querySelector('.openfullscreen').onclick = function() {
    if(document.fullscreenElement === null) {
        activateFullscreen(document.documentElement);
    } else {
        deactivateFullscreen();
    }
};