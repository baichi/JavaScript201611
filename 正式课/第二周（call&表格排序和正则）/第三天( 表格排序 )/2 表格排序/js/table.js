// 先获取表格中要操作到的元素
var tableBox = document.getElementById('table');
var table = tableBox.getElementsByTagName('table')[0]; //获取表格
//获取表格中表头里面的列th
var tHead = table.tHead; //table.tHead表格特殊的获取方式 获取表头
var tHeadRow = tHead.rows[0]; //tHead下所有行中的第一行
var ths = tHeadRow.cells; //表头第一行下所有的单元格(列)
//console.log(ths);
var tBody = table.tBodies[0]; //获取表格所有tBody中的第一个

// 在data.txt这个文件中伪造了一些数据，由于这个数据都是在txt文本文件中，所以这些数据暂时就是一个字符串，如果想换成JSON格式还需要处理
// 通过Ajax来获取这些数据
/*
*   ajax: Async (异步)  Javascript and XML
*   作用: 专门用来去后台获取数据的。
*   步骤: 1 先创建一个异步对象 => 就是去后台拿数据那个载体
*        2  约定好方式  xhr.open(  以什么样的方式去拿get/post,    去哪拿数据data.txt, 同步还是异步false/true )
*       3 约定状态  绑定事件onreadystatechange readyState == 4 && status==200 这才是成功返回
*           404 找不到页面
*           200 成功 => 2开头的都是成功
*           304 本地缓存
*           501 服务端
*       4 出发  xhr.send(null);
* */
/*
*   同步和异步: 同步是如果上一个任务没有完成，那么下一个任务不开始
*             异步是可以同时进行多个任务
*             同步阻塞代码的运行，异步不阻塞代码运行
* */
// 这个自运行函数负责获取数据
;(function getData(){
    var xhr = new XMLHttpRequest(); //固定写法，创建一个异步对象载体。这个xhr就是负责要去后台获取数据的。
    xhr.open('get','js/data.txt',false); //请求分get和post，data.txt这个参数就是请求的url。false同步/true异步
    // 为什么采用同步: 数据要是没有获取到，那么的下面的其他操作就不用继续了
    xhr.onreadystatechange = function (){
        // 只要xhr的状态改变就会触发这个事件。
        if(xhr.readyState == 4 && xhr.status == 200){
            // 这两个状态组合在一起才是成功返回并且携带数据
            // readyState这个状态代表的xhr是否成功返回
            // xhr.status 代表的xhr还携带data回来的
            //既然数据都回来了，数据肯定在xhr身上
            window.data = utils.jsonParse(xhr.responseText); //xhr的响应文本,数据就在这个属性上
            // 把xhr.responseText赋值给window.data => 相当于添加了一个全局变量data => 只要成功我在外面打印data就不会不错
            // xhr.responseText是字符串 => data.txt是文本文件
        }
    }
    xhr.send(null); //xhr出发
})();
console.log(data);
// 数据已经成功获取到，现在需要把获取到的数据，添加到页面中 => 数据绑定






