// const showSlides = require('./modules');

window.addEventListener('DOMContentLoaded', function() {
    'use strict';

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

    let mentorBlock = document.querySelector('.hanson');

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

    // Mini slider on the main page

    let mainPageSlideIndex = 1,
        mainPageSliderWrapper = document.querySelector('.showup__content-slider'),
        mainPageSlides = document.querySelectorAll('.showup__content-slider .card'),
        activeSlideArrow = document.querySelectorAll('.card__controls-arrow'),
        mainPagePrev = document.querySelector('.slick-prev'),
        mainPageNext = document.querySelector('.slick-next');

    function showMiniSlides(index, slideItems, slideArrow) {
        if (index > slideItems.length) {
            index = 1;
        }
        if (index < 1) {
            index = slideItems.length;
        }
        if (slideArrow != '') {
            slideItems.forEach((slide, i) => {
                slideArrow[i].style.opacity = 0;
            });
        }
    }

    function swapSlides(sliderWrapper, slideItems, activeClass, onwards = true) {
        let firstSlide = sliderWrapper.children[0];
            
        if (onwards == true) {
            let lastSlide = sliderWrapper.children[slideItems.length];
            sliderWrapper.insertBefore(firstSlide, lastSlide);
            slideItems.forEach((slide) => {
                slide.classList.remove(activeClass);
            });
            sliderWrapper.children[0].classList.add(activeClass);
        }
        else {
            let lastSlide = sliderWrapper.children[slideItems.length-1];
            sliderWrapper.insertBefore(lastSlide, firstSlide);
            slideItems.forEach((slide) => {
                slide.classList.remove(activeClass);
            });
            sliderWrapper.children[0].classList.add(activeClass);
        }
    }

    function nextMiniSlide(item) {
        mainPageSlideIndex += item;
        showMiniSlides(mainPageSlideIndex, mainPageSlides, activeSlideArrow);
    };

    mainPagePrev.addEventListener('click', function() {
        nextMiniSlide(-1);
        swapSlides(mainPageSliderWrapper, mainPageSlides, 'card-active', false);
    });

    mainPageNext.addEventListener('click', function() {
        nextMiniSlide(1);
        swapSlides(mainPageSliderWrapper, mainPageSlides, 'card-active', true);
    });

    // Slider on the third page 

    let thirdPageSlideIndex = 1,
        thirdPageSliderWrapper = document.querySelector('.modules__content-slider'),
        thirdPageSlides = document.querySelectorAll('.modules__content-slider .card'),
        activeSlideArrowThird = document.querySelectorAll('.card__controls-arrow'),
        thirdPagePrev = document.querySelector('.modules__info-btns--third .slick-prev'),
        thirdPageNext = document.querySelector('.modules__info-btns--third .slick-next');

    function nextMiniSlideThird(item) {
        thirdPageSlideIndex += item;
        showMiniSlides(thirdPageSlideIndex, thirdPageSlides, activeSlideArrowThird);
    };

    thirdPagePrev.addEventListener('click', function() {
        nextMiniSlideThird(-1);
        swapSlides(thirdPageSliderWrapper, thirdPageSlides, 'card-active', false);
    });

    thirdPageNext.addEventListener('click', function() {
        nextMiniSlideThird(1);
        swapSlides(thirdPageSliderWrapper, thirdPageSlides, 'card-active', true);
    });

    setInterval(function() {
        console.log('yo');
        nextMiniSlideThird(1);
        swapSlides(thirdPageSliderWrapper, thirdPageSlides, 'card-active', true);
    }, 4000);

    // Slider on the fifth page
    let fifthPageSlideIndex = 1,
        fifthPageSliderWrapper = document.querySelector('.feed__slider'),
        fifthPageSlides = document.querySelectorAll('.feed__item'),
        fifthPagePrev = document.querySelector('.feed__controls .slick-prev'),
        fifthPageNext = document.querySelector('.feed__controls .slick-next');

    function nextMiniSlideFifth(item) {
        fifthPageSlideIndex += item;
        showMiniSlides(fifthPageSlideIndex, fifthPageSlides, '');
    };

    fifthPagePrev.addEventListener('click', function() {
        nextMiniSlideFifth(-1);
        swapSlides(fifthPageSliderWrapper, fifthPageSlides, 'feed__item-active', false);
    });

    fifthPageNext.addEventListener('click', function() {
        nextMiniSlideFifth(1);
        swapSlides(fifthPageSliderWrapper, fifthPageSlides, 'feed__item-active', true);
    });



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

    // Validation form on slide 4

    let message = {
        loading: '<img src="./img/ajax-loader.gif">',
        success: '<img src="./img/success.svg">',
        failure: '<img src="./img/error.svg">'
    };

    let form = document.querySelector('.form'),
        scheduleForm = document.querySelector('.form__schedule'),
        input = document.querySelectorAll('.form__item input'),
        scheduleInput = document.querySelectorAll('.form__block div input'),
        statusIcon = document.createElement('div');

    console.log('Input length:' + scheduleInput.length);

    function sendJSONData(element, status, inputs) {
        element.addEventListener('submit', function(e) {
            e.preventDefault();
            statusIcon.classList.add(status);
            let formStatus = element.querySelector('.form__status');
            formStatus.appendChild(statusIcon);
            let formData = new FormData(element);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function() {
                        if (request.readyState < 4) {
                            resolve();
                        }
                        else if (request.readyState === 4) {
                            if (request.status == 200) {
                                resolve();
                            }
                            else {
                                reject();
                            }
                        }
                    }
                    request.send(data);
                });
            }

        function clearInput() {
            // for (let i = 0; i < inputs.length; i++) {
            //     inputs[i].value = '';
            // }
            inputs.forEach(function(element) {
                element.value = '';
            })
        }

        postData(formData)
                        .then(() => statusIcon.innerHTML = message.loading)
                        .then(() => statusIcon.innerHTML = message.success)
                        .catch(() => statusIcon.innerHTML = message.failure)
                        .then(clearInput);
        });
    }

    sendJSONData(form, 'status-abs', scheduleInput);
    sendJSONData(scheduleForm, 'status-abs', input);


    // Email field restrains

    let emailInputs = document.querySelectorAll('input[type="email"]');

    emailInputs.forEach(function(element) {
        element.addEventListener('input', function() {
            this.value = this.value.replace (/[А-Яа-яёЁ]/, '');
        });
    });

    // Phone mask with USA code

    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
    }

    function mask(event) {
        let matrix = "+1 (___) ___ __ __", 
            i = 0,
            def = matrix.replace(/\D/g, ""), 
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });
        if (event.type == "blur") { 
            if (this.value.length == 2) this.value = "" 
        } else setCursorPosition(this.value.length, this)
    };

    let phoneInput = document.querySelector('#phone');
    phoneInput.addEventListener("input", mask, false);
    phoneInput.addEventListener("focus", mask, false);
    phoneInput.addEventListener("blur", mask, false);

    // Input restriction for When field

    let whenInput = document.querySelector('input[type="datetime"]');

    whenInput.addEventListener('input', function() {
        this.value = this.value.replace (/[^0-9/.]/, '');
    });


});