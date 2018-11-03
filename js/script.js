window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let mentorBlock = document.querySelector('.hanson');

    // Slider for the main page

    let slideIndex = 1,
        slides = document.querySelectorAll('.slide'),
        next = document.querySelectorAll('.next');

    function showSlides(item) {

        if (item > slides.length) {
            slideIndex = 1;
        }
        if (item < 1) {
            slideIndex = slides.length;
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
            console.log(slideIndex);
            if (slideIndex == 3) {
                let blockStyle = getComputedStyle(mentorBlock),
                    bottomPosition = blockStyle.bottom;
                setTimeout(function() {
                    console.log(bottomPosition);
                    let timer = setInterval(function() {
                        let bottomPositionPx = +bottomPosition.split('px')[0];
                        console.log(bottomPositionPx);
                        if (bottomPositionPx >= 0) {
                            clearInterval(timer);
                            mentorBlock.style.bottom = '0px';
                        }
                        else {
                            bottomPositionPx = bottomPositionPx + 10;
                            bottomPosition = bottomPositionPx + 'px';
                            mentorBlock.style.bottom = bottomPosition;
                        }
                    }, 20);
                }, 3000);
                
            }
        });
    })
    
    showSlides(slideIndex);

    // Play video button script

    let btnPlay = document.querySelectorAll('.play'),
        overlay = document.querySelector('.overlay'),
        btnClose = document.querySelectorAll('.close'),
        videoFrame = document.querySelector('.overlay .video iframe');

    btnPlay.forEach(function(element) {
        element.addEventListener('click', function() {
            let videoURL = this.getAttribute('data-url');
            overlay.style.display = 'block';
            videoFrame.src = videoURL;
        });
    })

    btnClose.forEach(function(element) {
        element.addEventListener('click', function() {
            overlay.style.display = 'none';
        });
    })


});