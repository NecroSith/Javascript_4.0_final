const restraints = require('./parts/_input_restraints'),
        difference = require('./parts/_difference'),
        video = require('./parts/_video'),
        formValidation = require('./parts/_form'),
        sliders = require('./parts/_slider');


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
