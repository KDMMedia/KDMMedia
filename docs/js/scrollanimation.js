const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const targetElement = entry.target;
            const delay = targetElement.dataset.delay || 0;
            setTimeout(() => {
                targetElement.classList.add('show');
            }, delay);
        }
    });
});

const hiddenElementsLeft = document.querySelectorAll('.slide-left');
const hiddenElementsRight = document.querySelectorAll('.slide-right');
const hiddenElementsBottom = document.querySelectorAll('.slide-bottom');
const hiddenElementsTop = document.querySelectorAll('.slide-top');

hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsRight.forEach((el) => observer.observe(el));
hiddenElementsBottom.forEach((el) => observer.observe(el));
hiddenElementsTop.forEach((el) => observer.observe(el));
