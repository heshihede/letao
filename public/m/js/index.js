$(function(){ 
    var slider = mui("#slider");
    slider.slider({
        interval: 5000         //每隔5秒调用一次
    });
    mui('.mui-scroll-wrapper').scroll({
        scrollY: true, //是否竖向滚动
        scrollX: false, //是否横向滚动
        startX: 0, //初始化时滚动至x
        startY: 0, //初始化时滚动至y
        indicators: true, //是否显示滚动条
        deceleration:0.0030, //阻尼系数,系数越小滑动越灵敏
        bounce: true //是否启用回弹
    });
})