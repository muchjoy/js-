#jQuery样式操作
+   操作css方法
    1. 参数只写属性名,则是`返回属性值` (带有单位的字符串)
        $(this).css('color')
    2. 参数是属性名,属性值,逗号分隔,是设置一组样式,属性必须加引号,值如果是数字可以不用跟单位和引号
        $(this).css("width",300)
    3. 参数可以是对象,方便设置多组样式,属性名和属性值用 : 隔开,属性可以不用加引号
        如果是复合属性,则必须采用驼峰命名法,如果值不是数字,则必须加引号
        $(this).css({
            width: 400,
            height: 400,
            backgroundColor : "red"
        })
+ 设置类样式方法
    作用等同于以前的classList,可以操作样式,注意操作类里面的参数不要加点

    ```
    1. 添加类   addClass()
       $("div").addClass("current");
       
    2. 删除类   removeClass()
       $('div').removeClass('current')
       
    3. 切换类   toggleClass()   
       $('div').toggleClass("current")
    ```

    
###类操作与className得区别
+ 原生JS中得className会覆盖元素原生里面得类名

+ jquery里面得类操作只是对指定得类进行操作,不影响原先得类名
        addClass相当于追加类名,不影响以前得类名
## 链式操作
    设置型可以链式操作
    获取型不可以链式操作

    
  

  

    