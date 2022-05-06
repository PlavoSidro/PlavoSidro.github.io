$(document).ready(function(){

    //za parsanje html i18n attributa
//    $.i18n().locale = 'hr';
//    $('body').i18n();

    $('.switch-locale').on('click', function(){

        var lang = $(this).data('locale');
        console.log(lang)
        $('html').attr('lang', lang);
        $.i18n().locale = lang;
        $('body').i18n();
    })
});

$.i18n().load({
    "hr": "./i18n/hr.json",
    "en": "./i18n/en.json",
    "de": "./i18n/de.json"
});