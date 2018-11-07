// Accordeon 


function Accordeon() {
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
}

module.exports = Accordeon;
    