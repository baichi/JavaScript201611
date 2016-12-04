/*--NAV RENDER--*/
var navRender = (function () {
    var $menu = $('#menu'),
        $nav = $('#nav');
    return {
        init: function () {
            $menu.tap(function () {
                if ($nav.attr('isBlock') === 'true') {
                    $nav.css({
                        padding: 0,
                        height: 0
                    }).attr('isBlock', false);
                    return;
                }
                $nav.css({
                    padding: '.1rem 0',
                    height: '2.22rem'
                }).attr('isBlock', true);
            });
        }
    }
})();
navRender.init();