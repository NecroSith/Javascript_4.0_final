window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let slideIndex = 1,
        slides = document.querySelectorAll('.module-slide'),
        prev = document.querySelectorAll('.prev'),
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

    function currentSlide(item) {
        showSlides(slideIndex = item);
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

});