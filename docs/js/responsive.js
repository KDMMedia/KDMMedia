$(document).ready(function () {
    // Function to check screen width and add/remove class accordingly
    function checkScreenWidth() {
        if ($(window).width() < 600) {
            $('#buttondiv').addClass('text-center');
        } else {
            $('#buttondiv').removeClass('text-center');
        }

        
    }

    // Execute the function on page load
    checkScreenWidth();

    // Execute the function whenever the window is resized
    $(window).resize(function () {
        checkScreenWidth();
    });
});