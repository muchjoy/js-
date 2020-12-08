$(function () {
    getToop();
    //页面滚动到精品导航模块,显示侧导航栏,封装函数,调用
    //封住函数
    function getToop() {
        let toop = $(".recommend").offset().top;

        if ($(document).scrollTop() >= toop) {
            //大于显示
            $(".fixedtool").fadeIn()
        } else {
            $(".fixedtool").fadeOut();
        }
    }

    $(window).scroll(function () {
        getToop();
        //滑动到模块让对应的侧栏添加类
        $(".floor .w").each(function (i, ele) {
            // console.log($(ele).offset().top);
            if ($(document).scrollTop() >= $(ele).offset().top) {
                $(".fixedtool li").eq(i).addClass("current").siblings().removeClass()
            }
        })

    });

    //点击跳转模块
    $(".fixedtool li").click(function () {
        let floor = $(".floor .w").eq($(this).index()).offset().top;
        $("html,body").stop().animate({
            scrollTop: floor
        });
        //点击的li添加类,其兄弟移出类
        $(this).addClass("current").siblings().removeClass();
    });

})