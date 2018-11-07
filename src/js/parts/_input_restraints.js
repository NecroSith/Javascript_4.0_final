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
