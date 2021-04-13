$(document).ready(function () {
	$(".input").click(function () {
		var text1 = $(".text1").val();
		var text2 = $(".text2").val();
		var zhanghao=sessionStorage.getItem("tel");
		
		var mag = /[\u4e00-\u9fa5_a-zA-Z0-9_]{8,16}/;
		if (text1 == text2 && mag.test(text1) && mag.test(text2)) {
			$("#domo").hide();
			
			
			 $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
				username: zhanghao,
				password: text1
			}, res => {
				alert(res.msg)
				 location.href = "http://127.0.0.1:8080/login.html" 
			}) 
			// window.location.href = "../register4.html";
		} else if (text1 == "" && text2 == "") {
			$("#domo").show();
			$("#domo").text("密码不能为空");
			$("#span").hide();
		} else if (!mag.test(text1) && !mag.test(text2)) {
			$("#domo").show();
			$("#domo").text("密码输入格式错误");
			$("#span").hide();
		} else if (text1 !== text2) {
			$("#domo").show();
			$("#domo").text("密码输入不一致");
			$("#span").hide();
		}
	})
})