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

    // Slider on the main page

    let mainPageSlideIndex = 1,
        mainPageSliderWrapper = document.querySelector('.showup__content-slider'),
        mainPageSlides = document.querySelectorAll('.showup__content-slider .card'),
        mainPageCardTitle = document.querySelectorAll('.card__title'),
        activeSlideArrow = document.querySelectorAll('.card__controls-arrow'),
        mainPagePrev = document.querySelector('.slick-prev'),
        mainPageNext = document.querySelector('.slick-next');

    function showMainPageSlides(item) {

        if (item > slides.length) {
            mainPageSlideIndex = 1;
        }
        if (item < 1) {
            mainPageSlideIndex = mainPageSlides.length;
        }
        mainPageSlides.forEach((slide, index) => {
            // slide.style.opacity = 0.4;
            activeSlideArrow[index].style.opacity = 0;
            // changeOpacity(mainPageSlides[mainPageSlideIndex - 1], 1, 0);
        });

        // mainPageCardTitle[item].style.opacity = 1;
        // activeSlideArrow[item].style.opacity = 1;
        // changeOpacity(mainPageSlides[mainPageSlideIndex - 1], 0, 1);
    };

    function nextSlide(item) {
        mainPageSlideIndex += item;
        showMainPageSlides(mainPageSlideIndex); 
    };

    mainPagePrev.addEventListener('click', function() {
        nextSlide(-1);
        let mainPageFirstSlide = mainPageSliderWrapper.children[0],
            mainPageLastSlide = mainPageSliderWrapper.children[mainPageSlides.length-1];

        mainPageSliderWrapper.insertBefore(mainPageLastSlide, mainPageFirstSlide);
        mainPageSlides.forEach((slide) => {
            slide.classList.remove('card-active');
        });
        mainPageSliderWrapper.children[0].classList.add('card-active');
    });

    mainPageNext.addEventListener('click', function() {
        nextSlide(1);
        let mainPageFirstSlide = mainPageSliderWrapper.children[0],
            mainPageLastSlide = mainPageSliderWrapper.children[mainPageSlides.length];

        mainPageSliderWrapper.insertBefore(mainPageFirstSlide, mainPageLastSlide);
        mainPageSlides.forEach((slide) => {
            slide.classList.remove('card-active');
        });
        mainPageSliderWrapper.children[0].classList.add('card-active');
    });

    showMainPageSlides(mainPageSlideIndex);



    // Play video button script

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
    })

    btnClose.forEach(function(element) {
        element.addEventListener('click', function() {
            overlay.style.display = 'none';
        });
    })


});