//创建一个可以执行简单动画的函数
/*
    参数:
        obj:要执行动画的对象
        attr:要执行动画的样式,比如left top width height
        target:执行动画的目标位置
        speed:移动速度(正数向右,负数向左)
        callback:回调函数,这个函数将在动画执行完毕后执行
        
 
*/
function move(obj, attr, target, speed, callback) {
    //开启一个定时器时关闭当前元素的上一个定时器
    clearInterval(obj.timer);
    //获取目标位置
    /*
        getStyle()函数获得到的数值带有具体的符号
        通过parseInt()取出有效数字,便于后续运算
    */
    let current = parseInt(getStyle(obj, attr));
    //判断速度的正负值
    /*
        如果是0-800移动  速度是正值
        如果是800-0移动  速度是负值
    */
    if (current > target) {
        //由大到小  速度为负
        speed = -speed
    };
    //开启动画定时器
    //创建一个变量,用来保存定时器的标识
    obj.timer = setInterval(function () {
        //获取box1的attr原值
        let oldValue = parseInt(getStyle(obj, attr));
        //获取box1的新attr值
        let newValue = oldValue + speed;
        //判断newValue是否大于800
        /*
            向左移动时,需要判断newValue是否小于target
            向右移动时,需要判断newValue是否大于target
        */
        if (speed < 0 && newValue < target || speed > 0 && newValue > target) {
            newValue = target
        };
        //将新的attr值赋值到box1
        obj.style[attr] = newValue + "px";
        //当newValue等于target,
        if (newValue == target) {
            //当newValue等于target
            // 关闭定时器
            clearInterval(obj.timer);
            //调用回调函数callback
            callback && callback();
        }


    }, 30);
}

/*
    定义一个函数,用来获取指定元素的当前的样式
    参数:
    obj 要获取样式的元素
    attr 要获取的样式名
*/
function getStyle(obj, attr) {

    if (window.getComputedStyle) {
        //正常浏览器的方式   IE8不兼容
        return getComputedStyle(obj, null)[attr];
    } else {
        //IE8的方式  正常浏览器不兼容
        return obj.currentStyle[attr];
    }

};