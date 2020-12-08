window.addEventListener("load", function () {
    //获取元素
    let focus = document.querySelector(".focus");
    let ul = focus.children[0];
    //设置一个变量用来当图片索引
    let index = 0;
    let w = focus.offsetWidth;
    let ol = focus.children[1];
    //定时器
    let timer = setInterval(() => {
        index++;
        let translatex = -index * w;

        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translatex + 'px)'

    }, 2000);
    //监听过渡事件
    ul.addEventListener("transitionend", () => {
        //判断index
        if (index >= 3) {
            //重置index
            index = 0;
            //手指滑动关闭过度
            ul.style.transition = 'none';
            let translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)'

        } else if (index < 0) {
            //重置index
            index = 2;
            //手指滑动关闭过度
            ul.style.transition = 'none';
            let translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)'
        };
        //小圆点操作
        //去除当前小圆点的样式
        ol.querySelector('.current').classList.remove("current");
        //为当前小圆点添加类名
        ol.children[index].classList.add('current');
    });

    //手指滑动效果
    //设置变量记录初始位置, 移动位置
    let start = 0;
    let movex = 0;
    //手指触摸事件
    ul.addEventListener("touchstart", (e) => {
        // alert(1)
        //记录初始位置
        start = e.targetTouches[0].pageX;
        // console.log(start);
        //手指触摸到 就停止定时器
        clearInterval(timer);
    });


    //手机滑动事件
    ul.addEventListener("touchmove", (e) => {
        //记录移动后的位置
        movex = e.targetTouches[0].pageX - start;
        // console.log(start);
        let translatex = -index * w + movex;

        ul.style.transform = 'translateX(' + translatex + 'px)'

    });

    //手指离开时翻页
    ul.addEventListener("touchend", () => {
        //进行判断movex 是否大于50
        if (Math.abs(movex) >= 50) {
            //判断movex是正值还是负值
            if (movex > 0) {
                //  向右划, 切换上一张
                index--;
            } else if (movex < 0) {
                //  向左划  切换下一张
                index++;
            }

            ul.style.transition = 'all .3s';
            let translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)'
        } else {
            ul.style.transition = 'all .3s';
            let translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)'
        }

        movex = 0;
        //手指移开时启动定时器
        timer = setInterval(function () {


            index++;
            let translatex = -index * w;

            ul.style.transition = 'all .3s'
            ul.style.transform = 'translateX(' + translatex + 'px)'

        }, 2000);
    });

    //手机点击返回顶部
    let goBack = document.querySelector(".goBack");
    let nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        // alert(1)
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = "block"
        } else {
            goBack.style.display = "none"

        };

        //点击事件
        goBack.addEventListener("click", () => {
            window.scroll(0, 0)
        })
    })


});

