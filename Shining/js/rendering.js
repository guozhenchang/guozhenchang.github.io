	$('#content_wheel').css({
		height: $('#box img').eq(0).height()
	})
window.onresize = function(){
	$('#content_wheel').css({
		height: $('#box img').eq(0).height()
	})
}

var aImg = document.querySelectorAll('#box img')
var aLi = document.querySelectorAll('#content_wheel ul li')
var num = 0;

function auto() {
	var timer = setInterval(function() {
		num++
		if(num > 2) {
			num = 0
		}
		for(var i = 0; i < aImg.length; i++) {
			aImg[i].style.opacity = 0
			aLi[i].style.background = '#8291a0';
		}
		aImg[num].style.opacity = 1
		aLi[num].style.background = '#cfdb00'
	}, 5000)
}
auto()
$('#content_wheel li').each(function() {
	$(this).click(function() {
		var _index = $(this).index();
		$('#content_wheel li').eq(_index).css({
			'background': '#cfdb00'
		}).siblings().css('background', '#8291a0');
		$('#box img').eq(_index).css('opacity', '1').siblings().css('opacity', '0');
		num = _index;
	})
})

var uls = document.querySelectorAll('#content_falls ul')
var liArr = []
for(var i = 0; i < 97; i++) {
	img = new Image()
	var li = document.createElement('li')
	img.src = "img/rendering/b000" + (i + 1) + ".jpg"
	li.appendChild(img)
	liArr.push(li);
}

img.onload = function() {
	for(var j = 0; j < 97; j++) {
		// 创建ul高度的数组
		var ulsHeight = []
		for(var k = 0; k < uls.length; k++) {
			ulsHeight.push(uls[k].offsetHeight)
		}
		// 比较ul的高度
		var minHeight = ulsHeight[0];
		var minIndex = 0
		for(var k = 0; k < uls.length; k++) {
			if(minHeight > ulsHeight[k]) {
				minHeight = ulsHeight[k]
				minIndex = k
			}
		}
		uls[minIndex].appendChild(liArr[j])
	}

	//蒙版
	for(var i = 0; i < 97; i++) {
		var newDiv = document.createElement('div');
		newDiv.className = 'mask';
		$('#content_falls ul li').eq(i).append(newDiv);
	}
	$('#content_falls ul li').each(function() {
		var _index = $(this).index()
		$(this).mouseover(function() {
			$(this).children().last().css({
				opacity: .5
			})
			$(this).children().first().css({
				transform: 'scale(1.1)'
			})
		})
		$(this).mouseout(function() {
			$(this).children().last().css({
				opacity: 0
			})
			$(this).children().first().css({
				transform: 'scale(1)'
			})
		})
		$(this).click(function() {
			var mySrc = $(this).children().first().attr('src');
			$('#mask_full_pic').attr('src', mySrc).show();
			$('#mask_full').show()
		})
	})
	$('#mask_full_pic').click(function() {
		$(this).hide()
		$('#mask_full').hide()
	})
	$('#mask_full').click(function() {
		$(this).hide()
		$('#mask_full_pic').hide()
	})

}