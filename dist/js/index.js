//右边购物车
$(function(){
    $("#cart").mouseenter(function(e){
         $("#cart").stop().animate({
             "width": "240px"
         },300,function(){
            $("#cartlist").show().stop().animate({
                "height":"300px"
            },800);
         }); 
         
    })
    $("#cart").mouseleave(function(e){
        $("#cart").stop().animate({
            "width": "210px"
        },800,function(){
            
        });
        $("#cartlist").css({
            "display":"none"
        })
       
   })
})
