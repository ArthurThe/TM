var time = 60;
    $(function(){
        $("#sendsms").click(function (){
    	   if(time==60){//如果不加入该判断，则会出现在倒计时期间不断的点击发生不断的加快（其实就是你点了多少次就重复多少次该函数）的问题，用setTimeout（）方法不加此判断也是一样的
    		   var time1=setInterval(function(){
        		   if(time==0){
            		   $("#sendsms").removeAttr("disabled");
            		   $("#sendsms").html("重新发送");
            		   time=60;
            		   clearInterval(time1);
            	   }else{
            	   	   //避免重复点击
            		   $("#sendsms").attr("disabled","true");
            		   $("#sendsms").html("重新发送("+time+")");
            		   time--;
            	   }
        		   }, 1000);
    	   }
    	   
    	   })
        $(".input2").click(function(){
        	window.location.href="../register1.html";
        })
        $(".input").click(function(){
        	window.location.href="../register3.html";
        })
    })
