/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/_difference.js":
/*!*************************************!*\
  !*** ./src/js/parts/_difference.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Functionality for the difference field

function Difference() {
    let btnShow1 = document.querySelector('.button-plus-1'),
        btnShow2 = document.querySelector('.button-plus-2'),
        parentBlock1 = document.querySelector('.officerold'),
        parentBlock2 = document.querySelector('.officernew');

    btnShow1.addEventListener('click', function() {
        addNewBlock(this, parentBlock1);
    });

    btnShow2.addEventListener('click', function() {
        addNewBlock(this, parentBlock2);
    });

    function addNewBlock(element, parentBlock) {
        let childBlocks = 0;
        for (let i = 0; i < parentBlock.childNodes.length; i++) {
            if (parentBlock.childNodes[i].className == 'officer__card-item diff-card') {
                childBlocks++;
            }
        }
        let cardWrapper = document.createElement('div'),
            cardTitle = document.createElement('div'),
            cardDescription = document.createElement('div');

        cardWrapper.classList.add('officer__card-item');
        cardWrapper.classList.add('diff-card');
        cardTitle.classList.add('card__counter');
        cardDescription.classList.add('card__descr');

        console.log(childBlocks);
        cardTitle.textContent = '0' + (childBlocks+1);
        cardWrapper.appendChild(cardTitle);
        if (childBlocks == 0) {
            cardDescription.textContent = 'First step with some text and explanation';         
        }
        if (childBlocks == 1) {
            cardDescription.textContent = 'Second step with some text and explanation';
        }
        if (childBlocks == 2) {
            cardDescription.textContent = 'Third step with some text and explanation';
            element.style.display = 'none';
        }
        cardWrapper.appendChild(cardDescription); 
        parentBlock.insertBefore(cardWrapper, parentBlock.children[parentBlock.childNodes.length-4]);
        console.log(parentBlock.childNodes.length-4);
    }
}

module.exports = Difference;


/***/ }),

/***/ "./src/js/parts/_form.js":
/*!*******************************!*\
  !*** ./src/js/parts/_form.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Validation form on slide 4

function ValidateForms() {
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
}

module.exports = ValidateForms;
    


/***/ }),

/***/ "./src/js/parts/_input_restraints.js":
/*!*******************************************!*\
  !*** ./src/js/parts/_input_restraints.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

 // Email field restrains

 function EmailRestraint() {
    let emailInputs = document.querySelectorAll('input[type="email"]');

    emailInputs.forEach(function(element) {
        element.addEventListener('input', function() {
            this.value = this.value.replace (/[А-Яа-яёЁ]/, '');
        });
    });
 }
 
 // Phone mask with USA code

 function PhoneMask() {
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
 }

 // Input restriction for When field

 function WhenRestraint() {
    let whenInput = document.querySelector('input[type="datetime"]');

    whenInput.addEventListener('input', function() {
        this.value = this.value.replace (/[^0-9/.]/, '');
    });
 }

 module.exports = {
     EmailRestraint: EmailRestraint,
     PhoneMask: PhoneMask,
     WhenRestraint: WhenRestraint
 }


/***/ }),

/***/ "./src/js/parts/_slider.js":
/*!*********************************!*\
  !*** ./src/js/parts/_slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Slider for the main page


function mainPageSliders() {
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
}

function ModulesPageSliders() {
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
}

module.exports = {
    mainPageSliders: mainPageSliders,
    ModulesPageSliders: ModulesPageSliders
}


/***/ }),

/***/ "./src/js/parts/_video.js":
/*!********************************!*\
  !*** ./src/js/parts/_video.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const restraints = __webpack_require__(/*! ./parts/_input_restraints */ "./src/js/parts/_input_restraints.js"),
        difference = __webpack_require__(/*! ./parts/_difference */ "./src/js/parts/_difference.js"),
        video = __webpack_require__(/*! ./parts/_video */ "./src/js/parts/_video.js"),
        formValidation = __webpack_require__(/*! ./parts/_form */ "./src/js/parts/_form.js"),
        sliders = __webpack_require__(/*! ./parts/_slider */ "./src/js/parts/_slider.js");


window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    sliders.mainPageSliders();
    formValidation();

    restraints.EmailRestraint();
    restraints.PhoneMask();
    restraints.WhenRestraint();

    video.PlayVideoMainPage();
    difference();
});


/***/ })

/******/ });
//# sourceMappingURL=mainPage.js.map