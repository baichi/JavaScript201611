/*--String.prototype--*/
~function (pro) {
    function queryURLParameter() {
        var obj = {},
            reg = /([^?&=#]+)=([^?&=#]+)/g;
        this.replace(reg, function () {
            obj[arguments[1]] = arguments[2];
        });

        //->GET HASH
        reg = /#([^?&=#]+)/;
        if (reg.test(this)) {
            obj['HASH'] = reg.exec(this)[1];
        }
        return obj;
    }

    pro.queryURLParameter = queryURLParameter;
}(String.prototype);

/*--computed content height--*/
~function () {
    var $mainContent = $('.main-content'),
        $menu = $mainContent.children('.menu');

    function fn() {
        var winH = document.documentElement.clientHeight || document.body.clientHeight;
        var tarH = winH - 64 - 40;//->WINH-HEADER-MARGIN
        $mainContent.css('height', tarH);
        $menu.css('height', tarH - 2);
    }

    fn();
    $(window).on('resize', fn);
}();

/*--MENU--*/
var menuRender = (function () {
    var $menu = $('#menu'),
        $links = $menu.find('a'),
        menuExample = null;

    var $menuPlain = $.Callbacks();//->create plain

    //->ISCROLL
    $menuPlain.add(function () {//->add plain function / remove
        menuExample = new IScroll('#menu', {
            scrollbars: true,
            mouseWheel: true,
            fadeScrollbars: true,
            click: true
        });
    });

    //->BY HASH POSITION TO ELEMENT
    $menuPlain.add(function () {
        var hash = window.location.href.queryURLParameter()['HASH'],
            $tar = $links.filter('[href="#' + hash + '"]');
        $tar.length === 0 ? $tar = $links.eq(0) : null;
        $tar.addClass('bg');
        menuExample.scrollToElement($tar[0], 0);

        //->加载页面的时候,左侧MENU区域定位好之后,根据定位的内容展示右侧信息
        calendarRender.init($tar.attr('data-id'));
    });

    //->CLICK
    $menuPlain.add(function () {
        $links.on('click', function () {
            $(this).addClass('bg').parent().siblings().children('a').removeClass('bg');

            //->点击左侧MENU的时候,右侧也需要跟着改变
            calendarRender.init($(this).attr('data-id'));
        });
    });

    return {
        init: function () {
            $menuPlain.fire();//->fire all function run,如果这块传递了参数值,那么所有的方法都可以接收到传递的值
        }
    }
})();

/*--CALENDAR--*/
var calendarRender = (function () {
    return {
        init: function () {

        }
    }
})();


menuRender.init();