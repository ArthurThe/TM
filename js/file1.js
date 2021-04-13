$(document).ready(function(){
		$(".input").click(function(){
			var phone=$(".boxsix").val();
			var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
			if (phone=="") {
				$("#domo").show();
				return ;
			}
			else if (!myreg.test(phone)) {
				$("#domo").show();
				$("#domo").text("手机号格式不正确");
			}
			else if (myreg.test(phone)) {
				$("#domo").hide();
				//跳转到下一页面
				//跨页面传递数据
				sessionStorage.setItem("tel",phone);
				window.location.href="../register2.html";
			}
		})
		$(".boxfour").click(function(){
			$("#xiala").toggle();
		})
	})