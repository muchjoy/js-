//入口函数
$(function () {
    let moveArry = [
        { "width": 257, "height": 143, "left": -134, "top": 164, "opacity": 0 },
        { "width": 513, "height": 285, "left": 0, "top": 93, "opacity": 1 },
        { "width": 800, "height": 445, "left": 200, "top": 0, "opacity": 1 },
        { "width": 513, "height": 285, "left": 687, "top": 93, "opacity": 1 },
        { "width": 257, "height": 143, "left": 1060, "top": 164, "opacity": 0 }
    ];

    //设置数组保存zIndex 数值
    let arr = [1, 2, 3, 2, 1];



    //遍历li  
    //将数组中的每一个元素 和 arr数组中每一个元素 添加到li   
    // $.each(".box_img li", function (i, n) {
    //     $(".box_img li").eq(i).css("zIndex", arr[i]).stop().animate(moveArry[i])
    // })                //报错

    $(".box_img li").each(function (i, n) {
        $(".box_img li").eq(i).css("zIndex", arr[i]).stop().animate(moveArry[i])
    })


    // 添加鼠标移入移出 小三角淡入淡出
    $(".box").hover(function () {
        //鼠标移入
        //右边
        $(".right_btn").stop().fadeIn(500)
        //左边
        $(".left_btn").stop().fadeIn(500)
    }, function () {
        //鼠标移出
        //三角淡出
        $(".right_btn").stop().fadeOut(500)
        //左边
        $(".left_btn").stop().fadeOut(500)
    })
    //设置一个变量用来储存图片的索引
    let inx = 0;
    //添加右边的单击事件
    $(".right_btn").on("click", function () {
        inx++;
        //点击右边的按钮
        //数组的末尾被删除同时添加到数组的第一位  unshift()添加数组第一位        pop()删除数组最后一个
        //先修改数组元素的位置
        moveArry.unshift(moveArry.pop());
        arr.unshift(arr.pop());
        //然后在添加到li里面
        $(".box_img li").each(function (i, n) {

            $(".box_img li").eq(i).css("zIndex", arr[i]).stop().animate(moveArry[i])

        })
        //为当前显示的图片添加导航背景样式 
        //判断
        if (inx > 4) {
            inx = 0
        }
        $("ol li").eq(inx).addClass("cur").siblings().removeClass("cur");


    })
    //添加左边边的单击事件
    $(".left_btn").on("click", function () {
        inx--;
        //点击右边的按钮
        //数组的末尾被删除同时添加到数组的第一位  unshift()添加数组第一位        pop()删除数组最后一个

        moveArry.push(moveArry.shift())
        arr.push(arr.shift());
        $(".box_img li").each(function (i, n) {
            $(".box_img li").eq(i).css("zIndex", arr[i]).stop().animate(moveArry[i])
        })
        //为当前显示的图片添加导航背景样式 
        //判断
        if (inx < 0) {
            inx = 4
        }
        $("ol li").eq(inx).addClass("cur").siblings().removeClass("cur");
    });

    //定时器
    setInterval(function () {
        $(".right_btn").click()

    }, 2000)

});