const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {



        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});

var responsiveSlider = function() {
    var slider = document.getElementById("slides");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementsByClassName("slide_img");
    var count = 1;
    var items = slideList.document.querySelectorAll("slide_img").length;
    var prev = document.getElementsByClassName("prev");
    var next = document.getElementsByClassName("next");

    window.addEventListener('reset', function() {
        sliderWidth = slider.offsetWidth;
    });

    var nextSlide = function() {
        if (count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        } else if (count == items) {
            slideList.style.left = "0px";
            count = 1;
        }
    };

    next.addEventListener("click", function() {
        nextSlide();
    });

    setInterval(function() {
        nextSlide()
    }, 5000);

};

window.onload = function() {
    responsiveSlider();
}