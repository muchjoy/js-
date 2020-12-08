# jQuery元素操作
+   主要时遍历,创建,添加,删除元素操作
## 遍历元素
    jQuery隐式迭代是对同一类元素做了同样的操作,如果想要给同一类元素做不同操作,就需要用到遍历
####each() 方法     //原生js中的for循环
    each() 方法  用来遍历元素
+   语法:
    $('div').each(function(index , domEle) {
        xxxx;
    })
+   参数:
    1.each()方法遍历匹配的每一个元素.主要用DOM处理,each()每一个
    2.里面的回调函数有2个参数 : 
        index是每个元素的索引号(可以自己指定索引号名称);    
        demEle`是每个DOM元素对象,不是jquery对象`;(一定是DOM元素对象)
####$.each()    //类似于原生JS的 for in
    $.each(object , function ( index , element) {
        xxxx;
    });
+   1.$each()方法可用于遍历任何对象,主要用于数据处理,比如数组,对象
+   2.里面的函数有2个参数 : index是每一个元素的索引号;element遍历内容

