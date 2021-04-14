
$(function () {
    $(".exin").css({
        "display": "none"
    })
    $(".nav1").mouseenter(function () {
        $(".exin").css({
            "display": "block"
        });
    })

    $(".exin").mouseleave(function () {
        $(".exin").css({
            "display": "none"
        });
    })

});

; $(function () {
    let id = location.search.split("=")[1];
    $.get("http://jx.xuzhixiang.top/ap/api/detail.php", {
        id: id
    }).then(res => {
        let str = "";
        console.log(res.data.pimg);
        $("#midArea img").attr("src", res.data.pimg);
        $("#bigArea img").attr("src", res.data.pimg);
        $("#samllArea img").attr("src", res.data.pimg);
        $("#smallArea img").attr("src", res.data.pimg);
        $(".tb-detail h1").html(res.data.pname);
        $(".price").children().eq(1).html(res.data.pprice);
        for (item in res.data) {

        }
    })
})

$(function () {
    let oMinus = document.querySelectorAll(".minus")[0];
    let oPlus = document.querySelectorAll(".plus")[0];
    let oNum = document.querySelectorAll(".num")[0];
    let oBtn = document.querySelectorAll(".btn")[0];

    oMinus.onclick = function () {
        if (oNum.value <= 1) {
            oNum.value = 1;
        } else {
            oNum.value--;
        }
    }
    oPlus.onclick = function () {

        oNum.value++;

    }
    oNum.onchange = function () {
        if (oNum.value <= 1) {
            oNum.value = 1;
        }
    }


    oBtn.onclick = function () {


    }
})
$(function () {
    let id = getCookie("id");
    let sumprices = 0;
    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
        id: id
    }).then(res => {
        console.log(getCookie("id"))
        if(id){
            for (item in res.data) {

                sumprices += parseInt(res.data[item].pprice) * parseInt(res.data[item].pnum);
            }
    
            $(".min-cart").html(sumprices);
        }
        
    })
})
$(function () {
    let id = getCookie("id");
    let pid = location.search.split("=")[1]
    
    $(".tb-key .btn").click(function () {

        if (id) {
            $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
                uid: id, pid: pid, pnum: $(".tb-key .num").val()
            }).then(res => {
                    let sumprice = 0;
                    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
                        id: getCookie("id")
                    }).then(res => {

                        console.log(getCookie("id"))
                        for (item in res.data) {

                            sumprice += parseInt(res.data[item].pprice) * parseInt(res.data[item].pnum);
                        }
                        console.log(sumprice);
                        $(".min-cart").html(sumprice);
                    })
            })
        } else {
            alert("测BUG呢")
        }

    })
});
