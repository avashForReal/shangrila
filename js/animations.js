// Hide Header on on scroll down 
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var homeNavHeight = $('#nav').outerHeight();



$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        //navColor();
        didScroll = false;
    }
}, 250);

/*
function navColor() {
    if ($(document).scrollTop() > 100) {
        $('nav').addClass('bg-white');
    } else {
        $('nav').removeClass('bg-white');
    }
} */

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > (homeNavHeight || layoutNavHeight)) {
        // Scroll Down
        //add white bg to nav after scrolling the height of nav
        $('#mobilemenu').removeClass('visible').addClass('hidden');
        $('#nav').removeClass('top-0').addClass('-top-24');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {

            $('#nav').removeClass('-top-24').addClass('top-0');

        }
    }

    lastScrollTop = st;

}