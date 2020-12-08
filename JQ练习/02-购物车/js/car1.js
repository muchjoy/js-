$(function () {
    //全选
    $(".checkall").change(function () {
        $(".j-checkbox , .checkall").prop("checked", $(this).prop("checked"));
        if ($(".checkall").prop("checked")) {
            $(".cart-item").addClass("check-cart-item")
        } else {
            $(".cart-item").removeClass("check-cart-item")

        };

    });
    //反向全选
    $(".j-checkbox").change(function () {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true)
        } else {
            $(".checkall").prop("checked", false)

        };
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item")
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item")
        }

    });

    //点击增加商品数
    $(".increment").click(function () {
        //获取表单中的内容
        let n = $(this).siblings(".itxt").val();
        // console.log(n);
        n++;
        $(this).siblings(".itxt").val(n);
        //获取商品单价
        let p = $(this).parents().siblings(".p-price").html();
        // console.log(p);
        p = p.substr(1);
        $(this).parents().siblings(".p-sum").html('¥' + (p * n).toFixed(2));
        getSum();
    })

    //点击减少商品数
    $(".decrement").click(function () {
        //获取表单中的内容
        let n = $(this).siblings(".itxt").val();
        // console.log(n);
        if (n == 1) {
            return;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        //获取商品单价
        let p = $(this).parents().siblings(".p-price").html();
        // console.log(p);
        p = p.substr(1);
        $(this).parents().siblings(".p-sum").html('¥' + (p * n).toFixed(2));
        getSum();
    });

    //改变文本框内数字,修改价格
    $(".itxt").change(function () {
        let value = $(this).val();
        //获取商品单价
        let p = $(this).parents().siblings(".p-price").html();
        // console.log(p);
        p = p.substr(1);
        $(this).parents().siblings(".p-sum").html('¥' + (p * value).toFixed(2));
        getSum();
    });
    getSum();
    //封装一个函数,用来计算所有的价格
    function getSum() {
        //商品总数
        let count = 0;
        //总价
        let menoy = 0;
        //遍历所有的表单
        $(".itxt").each(function (i, ele) {
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").html(count);
        $(".p-sum").each(function (i, ele) {
            menoy += parseFloat($(ele).text().substr(1))
        });
        console.log(menoy);

        $(".price-sum em").html('¥' + menoy.toFixed(2));
    };

    //删除商品
    //点击商品删除对应的商品
    $(".p-action a").click(function () {
        $(this).parents(".cart-item").remove();
        getSum();
        quanXuan();

    });

    $(".remove-batch").click(function () {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
        quanXuan();

    });

    $(".clear-all").click(function () {
        $(".cart-item").remove();
        getSum();
        quanXuan();
    });

    //封装个函数用来控制是否全选
    function quanXuan() {

        if ($(".j-checkbox:checked").length === 0) {

            $(".checkall").prop("checked", false)

        } else {
            $(".checkall").prop("checked", true)

        };
    }
})