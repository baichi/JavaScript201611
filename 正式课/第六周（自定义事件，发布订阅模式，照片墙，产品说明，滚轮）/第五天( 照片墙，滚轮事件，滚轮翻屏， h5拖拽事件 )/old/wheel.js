function addWheelEventListener(ele,handler){
    if(window.navigator.userAgent.toLowerCase().indexOf('firefox') !== -1){
        ele.addEventListener('DOMMouseScroll',fn,false);
    }else{
        ele.onmousewheel = fn;
    }
    function fn(e){
        e = e || window.event;
        //console.log(e.wheelDelta); // chrome浏览器 ie： 下滚 : -120   上滚 : 120
        //console.log(e.detail); // firefox :            下滚 ： 3      上滚 ： -3
        var isDown = false;
        if(e.wheelDelta){
            isDown = e.wheelDelta < 0;
        }else if(e.detail){
            isDown = e.detail > 0;
        }
        typeof handler == 'function' && handler.call(ele,isDown,e);
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
}