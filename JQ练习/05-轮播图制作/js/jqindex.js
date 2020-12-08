$(function () {
    //1.鼠标滑入左右侧导航显示
    $(".focus").hover(function () {
        //滑入显示
        $(".arrow-l").stop().fadeIn(500)
        $(".arrow-r").stop().fadeIn(500)
        //滑入关闭定时器
        clearInterval(timer);
        timer = null;

    }, function () {
        //滑出隐藏
        $(".arrow-l").stop().fadeOut(500)
        $(".arrow-r").stop().fadeOut(500)
        //滑出启动定时器
        timer = setInterval(function () {
            $(".arrow-r").click();
        }, 2000)
    });

    //动态创建下面的导航
    $(".focus ul li").each(function (i, n) {
        //创建li
        let li = $("<li></li>");
        //奖li添加到ol中
        $(".circle").append(li)
    });
    //小导航单击事件
    $(".circle li").eq(0).addClass("current")

    $(".circle li").on("click", function () {
        //点击小导航,颜色改变
        $(this).addClass("current").siblings().removeClass("current")
        //修改对应的图片
        //获取索引
        let index = $(this).index();
        //修改对应的图片
        num = index;
        inx = index;
        // console.log(index)
        $(".focus ul").animate({

            left: -index * $(".focus ul li").width()
        }, 500);

    })
    //单击左右两边导航进行切换图片
    //克隆最后一张图片
    let li = $(".focus ul li").eq(0).clone();
    $(".focus ul").append(li);
    // console.log($(".focus ul li").length - 1)   //4
    //设置一个变量用于图片切换
    let num = 0;
    //设置一个变量用于小导航的切换
    let inx = 0;
    //左边按钮
    $(".arrow-l").on("click", function () {
        // console.log(($(".focus ul li").length - 1) * $(".focus ul li").width());
        if (num == 0) {
            num = $(".focus ul li").length - 1;

            $(".focus ul").css("left", -num * $(".focus ul li").width())


        }
        num--;
        $(".focus ul").stop().animate({

            left: -num * $(".focus ul li").width()
        }, 500);
        //小图标改变
        inx--;
        inx = inx < 0 ? inx = $(".circle li").length - 1 : inx
        $(".circle li").eq(inx).addClass("current").siblings().removeClass("current")

    });
    //右边按钮
    $(".arrow-r").on("click", function () {
        if (num == $(".focus ul li").length - 1) {
            $(".focus ul").css("left", 0)
            num = 0
        }

        num++;
        $(".focus ul").stop().animate({

            left: - num * $(".focus ul li").width()
        }, 500);

        inx++;
        inx = inx == $(".focus ul li").length - 1 ? inx = 0 : inx
        $(".circle li").eq(inx).addClass("current").siblings().removeClass("current")

    });

    //定时器
    let timer = setInterval(function () {
        $(".arrow-r").click();
    }, 2000)

});