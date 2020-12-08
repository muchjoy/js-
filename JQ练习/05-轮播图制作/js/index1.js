window.addEventListener('load', function () {
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    // 盒子的宽度
    var focusWidth = focus.offsetWidth;
    // 1.鼠标滑入显示按钮
    focus.addEventListener('mouseover', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
    })

    // 2.鼠标滑出隐藏按钮
    focus.addEventListener('mouseout', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            arrow_r.click();
        }, 2000)
    })
    // 3.生成小圆点
    // 获取ul,ol 是focus下面的元素
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        // 创建小li
        var li = document.createElement('li');
        // 放置小li 到ol
        ol.appendChild(li);
        // 给每个小圆圈添加自定义属性，上编号
        li.setAttribute('index', i);
        // 4.给每一个li注册事件 让当前的显示高亮
        li.addEventListener('click', function () {
            // 排他
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 5.点击小圆圈，图片做动画，移动的是ul
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);
        })
    }
    // 给第一个小圆圈的类名改成current，让它变白
    ol.children[0].className = 'current';
    // 6. 克隆操作
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 7.1点击右侧按钮，图片滚动一张 
    var num = 0;
    var circle = 0;
    arrow_r.addEventListener('click', function () {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -focusWidth * num);
        circle++;
        if (circle == ul.children.length - 1) {
            circle = 0;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ""
        }
        ol.children[circle].className = "current"

    })
    // 7.2点击左侧按钮，图片滚动一张
    arrow_l.addEventListener('click', function () {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth + "px";
        }
        num--;
        animate(ul, -focusWidth * num);
        circle--;
        if (circle < 0) {
            circle = ul.children.length - 1;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ""
        }
        ol.children[circle].className = "current"
    })
    var timer = setInterval(function () {
        arrow_r.click();
    }, 2000);
})