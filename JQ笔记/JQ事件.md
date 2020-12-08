# jQuery事件
###单个事件注册
+   语法:
    element.事件(function(){});
    $("div").click(function(){
        事件处理程序
    });
其他事件和原生基本一致 (单个事件注册)
比如    mouseover mouseout blur focus change keydown resize scroll 
###jQuery事件处理
+   事件处理on()绑定事件
    on()方法在匹配元素上绑定一个或多个事件的事件处理函数
+   语法:
    element.on(events,[selector],fn)
    1. events:一个或多个用空格分隔的事件类型,如"click"或"keydown"
    2. selector: 元素的子元素选择器
    3. fn:回调函数,即绑定在元素身上的侦听函数
````html
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: brown;
        }
    </style>
    <script src="jQuery.js"></script>
    <script>
        $(function () {
            //单个事件注册
            // $("div").click(function () {
            //     $(this).css("backgroundColor", "pink")
            // });
            // $("div").mouseenter(function () {
            //     $(this).css("backgroundColor", "skyblue")
            // });

            //事件处理on
            $("div").on({            
                mouseenter: function () {
                    $(this).css("backgroundColor", "skyblue")
                },
                click: function () {
                    $(this).css("backgroundColor", "pink")
                },
                mouseleave: function () {
                    $(this).css("backgroundColor", "#bfa")

                }
            })





        })
    </script>
</head>

<body>
    <div></div>
</body>
````
####on()方法优势1:
+    可以绑定多个事件,多个处理事件处理程序
````html
            $("div").on({            
                mouseenter: function () {},
                click: function () {},
                mouseleave: function () {}
            });
````
+    如果事件处理程序相同
    ````html
    $("div").on("mouseenter mouseleave", function () {
    $(this).toggleClass("current")
    })
    ````
####on()方法优势2:
+   可以事件委派操作,事件委派的定义就是,把原来加给子元素身上的事件绑定在父元素身上,就是把事件委派给父元素
````html
    //on可以实现事件委派(委派)  click是绑定ul身上的,但是触发的对象是ul里面的小li
    $("ul").on("click", "li", function () {
        alert(1)
    });
````
####on()方法优势3:
+   动态创建的元素,click()没有办法绑定事件,on()可以给动态生成的元素绑定事件
````html
    //on可以给动态创建的元素绑定事件
    $("ul").on("click", "li", function () {
        alert(1)
    });
    var li = $("<li>我是后来创建的</li>");
    $("ul").append(li);
````
###事件处理 off() 解绑事件
+   off()方法可以移除通过on()方法添加的事件处理程序
````
    $("div").off();       //这个是解除了div身上所有的事件
    $("div").off("click") //这个是接触了div身上的点击事件
    %("ul").off("click" , "li");    //解绑事件委托
````
    如果有的事件只想触发一次,可以使用one()来绑定事件
+   one() 
    使用方法和on()相似,但是它只能触发一次  
###自动触发事件
    有些事件希望自动触发,比如轮播图自动播放功能跟点击右侧按钮一致,可以利用定时器自动触发右侧按钮点击事件,不必鼠标点击触发
+   element.click()     //第一种简写    会触发默认行为
    `$("div").click();`
+   element.trigger("type") //第二种自动触发模式    会触发默认行为
    `$("div").trigger("click");`
+   element.triggerHandler(type)    //第三种自动触发模式  就是不会触发默认行为
    `$("div").triggerHandler("click")`