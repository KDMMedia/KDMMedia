var prevScrollpos = window.pageYOffset;
var nav = document.querySelector("nav");
var nav2 = document.getElementById("navwebandhost")
var scrolledUp = false;

window.addEventListener("scroll", function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollpos) {
        // Scrolling down
        nav.classList.add("hide");
        if (nav2) {
            nav2.classList.add("hide2");
        }
        scrolledUp = false;
    } else {
        // Scrolling up
        if (!scrolledUp) {
            nav.classList.remove("hide");
            if (nav2) {
                nav2.classList.remove("hide2");
            }
            scrolledUp = true;
        }
    }
    prevScrollpos = currentScrollPos;
});
