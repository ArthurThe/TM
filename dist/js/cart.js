loadGoods()

function loadGoods() {
	let str = ""
	var ss = 0;
	$.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
		id: getCookie("id")
	}).then(res => {
		if (id) {
			for (item in res.data) {
				str += `<div class="goods-item">
			<div class="panel panel-default">
			<div class="panel-body">
			<div class="col-md-1 car-goods-info">
			<label><input type="checkbox" class="goods-list-item"/></label>
			</div>
			<div class="col-md-3 car-goods-info goods-image-column">
			<img class="goods-image" src="${res.data[item].pimg}" style="width: 100px; height: 100px;" />
			<span id="goods-info">
			${res.data[item].pname} 
			</span>
			</div>
			<div class="col-md-3 car-goods-info goods-params">${res.data[item].pid} </div>
			<div class="col-md-1 car-goods-info goods-price"><span>￥</span><span class="single-price"> ${res.data[item].pprice}</span></div>
			<div class="col-md-1 car-goods-info goods-counts">
			<div class="input-group">
			<div class="input-group-btn">
			<button type="button" class="btn btn-default car-decrease">-</button>
			</div>
			<input type="text" style="padding:0" class="form-control goods-count" value="${res.data[item].pnum}" class="num">
			<div class="input-group-btn">
			<button type="button" class="btn btn-default car-add">+</button>
			</div>
			</div>
			</div>
			<div class="col-md-1 car-goods-info goods-money-count"><span>￥</span><span class="single-total">${res.data[item].pprice * res.data[item].pnum}</span></div>
			<div class="col-md-2 car-goods-info goods-operate">
			<button type="button" class="btn btn-danger item-delete">删除</button>
			</div>
			</div>
			</div>
			</div>`

			}

		}

		$('.goods-content').append(str);

		$("#deleteMulty").click(function () {  //全部删除
			$("#deleteMulty").parent().parent().parent().siblings(".goods-content").children().children().children().children(".goods-params").each(function () {
				let id = getCookie("id");
				pid = $(this).html();
				shan(id, pid)
			})
			getSum();
			$(this).parent().parent().parent().siblings(".goods-content").children().remove();

			quan();
			shuaxin();
			$("#selectGoodsCount").html(0);
			$("#selectGoodsMoney").html(getSum());

		})


		$("#check-goods-all").click(function () { //全选激活所有单选
			$(".goods-list-item").prop("checked", $("#check-goods-all").prop("checked"))
			getSum();
			$("#selectGoodsMoney").html(getSum());
		})

		//减号
		$(".car-decrease").click(function () {
			let pid = $(this).parent().parent().parent().siblings(".goods-params").html();
			let zhi = $(this).parent().siblings("input").val();
			let singlePrice = $(this).parent().parent().parent().siblings(".goods-price").children(".single-price").html();

			if (Number(zhi) <= 1) { //临界值限制，不能小于1
				$(this).parent().siblings("input").attr("value", 1)
			} else {
				zhi--;
				$(this).parent().siblings("input").val(zhi)
			}

			let totalPrice = $(this).parent().parent().parent().siblings(".goods-money-count").children(".single-total").html();

			totalPrice = Number(zhi) * Number(singlePrice);

			$(this).parent().parent().parent().siblings(".goods-money-count").children(".single-total").html(parseFloat(totalPrice).toFixed(2))
			getSum();
			$("#selectGoodsMoney").html(getSum());
			update(pid, zhi);
		})

		//加号
		$(".car-add").click(function () {
			let pid = $(this).parent().parent().parent().siblings(".goods-params").html();
			console.log(pid)
			let singlePrice = parseFloat($(this).parent().parent().parent().siblings(".goods-price").children(".single-price").html()).toFixed(3);
			let zhi1 = $(this).parent().siblings("input").val();
			zhi1++;
			$(this).parent().siblings("input").val(zhi1)
			// console.log(zhi)

			// let totalPrice = $(this).parent().parent().parent().siblings(".goods-money-count").children(".single-total").html();

			let totalPrice = parseInt(zhi1) * singlePrice;

			$(this).parent().parent().parent().siblings(".goods-money-count").children(".single-total").html(parseFloat(totalPrice).toFixed(2));
			getSum();
			$("#selectGoodsMoney").html(getSum());
			update(pid, zhi1)
		})

		//修改input
		$(".goods-count").on("input", function () {
			let singlePrice = $(this).parent().parent().siblings(".goods-price").children(".single-price").html();
			let pid = $(this).parent().parent().siblings(".goods-params").html();
			update(pid, $(this).val());

			let totalPrice = $(this).parent().parent().parent().siblings(".goods-money-count").children(".single-total").html();
			totalPrice = Number($(this).val()) * Number(singlePrice);
			$(this).parent().parent().siblings(".goods-money-count").children(".single-total").html(totalPrice);
			console.log($(this).val())
			if (Number($(this).val()) <= 1) {
				$(this).val(1);
			}
			getSum();
			$("#selectGoodsMoney").html(getSum());
		})
		//删除
		$(".item-delete").on("click", function () {
			let pid = $(this).parent().siblings(".goods-params").html();
			$(this).parent().siblings(".car-goods-info").children().children().prop("checked", false)
			shan(id, pid);
			// cha(pid);
			$(this).parent().parent().parent().remove();

			quan();
			shuaxin()
		});
		//单选
		$(".goods-list-item").click(function () {
			quan();
			getSum();
			// console.log(getSum())
			$("#selectGoodsMoney").html(getSum());
		})
		//删除后全选状态清空
		function shuaxin() {
			console.log($(".goods-content").children().children()[0])
			if ($(".goods-content").children().children()[0]==undefined) {
				
				$("#check-goods-all").prop("checked", false);
			} 

		}

	})



}
let id = getCookie("id");

function cha() {

}

//删除
function shan(id, pid) {
	getSum();
	$("#selectGoodsMoney").html(getSum());
	$.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
		uid: id,
		pid: pid
	})
}
//修改
function update(pid, val) {

	$.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
		uid: id, pid: pid, pnum: val
	}).then(res => {

	})
}
function jiajian() {

}
function quan() {  //每个单选都选中，则激活全选
	let sum = 0;
	for (let i = 0; i < $(".goods-list-item").length; i++) {

		if ($(".goods-list-item").eq(i).prop("checked") == true) {
			sum++;
		}
	}
	if (sum == parseInt($(".goods-list-item").length)) {
		$("#check-goods-all").prop("checked", true)
	} else {
		$("#check-goods-all").prop("checked", false)
	}
}
//获取总价
function getSum() {
	let a = 0;
	let sum = 0;
	for (let i = 0; i < $(".goods-list-item").length; i++) {

		if ($(".goods-list-item").eq(i).prop("checked") == true) {
			sum++;
			a += Number(parseFloat($(".goods-list-item").eq(i).parent().parent().parent().children(".goods-money-count").children(".single-total").html()).toFixed(2));
			// a=parseInt(a);
		}
		// console.log(sum)
		$("#selectGoodsCount").html(sum);

	}
	return a;
}

