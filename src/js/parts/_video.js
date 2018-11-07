// Play video button script

function PlayVideoMainPage() {

    let btnPlay = document.querySelectorAll('.play'),
        overlay = document.querySelector('.overlay'),
        btnClose = document.querySelectorAll('.close'),
        videoFrame = document.querySelector('.overlay .video iframe');

    if (videoFrame.src = 'none') {
        console.log('no video stream detected');
    }

    btnPlay.forEach(function(element) {
        element.addEventListener('click', function() {
            let videoURL = this.getAttribute('data-url');
            overlay.style.display = 'block';
            videoFrame.src = videoURL;
        });
    });

    btnClose.forEach(function(element) {
        element.addEventListener('click', function() {
            overlay.style.display = 'none';
        });
    });

    let plusLink = document.querySelector('.plus-link');

    plusLink.addEventListener('click', function() {
        window.location.replace('modules.html#1');
        history.pushState("", document.title, window.location.pathname);
    });
}

// play videos on the modules page

function PlayVideoModulesPage() {


    let btnPlay = document.querySelectorAll('.play-first'),
    playCircle = document.querySelectorAll('.closed'),
    btnPlaySecond = document.querySelectorAll('.play-second'),
    isPlayed = false,
    overlay = document.querySelector('.overlay'),
    btnClose = document.querySelectorAll('.close'),
    videoFrame = document.querySelector('.overlay .video iframe');

    if (videoFrame.src = 'none') {
    console.log('no video stream detected');
    }

    btnPlay.forEach(function(element, index) {
    element.addEventListener('click', function() {
        let videoURL = this.getAttribute('data-url'),
            svgPath = document.querySelectorAll('.play-second .play .play__circle'),
            svgBlock = document.querySelectorAll('.play-second .play .play__circle svg'),
            svgPlay = '<svg viewBox="0 0 14 16" fill="none" \                                      xmlns="http://www.w3.org/2000/svg"> \
                        <path d="M14 8L0 16V0L14 8Z" fill="#6D53AF"/> </svg>';
        overlay.style.display = 'block';
        videoFrame.src = videoURL;
        isPlayed = true;
        playCircle[index].classList.remove('closed');
        btnPlaySecond[index].style.opacity = 1;
        svgPath[index].removeChild(svgBlock[index]);
        svgPath[index].insertAdjacentHTML('afterbegin', svgPlay);
    });
    });

    btnPlaySecond.forEach(function(element, index) {
    element.addEventListener('click', function() {
        if (isPlayed == true) {
            let videoURL = this.children[1].getAttribute('data-url');
            overlay.style.display = 'block';
            videoFrame.src = videoURL;
        }
    });
    });

    btnClose.forEach(function(element) {
    element.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
    });
}

module.exports = {
    PlayVideoMainPage: PlayVideoMainPage,
    PlayVideoModulesPage: PlayVideoModulesPage
}