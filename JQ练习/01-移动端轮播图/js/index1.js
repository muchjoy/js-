window.onload = function () {
    //获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var ol = focus.children[1];
    //定义变量 让图片滑动相应的距离
    var index = 0;
    var w = focus.offsetWidth;
    //设置定时器，让图片自动轮播
    var timer = setInterval(function () {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .5s';
        ul.style.transform = "translateX(" + translatex + "px)";
    }, 2000)
    //取消监听过渡，当图片滑到最后一张时，让索引变成0，
    //并且取消过渡
    ul.addEventListener('transitionend', function () {
        if (index >= 3) {
            index = 0;
            var translatex = -index * w;
            ul.style.transition = 'none';
            ul.style.transform = "translateX(" + translatex + "px)";
        } else if (index < 0) {
            index = 2;
            var translatex = -index * w;
            ul.style.transition = 'none';
            ul.style.transform = "translateX(" + translatex + "px)";
        }
        //控制小圆点跟随图片滑动而滑动
        focus.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    })
    //手指拖动图片，获取手指在图片内的x坐标
    var startx = 0;
    var movex = 0;
    //单击获取坐标
    ul.addEventListener('touchstart', function (e) {
        startx = e.targetTouches[0].pageX;
        //当开始拖动图片时，清空计时器
        clearInterval(timer);
    })
    //当鼠标移动是获取坐标
    ul.addEventListener('touchmove', function (e) {
        //盒子要移动的距离
        movex = e.targetTouches[0].pageX - startx;
        var translatex = -index * w + movex;
        ul.style.transition = 'none';
        ul.style.transform = "translateX(" + translatex + "px)";
    })
    //当手指松开回弹效果
    ul.addEventListener('touchend', function () {
        //当拖动的图片大于某个值，就滑到下一张图片
        if (Math.abs(movex) > 50) {
            //鼠标向右移动
            if (movex > 0) {
                index--;
            } else {
                index++;
            }
            var translatex = -index * w;
            ul.style.transition = 'all .5s';
            ul.style.transform = "translateX(" + translatex + "px)";
        } else {
            var translatex = -index * w;
            ul.style.transition = 'all .5s';
            ul.style.transform = "translateX(" + translatex + "px)";
        }
        //当第一次移动时，movex的值会保留，当下一次滑动时，点击图片也会移动图片
        //所以要清空movex的值
        movex = 0;
        //当鼠标离开时，重新开启定时器
        timer = setInterval(function () {
            index++;
            var translatex = -index * w;
            ul.style.transition = 'all .5s';
            ul.style.transform = "translateX(" + translatex + "px)";
        }, 2000)
    })

}