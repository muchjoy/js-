# jQuery 选择器
+ 1.1 jQuery基础选择器
    原生js获取元素的方式很多,很杂,而且兼容性情况不一致,因此jQuery给我们做了封装,使获取元素统一标准
    `$("选择器")  //里面选择器直接写CSS选择器即可,但是要加引号`
+ ![jq选择器](C:\Users\29247\Desktop\JQ笔记\jq选择器.png)
+ ![层级选择器](C:\Users\29247\Desktop\JQ笔记\层级选择器.png)
+ ![选择器](C:\Users\29247\Desktop\JQ笔记\选择器.png)


###jQuery设置样式
    `$('div').css('属性','值')`
###隐式迭代 
    就是把匹配的所有元素内部进行遍历循环,给每一个元素添加css这个方法
###jQuery筛选
    父: parent()
        返回的是最近一级的父级元素 亲爸爸 
    子: 
        1. children()  亲儿子 子代选择器
        2. find()   可以选里面所有的孩子,包括儿子和孙子  类似于后代选择器
    兄:
        siblings()  除了自身元素之外的所有亲兄弟
    第n个元素
        1.我们可以利用选择器的方式选择
        $('ul li:eq(2)').css('color','blue')
        2.我们可以用选择方法的方式选择,更推荐这种写法
        $('ul li').eq(2).css('color','blue')

+   show() :    显示
+   hide()  :   隐藏
+   $(this).index() 得到当前元素索引号
+   end() 断链   结束当前的this , 返回上一级的this
+   ![筛选方法](C:\Users\29247\Desktop\JQ笔记\筛选方法.png)
# jquery 排他思想
+
````html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="jQuery.js"></script>
    <script>
        $(function () {
            $('button').click(function () {
                //选择点击的那个修改背景颜色
                $(this).css("backgroundColor", "pink");
                //选择被点击的button兄弟
                $(this).siblings("button").css("background", "");

            })
        })
    </script>
</head>

<body>
    <button>点击</button>
    <button>点击</button>
    <button>点击</button>
    <button>点击</button>
    <button>点击</button>
    <button>点击</button>
</body>

</html>
````
