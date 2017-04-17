function setRem(){
		var ww=document.documentElement.clientWidth;
		var html=document.getElementsByTagName('html')[0];
		var scale=ww/640;  /*640psd的宽度*/
		html.style.fontSize=scale*100+"px";
	}
	setRem();
window.onresize=function () {
	setRem();
}