

window.addEventListener('DOMContentLoaded', function() {
    // 'use strict';

    // Redirect to a specific slide 

    let slideIndex = 1,
        slides = document.querySelectorAll('.module-slide'),
        prev = document.querySelectorAll('.prev'),
        next = document.querySelectorAll('.next');

    function showSlides(item) {
        console.log('init')

        if (window.location.hash) {
            let hash = window.location.hash.substring(1);
            slideIndex = hash;
            history.pushState("", document.title, window.location.pathname);
        }
        if (item > slides.length) {
            console.log('1')
            slideIndex = 1;
        }
        if (item < 1) {
            slideIndex = slides.length;
            console.log('length')
        }
        slides.forEach((slide) => {
            slide.style.display = 'none';
            slide.style.opacity = 0.1;
        });

        slides[slideIndex - 1].style.display = 'block';
        changeOpacity(slides[slideIndex - 1], 0, 1);
    };

    function changeOpacity(element, from, to) {
        let timer = setInterval(function() {
            if (from >= to) {
                clearInterval(timer);
            }
            else {
                from += 0.1;
                element.style.opacity = from;
            }
        }, 100);
    }

    function nextSlide(item) {
        slideIndex += item;
        showSlides(slideIndex);
    }

    next.forEach(function(element) {
        element.addEventListener('click', function() {
            nextSlide(1);
        });
    })

    prev.forEach(function(element) {
        element.addEventListener('click', function() {
            nextSlide(-1);
        });
    })
    
    showSlides(slideIndex);


    // play videos

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

    // Accordeon 

    let plusSign = document.querySelectorAll('.info__wrapper .plus'),
        loremText = document.querySelectorAll('.lorem');

    plusSign.forEach(function(element, index) {
        element.addEventListener('click', function() {
            if (loremText[index].parentNode.classList.contains('closed')) {
                loremText[index].parentNode.classList.add('opened');
                loremText[index].parentNode.classList.remove('closed');
                setTimeout(function() {
                    loremText[index].style.display = 'block';}, 500);
            }
            else {
                loremText[index].parentNode.classList.add('closed');
                loremText[index].parentNode.classList.remove('opened');
                loremText[index].style.display = 'none';
            }
        });
    });

});