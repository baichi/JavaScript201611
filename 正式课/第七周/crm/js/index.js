//->开始加载页面的时候,我们通过API文档中的接口地址获取到所有的客户信息,然后把信息展示在页面中(字符串拼接)
ajax({
    url: '/getAllList',
    type: 'get',
    dataType: 'json',
    cache: false,
    success: function (result) {
        if (result && result.code == 0) {
            var data = result.data;
            bindHTML(data);
        }
    }
});
var content = document.getElementById('content');
//->实现页面数据的绑定
function bindHTML(data) {
    var str = '';
    for (var i = 0; i < data.length; i++) {
        var cur = data[i];
        str += '<li>';
        str += '<span>' + cur.id + '</span>';
        str += '<span>' + cur.name + '</span>';
        str += '<span>';
        str += '<a href="">修改</a>';
        str += '<a href="">删除</a>';
        str += '</span>';
        str += '</li>';
    }
    content.innerHTML = str;
}