#   jQuery效果
+   最常见得如下
    显示隐藏    滑动    淡入淡出    自定义动画
###显示隐藏
####   show()
+   显示语法规范
    show([speed,[easing],[fn]])
+   显示参数
    1.参数都可以省略,无动画直接显示
    2.speed:三种预定速度之一得字符串("slow" , 'normal' ,or 'fast')或表示动画时长得毫秒数值(如: 1000)
    3.easing:(Optional)用来指定切换效果,默认是"swing",可用参数"linear".
    4.fn:回调函数,在动画完成时执行得函数,每个元素执行一次
####    hide()  隐藏
    隐藏参数与显示参数一样
####    toggle()切换
    点击切换点击隐藏
````html
    <style>
        .box {
            width: 150px;
            height: 300px;
            background-color: pink;
        }
    </style>
    <script src="jQuery.js"></script>
    <script>
        $(function () {
            //获取隐藏按钮  点击隐藏
            $("button").eq(1).click(function () {
                $('.box').hide(1000)
            });
            //获取显示按钮  点击显示
            $('button').eq(0).click(function () {
                $('.box').show(1000)
            });
            //获取切换按钮,点击切换显示或隐藏
            $('button').eq(2).click(function () {
                $('.box').toggle(1000);
            })
        });
    </script>
</head>

<body>
    <button>显示</button>
    <button>隐藏</button>
    <button>切换</button>
    <br>
    <div class="box"></div>
</body>
````
###滑动
#### slideDown()    下拉滑动
#### slideUp()  上拉滑动
#### slideToggle()  滑动切换
+   案例
````html
    <style>
        div {
            width: 150px;
            height: 300px;
            background-color: pink;
            display: none;
        }
    </style>
    <script src="jQuery.js"></script>
    <script>
        $(function () {
            //下滑动
            $("button").eq(0).click(function () {
                $('div').slideDown(500)
            });
            //上滑动
            $("button").eq(1).click(function () {
                $('div').slideUp(500)
            })
            //滑动切换
            $("button").eq(2).click(function () {
                $('div').slideToggle(500)
            })
        })
    </script>
</head>

<body>
    <button>下滑动</button>
    <button>上滑动</button>
    <button>切换滑动</button>
    <br>
    <div></div>
</body>
````

###事件切换
    hover([over,]out)
    1. over 鼠标移动到元素上要出发得函数(相当于mouseenter)
    2. out  鼠标移出元素要触发的函数(相当于mouseleave)
    如果只写一个函数,那么鼠标经过和鼠标离开都会触发这个函数  可以配合slideToggle()
````html
    <script>
        //事件切换 hover 就是鼠标经过和离开的复合写法
        // $('.nav>li').hover(function () {
        //     $(this).children('ul').slideDown(500)
        // }, function () {
        //     $(this).children('ul').slideUp(500)
        // })
        //事件切换 hover 如果只写一个函数,那么鼠标经过和鼠标离开都会触发这个函数
        $('.nav>li').hover(function () {
            $(this).children("ul").slideToggle(500)
        })
    </script>
````
####动画队列及其停止排队的方法
+   1. 动画或效果队列
        动画或者效果一旦触发就会执行,如果多次触发,就造成多个动画或者效果排队执行
+   2. 停止排队
        stop()  方法必须写到动画的前面
        1.stop()方法用于停止动画或效果
        2.注意: stop()写到动画或者效果的`前面,相当于停止结束上一次动画`
````html
        $('.nav>li').hover(function () {
            $(this).children("ul").stop().slideToggle(500)
        })
````
###淡入淡出
#### fadeIn()
+    1.淡入效果语法规范
    fadeIn([speed,[easing],[fn]])
+    2.淡入效果参数
    1. 参数都可以省略,无动画直接显示
    2. speed:三种预定速度之一得字符串("slow" , 'normal' ,or 'fast')或表示动画时长得毫秒数值(如: 1000)
    3. easing:(Optional)用来指定切换效果,默认是"swing",可用参数"linear".
    4. fn:回调函数,在动画完成时执行得函数,每个元素执行一次
####fadeOut()
    参数与fadeIn一致
####fadeToggle()
    参数与fadeIn一致
+   案例:
````html
    <style>
        div {
            width: 150px;
            height: 300px;
            background-color: pink;
            display: none;
        }
    </style>
    <script src="jQuery.js"></script>
    <script>
        $(function () {
            //单击淡入
            $("button").eq(0).click(function () {
                $('div').fadeIn(500)
            })
            //单击淡出
            $("button").eq(1).click(function () {
                $('div').fadeOut(500)
            })
            //单击淡入
            $("button").eq(2).click(function () {
                $('div').fadeToggle(500)
            })
            //修改透明度
            $("button").eq(3).click(function () {
                $("div").fadeTo(500, .5);
            })
        })
    </script>
</head>

<body>
    <button>淡入</button>
    <button>淡出</button>
    <button>淡入淡出切换</button>
    <button>修改透明度</button>
    <br>
    <div></div>
</body>
````
 ####fadeTo()
+   1. 渐进式调整到指定的不透明度
    fadeTo([[speed],opacity,[easing],[fn]])
+   2. 效果参数 (速度和透明度必须写)
    1.opacity透明度必须写,取值0~1之间
    2.speed:三种预定速度之一得字符串("slow" , 'normal' ,or 'fast')或表示动画时长得毫秒数值(如: 1000). 必须写
    3.easing:(Optional)用来指定切换效果,默认是"swing",可用参数"linear".
````html
    <script>
        $(function () {
            $(".wrap li").hover(function () {
                //鼠标移动到当前li上,其余的li透明度减到0.5
                $(this).siblings().stop().fadeTo(400, 0.5);
            }, function () {
                //鼠标移出,其余的li透明度恢复到1
                $(this).siblings().stop().fadeTo(400, 1);
            })
        })
    </script>
````
###自定义动画 animate
+   1. 语法
    animate(params,[speed],[easing],[fn]) 
+   2. 参数
    1.params:`想要更改的样式属性,以对象的形式传递,必须写`,属性名可以不用带引号,如果是复合属性则需要采取驼峰命名法,其余参数都可以省略
    2.speed:三种预定速度之一得字符串("slow" , 'normal' ,or 'fast')或表示动画时长得毫秒数值(如: 1000)
    3.easing:(Optional)用来指定切换效果,默认是"swing",可用参数"linear".
    4.fn:回调函数,在动画完成时执行得函数,每个元素执行一次
````html
    <style>
        div {
            position: absolute;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
    <script src="jQuery.js"></script>
    <script>
        $(function () {
            $("button").click(function () {
                $("div").animate({
                    left: 300,
                    top: 300,
                    opacity: .4
                }, 1000)
            })
        })
    </script>
</head>

<body>
    <button>动起来</button>
    <div></div>
</body>

````