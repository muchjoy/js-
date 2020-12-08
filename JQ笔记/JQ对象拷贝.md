# jQuery对象拷贝
    如果想要把某个对象拷贝(合并)给另外一个对象使用,此时可以使用$.extend()方法   (类似于原生js的cloneNode)
+   语法:
    $.extend([deep] , target , object1,[objectN])
+   参数:
    1.deep: 如果设置为true为深度拷贝,默认false 浅度拷贝
    2.target:要拷贝的目标对象
    3.object1:待拷贝到第一个对象的对象
    4.objectN:待拷贝到第N个对象的对象
    5.浅拷贝是把拷贝的对象复杂数据类型中的`地址`拷贝给目标对象,修改目标对象会影响被拷贝对象
````html
    <script>
        $(function () {
            //要拷贝的目标对象
            let targetObj = {
                id: 0
                msg: {
                    sex: "男"
                }
            };
            //待拷贝的对象
            let obj = {
                id: 1,
                name: "pink",
                msg: {
                    age: 18
                }
            };
            //对象拷贝
            $.extend(targetObj, obj);   //会覆盖targetObj里面原来的数据, msg对象中的age会覆盖掉sex
            console.log($.extend(targetObj, obj));
        })
    </script>
````
6. 深拷贝,前面加true,完全克隆`拷贝的对象,而不是地址`,修改目标对象不会影响被拷贝对象(深拷贝把里面的数据完全复制一份给目标对象,如果里面有不冲突的属性,会合并到一起)

 ````html
    <script>
        $(function () {
            let targetObj = {
                id: 0,
                msg: {
                    sex: "男"
                }

            };
            //待拷贝的对象
            let obj = {
                id: 1,
                name: "pink",
                msg: {
                    age: 18
                }
            };
            //对象拷贝
            $.extend(true, targetObj, obj);  //不会覆盖
            console.log(targetObj);
        })
    </script>
 ````
###jQuery多库共存
jquery使用$作为标示符,随着jQuery的流行,其他js库也会用这$作为标示符,这样一起使用会引起冲突
+ 内部实现
````html
    <script>
        $(function () {
            function $(ele) {
                return document.querySelector(ele);
            }
            $("div")
        })
    </script>
````
+ 解决方案
    1. 把里面的$符号 统一改为jQuery. 比如jQuery("div")
    2. jQuery变量规定新的名称: $.noConflict()  var xx = $.noConflict();
    3. 让jQuery 释放对$ 控制权让用户自己决定
      