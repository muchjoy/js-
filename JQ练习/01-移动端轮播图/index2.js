window.onload = function () {
    var focus = document.querySelector(".focus");
    var focuswidth = focus.offsetWidth;
    var ul = focus.children[0];
    var ol = focus.children[1];

    var first = ul.querySelector("li:first-child");
    var last = ul.querySelector("li:last-child");
    ul.insertBefore(last.cloneNode(true), first);
    ul.appendChild(first.cloneNode(true));
    var lis = ul.querySelectorAll("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.width = focuswidth + "px";
    }
    ul.style.width = lis.length * focuswidth + "px";
    ul.style.width = -focuswidth + "px";

    var index = 0;
    var timer = setInterval(function () {
        index++;
        ul.style.transition = "all 0.3s";
        ul.style.transform = "translateX(" + -index * focuswidth + "px)";
    }, 1000);
    ul.addEventListener("transitionend", function () {
        if (index >= 3) {
            index = 0;
            ul.style.transition = "none";
            ul.style.transform = "translateX(" + -index * focuswidth + "px)"
        } else if (index < 0) {
            index = 2;
            ul.style.transition = "none";
            ul.style.transform = "translateX(" + -index * focuswidth + ")"
        }
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    });
    var startx = 0;
    var movex = 0;
    ul.addEventListener("touchstart", function (e) {
        startx = e.targetTouches[0].pageX;
        clearInterval(timer);
    })
    ul.addEventListener("touchmove", function (e) {
        movex = e.targetTouches[0].pageX - startx;
        ul.style.transition = "none";
        ul.style.transform = "translateX(" + -index * focuswidth + movex + "px)"
    })
}