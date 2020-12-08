# jQuery尺寸 位置操作
+   jQuery 尺寸
####width() height()
    取得匹配元素宽度和高度值,只算width/heigth
####innerWidth() / innerHeight()
    取得匹配元素宽度和高度值 包含padding
####outerWidth() / outerHeight()
    取得匹配元素宽度和高度值 包含padding border
####outerWidth(true) / outerHeight(true) 
    取得匹配元素宽度和高度值 包含 padding  border margin
+   以上参数为空,则是获取相应的值,返回的是数字型
    如果参数为数字,则是修改相应的值
# jQuery 位置
    位置主要有三个: offset() position() scrollTop()/scrollLeft()
###offset()设置或获取元素偏移
    1.offset()方法设置或返回被选元素相对于文档的偏移坐标,跟父级没有关系
    2.该方法有2个属性left top. offset().top用于获取距离文档顶部的距离,offset().left用于获取距离文档 左侧的距离
    3.可以设置元素的偏移: offset({ top : 10 ; left : 30})
###position()获取元素偏移
    1.position()方法用于返回被选元素相对于带有定位的父级偏移坐标,如果父级都没有定位,则以文档为准
    2.只能获取不能设置
###scrollTop() / scrollLeft()设置或获取元素被卷去的头部和左侧
    1.scrollTop()方法设置或返回被选元素被卷去的头部

+   尺寸位置
        1.获取元素的大小（内容）
          width() 
          height()  
            用法： $(ele).width()  $(ele).height()  
        2.获取元素的大小（内容+padding）
          innerWidth()  
          innerHeight()  
        3.获取元素的大小（内容+padding+border）
          outerWidth()
          outerHeight()
        4.获取元素的大小（内容+padding+border+margin）
           outerWidth(true)
          outerHeight(true)
        1.获取距离文档的距离：
            offset()
            获取：
                offset().top
                offset().left
            设置：
                offset({
                    top:100,
                    left:100
                })
        2.获取距离父元素的距离：
            position()
             获取：
                position().top
                position().left
            不可以设置值
        3.获取滚动出去的距离：
            scrollTop()    
            scrollLeft() 
            设置：
                scrollTop(100)  
                scrollLeft(100)    
  