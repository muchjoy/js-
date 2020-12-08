# jQuery 创建元素
+ 语法:
    `$("<li></li>");`
    动态的创建了一个<li>
+ html()创建
$("div").html("<h1>我是创建的</h1>")
###添加元素
####内部添加
+  **element.append("内容");**
    `$("ul").append(li)`
    把内容放入匹配元素内部最后面,类似原生appendChild
+   **("内容").appendTo.($(element))**
    `li.appendTo($("ul"))`
    把内容放到匹配元素内部最后面,类似append()
+   **element.prepend("内容");**
    `$("ul").prepend(li)`
    内部添加并且放到内容的最前面
+   **("内容").prependTo($(element))**
    `li.prependTo($("ul"))`
    内部添加并且把内容放到元素的最前面
####外部添加
+   **element.after("内容")**
    把内容放入目标元素后面
+   **element.before("内容")**
    把内容放入目标元素前面
+ 注意:
    1. 内部添加元素,生成之后,他们是父子关系
    2. 外部添加元素,生成之后,他们是兄弟关系
###删除元素
+   **element.remove()**
    删除匹配的元素(本身)(自杀)
    `$("ul").remove();    //删除ul`
+   **element.empty()**
    删除匹配的元素集合中所有的子节点(所有的孩子)
+   **element.html("")**
    清空匹配的元素内容 (子节点 孩子)
###克隆clone()
+    

