//右边购物车
; $(function () {
    $("#cart").mouseenter(function (e) {
        $("#cart").stop().animate({
            "width": "240px"
        }, 300, function () {
            $("#cartlist").show().stop().animate({
                "height": "300px"
            }, 800);
        }).css({
            "z-index": 9999
        });

    })
    $("#cart").mouseleave(function (e) {
        $("#cart").stop().animate({
            "width": "210px"
        }, 600, function () {
            $("#cartlist").css({
                "display": "none"
            })
        });


    })

});

; $(function () {                      
    $(".tm-side  ul li").mouseenter(function (e) {

        if ($(this).index() < 3) {
            var top = ($(this).index() * 82.4) + 'px';
            $(".subview").show().css({
                "top": top,
                "z-index": "9999"

            })

        } else if ($(this).index() >= 3) {

            $(".subview").show().css({
                "z-index": 9999,
                "top": "220px"

            });
        }
    });
    $(".subview").mouseleave(function () {
        $(this).css({
            "display": "none"
        })
    })
});
; $(function () {
    $.getJSON("http://localhost:3000/data", (res) => {
        let str = "";
        let atr = "";
        let ttr = "";
        let bnr = "";
        let dtr = "";
        let ctr = `</p></div>`;
        let etr = `<div class="menu-right">`;
        let ftr = `<div class="menu-acts">
            <h3 class="hot">品牌活动</h3>
            `;
        let gtr = `<div class="menu">`;
        for (item1 in res) {

            for (item2 in res[item1]) {

                if (res[item1][item2].img == undefined) {

                    if (res[item1][item2].text == undefined) {

                        for (item3 in res[item1][item2]) {//里面有巧克力等9个分类

                            str = "";
                            atr = "";                       //遍历第二个类时清空str，生成menu
                            for (item4 in res[item1][item2][item3]) {//第一个里面有8条数据
                                //atr置为空是想让它只执行一次，因为title只有一个，只保存了第一次的div class=“menu”

                                if (res[item1][item2][item3][item4]["text"] == undefined) {

                                    atr += `
                                    <div class="menu">
                                   <h3><a href="">${res[item1][item2][item3][item4]["title"]}</a></h3>
                                    <p>
                                    `
                                }
                                else if (res[item1][item2][item3][item4]["highlight"]) {
                                    str += `
                                    <a href="" class="hot">${res[item1][item2][item3][item4]["text"]}</a>                                                                                           
                                    `

                                } else {
                                    str += `
                                    <a href="">${res[item1][item2][item3][item4]["text"]}</a>                                                                                           
                                    `
                                }
                                // console.log(atr);
                                // str="";
                            }
                            atr += str;

                            dtr += atr;//输出的是dtr，atr每次存放在这
                            dtr += ctr;
                        }

                    } else {

                        ttr += `<a href="">${res[item1][item2].text}</a>`;
                        // console.log(res[item1][item2].text)
                    }
                } else {
                    bnr += `
                        
                        
                        <img src="//img.alicdn.com/tps/i1/TB1h7hfHFXXXXbHaXXX6TwSIFXX-196-90.jpg" alt=""></div>`
                }
            }
        }
        etr += ftr;
        etr += ttr;
        etr += bnr;

        dtr += etr;

        $(".subview").html(dtr);
    });

});

//放大
/* ;$(function(){
    $(".chaoshi-markets .row1 img").mouseenter(function(){
        console.log(1)
        $(this).stop().animate({
            "width":"266px",
            "height":"151px"
        })
    })
}) */

/* ; $(function () {

    
        $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
       
           pimg: "./img/list2.jpg",
           pname: "Borges伯爵西班牙进口特级初榨橄榄油食用油750ml*2瓶礼盒装",
           pprice: 129.9,
           pdesc: "1",
           uid: 800
           
           
       }, res => {
           console.log(res);
       })
       $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
       
           pimg: "./img/list3.jpg",
           pname: "年货 泰砻氏 泰国茉莉香米5kg 原装进口大米新米年货 非东北大米长粒香",
           pprice: 73,
           pdesc: "1",
           uid: 800
           
           
       }, res => {
           console.log(res);
       })
       $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
       
           pimg: "./img/list4.jpg",
           pname: "圣芝红酒整箱 法国原瓶进口礼物送礼梅洛纯酿干红葡萄酒750ml*6",
           pprice: 1358,
           pdesc: "1",
           uid: 800
           
           
       }, res => {
           console.log(res);
       })
       $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
       
           pimg: "./img/list5.jpg",
           pname: "年货 【进口】法国拉菲城堡珍藏波尔多干红酒梅洛赤霞珠6支装年货送礼",
           pprice: 89,
           pdesc: "1",
           uid: 800
           
           
       }, res => {
           console.log(res);
       })
       $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
       
           pimg: "./img/list6.jpg",
           pname: "进口马来西亚Rasaku家之味100%纯椰汁水青椰子水330ml*12果汁饮料",
           pprice: 89,
           pdesc: "1",
           uid: 800
           
           
       }, res => {
           console.log(res);
       })
       $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
       
           pimg: "./img/list7.jpg",
           pname: "年货 Calbee/卡乐比日本进口水果苹果麦片礼袋礼盒年货送礼必备装",
           pprice: 129,
           pdesc: "1",
           uid: 800
           
           
       }, res => {
           console.log(res);
       })
       $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
       
           pimg: "./img/list8.jpg",
           pname: "【进口】正宗韩国初饮初乐果味酒烧酒清酒组合装360ml*6火锅搭档",
           pprice: 79,
           pdesc: "1",
           uid: 800
           
           
       }, res => {
           console.log(res);
       }) 

    
}) */
;$(function(){
    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
        uid:800
    }).then(res => {
        console.log(res)
        let str="";
        
        for(item in res.data){
            // console.log(res.data[item]);     //里面8条uid为800的数据
            str+=`<a href="" class="list-info">
            <div class="wrap">
                <img src="${res.data[item].pimg}" alt="" width="160" height="160">
                <p class="title">${res.data[item].pname}</p>
                <p class="price">${res.data[item].pprice}</p>
                <i><svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gouwuche"></use>
                  </svg></i>
            </div>
        </a>`
        }
        // console.log(str)
        $(".list").html(str);
    })
});

;$(function(){
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if(st>300){
            $(".tm-nav").css({
                "position":"fixed",
                "top":0,
                "z-index":9999
            });
            $("#cart").css({
                "position":"fixed",
                "right":"164px",
                "z-index":9999
            })
        }else{
            $(".tm-nav").css({
                "position":"relative"
                
            })
        }
        $(".nav1").mouseenter(function(){
            if(st>800){
                $(".tm-side").css({
                    "position":"fixed",
                    "top":"50px",
                    "z-index":9999
                })
            }else{
                $(".tm-side").css({
                    "position":"static",
                    "float":"left"
                })
            }
        });

        $(".tm-side").mouseleave(function(){
             if(st<500){
                $(".tm-side").css({
                    "position":"static",
                    "float":"left"
                })
            }else{
                $(".tm-side").css({
                    "display":"block"
                })
            } 
           
        })
        
    })
})