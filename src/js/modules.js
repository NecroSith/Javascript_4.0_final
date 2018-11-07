const video = require('./parts/_video'),
        accordeon = require('./parts/_accordeon'),
        sliders = require('./parts/_slider');

window.addEventListener('DOMContentLoaded', function() {
    // 'use strict';

    video.PlayVideoModulesPage();
    sliders.ModulesPageSliders();
    accordeon();

});