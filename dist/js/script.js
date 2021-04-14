var goodsList = [{
	id: 1234564876,
	imgUrl: 'img/1.png',
	goodsInfo: '号地块健身房回复的科技示范户快速坚实的看了看大家发快递了很费劲的开始放假',
	goodsParams: '四季度后付款的酸辣粉',
	price: 199,
	goodsCount: 1,
	singleGoodsMoney: 199
},
{
	id: 1234564876,
	imgUrl: 'img/2.png',
	goodsInfo: '号地块健身房回复的科技示范户快速坚实的看了看大家发快递了很费劲的开始放假',
	goodsParams: '四季度后付款的酸辣粉',
	price: 999,
	goodsCount: 2,
	singleGoodsMoney: 598
},
{
	id: 1234564876,
	imgUrl: 'img/3.png',
	goodsInfo: '号地块健身房回复的科技示范户快速坚实的看了看大家发快递了很费劲的开始放假',
	goodsParams: '四季度后付款的酸辣粉',
	price: 399,
	goodsCount: 1,
	singleGoodsMoney: 399
}
]
var deleteGoods = null
loadGoods()

function loadGoods() {
	$.each(goodsList, function (i, item) {
		var goodsHtml = `<div class="goods-item">
			<div class="panel panel-default">
			<div class="panel-body">
			<div class="col-md-1 car-goods-info">
			<label><input type="checkbox" class="goods-list-item"/></label>
			</div>
			<div class="col-md-3 car-goods-info goods-image-column">
			<img class="goods-image" src="' + item.imgUrl + '" style="width: 100px; height: 100px;" />
			<span id="goods-info">
			${item.goodsInfo} 
			</span>
			</div>
			<div class="col-md-3 car-goods-info goods-params">${item.goodsParams} </div>
			<div class="col-md-1 car-goods-info goods-price"><span>￥</span><span class="single-price"> ${item.price}</span></div>
			<div class="col-md-1 car-goods-info goods-counts">
			<div class="input-group">
			<div class="input-group-btn">
			<button type="button" class="btn btn-default car-decrease">-</button>
			</div>
			<input type="text" style="padding:0" class="form-control goods-count" value="${item.goodsCount}" class="num">
			<div class="input-group-btn">
			<button type="button" class="btn btn-default car-add">+</button>
			</div>
			</div>
			</div>
			<div class="col-md-1 car-goods-info goods-money-count"><span>￥</span><span class="single-total">${item.singleGoodsMoney}</span></div>
			<div class="col-md-2 car-goods-info goods-operate">
			<button type="button" class="btn btn-danger item-delete">删除</button>
			</div>
			</div>
			</div>
			</div>`
		$('.goods-content').append(goodsHtml)
	})
	let oCheckAll = document.getElementById("checkAll");
	this.ack=document.getElementsByClassName(".goods-list-item");
	this.aMinus = document.querySelectorAll(".car-decrease");
    this.aPlus = document.querySelectorAll(".car-add");
	this.aNum = document.querySelectorAll(".num");
	this.aPrice = document.querySelectorAll(".single-price");
	this.aPrices = document.querySelectorAll(".single-total");
	this.aDelBtn = document.querySelectorAll(".item-delete");		
		$("#check-goods-all").click(function(){ //全选

			$(".goods-list-item").prop("checked",$("#check-goods-all").prop("checked"))
					
		})
	
	
	
	
	
}

