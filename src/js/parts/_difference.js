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
