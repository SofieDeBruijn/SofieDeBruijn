// var lastScrollTop = 0;
// var goUp          = false;
// var goUpVal       = 0;
// $(window).scroll(function(event){
//     var st         = $(this).scrollTop();
//     console.log('QQQ st: ', st);
//     if (st > lastScrollTop){ // downscroll code
//         goUp = false;
//         if (st >= 100){
//             $('.page-header').addClass('off-canvas');
//         }
//     } else { // upscroll code
//         if (!goUp) {
//             goUp    = true;
//             goUpVal = st;
//         }
//         if (goUpVal - st >= 350 || st === 0) {
//             $('.page-header').removeClass('off-canvas');
//         }
//     }
//     lastScrollTop = st;
// });


/*
 * Shows the fixed header when, scrolling down, the static header disappears
 */
// Clone the header html into the hidden div
$("header").clone().appendTo("#fading-header");

// Get the header height
var headerHeight = $("header").outerHeight();

// Scrolling down it slides down/up the fixed header
$(window).on('scroll', function() {
    if ($(this).scrollTop() > headerHeight) {
        $("#fading-header").slideDown(); // or fade in with .fadeIn()
    } else {
        $("#fading-header").slideUp(); // or fade out with .fadeIn
    }
});
