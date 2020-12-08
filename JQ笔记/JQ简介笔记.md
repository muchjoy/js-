# jQuery
javaScript库
    即library,是一个封装好的特定的集合(方法和函数),从封装一大堆函数的角度理解库,就是在这个库中,封装了很多预定先定义好的函数在里面,比如动画animate, hide, show,比如获取元素等
    简单理解:就是一个JS文件,里面对我们原生js代码进行了封装,存放到里面,这样我们可以高效的使用这些封装好的功能了.
    我们以前学的是原生js
###常见的javaScript库
    1.jQuery
    2.Prototype
    3.YUI
    4.Dojo
    5.Ext JS
    6.移动端的zepto
这些库都是对原生JavaScript的封装,内部都是用JavaScript实现的
,我们主要学习的是jQuery.
##JQuery概念
    jQuery是一个快速,简洁的JavaScript库,其设计的宗旨是'write Less , DO More',即倡导写更少的代码,做更多的事
    j 就是javaScript: Query查询:意思就是查询js,把js中的DOM操作做了封装,我们可以快速的查询使用里面的功能
###优点
    1. 轻量级.核心文件才几十kb,不会影响页面加载速度
    2.跨浏览器兼容,基本兼容了现在主流的浏览器
    3.链式编程,隐式迭代
    4.对事件,样式,动画支持,大大简化了DOM操作
    5.支持插件扩展开发,有着丰富的第三方的插件,例如:
        树形菜单,日期控件,轮播图等
    6.免费,开源
###jQuery基本使用
####jQuery的顶级对象$
    1. $是jQuery的别称,在代码中可以使用jQuery代替$,但一般为了方便,通常都直接使用$
    2. $是jQuery的顶级对象 ,相当于原生JavaScript中的window,把元素利用$包装成jQuery对象,就可以调用jQuery的方法
####jQuery对象和DOM对象
     DOM对象:
        用原生JS获取来的对象就是DOM对象
    jQuery对象:
        用jquery方式获取过来的对象是jQuery对象,本质:通过$把DOM元素进行了包装
        $('div');   //是一个jQuery对象 
注意:
    jquery对象只能使用jQuery方法,DOM对象则使用原生的JavaScript属性和方法
+   DOM对象与jQuery对象之间是可以相互转换的
    因为原生js比jquery更大,原生的一些属性和方法jquery没有给我们封装,要想使用这些属性和方法需要把jQuery对象转换为DOM对象才能使用
    1. DOM对象转换为jQuery对象: $(DOM对象)
        $('div')
        
    2. jQuery对象转换为DOM对象
        
        ```
        $('div')[index]    index 是索引号
        $('div').get(index)  index 是索引号
        ```
        
        
````html
<body>
    <video src="scene.mp4" muted></video>
    <script>
        /*
            DOM对象转换为jQuery对象
                
        */
        //1.我们直接获取视频,得到的就是jQuery对象
        // $("video");
        //2. 我们已经使用原生js获取过来DOM对象
        var myvideo = document.querySelector('video');
        //$(myvideo).play(); jquery里面没有play这个方法

        /*
           jQuery对象转换为DOM对象

       */
        // myvideo.play();
        //两种方式
        $('video')[0].play();
        $('video').get(0).play();

    </script>
</body>
````


