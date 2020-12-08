$(function () {
    num();
    load();
    //绑定键盘按下事件
    $("#title").keydown(function (e) {
        //判断是否是回车
        if (e.keyCode === 13) {
            //判断用户是否输入内容
            if ($("#title").val() == "") {
                alert("请输入内容");
                return;
            } else {

                let data = getDate();
                //存入新的数据
                data.push({ tite: $(this).val(), done: false });
                //将数据存储在浏览器
                saveData(data);
                load();
                num();


            }
        }
    });

    //删除
    $("ol,ul").on("click", "a", function () {
        let data = getDate();
        let index = $(this).attr("id")
        // console.log(index);
        data.splice(index, 1);
        saveData(data);
        load();
        num();
    })


    //切换
    $("ol, ul ").on("click", "input", function () {
        let index = $(this).siblings("a").attr("id");
        let data = getDate();
        // console.log($(this).prop("checked"));
        //删除对应得index
        data[index].done = $(this).prop("checked");
        saveData(data);
        load()
        num();
    })



    //封装一个函数,用来获取原先的数据
    function getDate() {
        let data = JSON.parse(localStorage.getItem("todolist"));
        //判断之前有没有数据  
        if (data !== null) {
            //有 返回数据
            return data
        } else {
            return [];
        }
    };

    //存储值
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    };

    //渲染页面
    function load() {
        let data = getDate();
        $("ol,ul").html("");
        $.each(data, function (i, ele) {

            //创建ol的li
            if (ele.done) {
                let li = $("<li></li>");
                li.html(`
               <input type="checkbox" checked='checked'>
               <p>${ele.tite}</p>
               <a href="javascript:;" id='${i}'></a>
               `);
                $("ul").prepend(li)
            } else {
                let li = $("<li></li>");
                li.html(`
                   <input type="checkbox">
                   <p>${ele.tite}</p>
                   <a href="javascript:;" id='${i}'></a>
                   `);
                $("ol").prepend(li)
            }

        })
    }

    function num() {
        let data = getDate();
        let num = 0;
        let sum = 0;
        $.each(data, function (i, ele) {
            console.log(ele.done);
            if (ele.done) {
                num++;
                $("#donecount").text(num)
            } else {
                sum++
                $("#todocount").text(sum)
            }
        })
    }


})