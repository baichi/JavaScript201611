//单例模式
var utils = {
    jsonParse : function (jsonStr){
        return 'JSON' in window ? JSON.parse(jsonStr) : eval("("+jsonStr+")");
    }
};