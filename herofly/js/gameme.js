function loadAudios(callback){//加载音频资源
	var aud = new Audio();
	aud.oncanplay = function(){
		if(audio_sources[i])audios[audio_sources[i].name]=this;
		i ++;
		if(i<len)loadAudios(callback);
		//判断音频资源如果没有加载完成,就继续回调加载.
		if(i==len)callback && callback();
		//当资源加载完成之后,执行回调函数.
	};
	aud.onerror = function(){
		//如果当前资源加载失败,跳过当前资源,继续加载后面的资源
		i ++;
		if(i<len)loadAudios(callback);
		if(i==len)callback && callback();
	};
	aud.src = audio_sources[i].url;
}

function loadImages(callback){  //加载视频资源
	var img = new Image();
	img.onload = function(){
		image[image_sources[i].name] = this;
		i++;
		if(i<len)loadImages(callback);
		if(i==len)callback && callback();
	};
	img.onerror = function(){
		i ++;
		if(i<len)loadImages(callback);
		if(i==len)callback &&callback();
	};
	img.src = image_sources[i].url;
}
