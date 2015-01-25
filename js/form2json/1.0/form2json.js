/*!
 * formutil
 * 一个jqeury扩展，可以将复杂表单序列化成JSON串
 *
 * @version     v1.0, built on 2015-01-25 16:48:03 AM
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 songpo
 * @license     GPL还是什么的都没有，随便使用
 */
$.fn.form2json = function(){
    var obj = {};
    $.each(this.serializeArray(), function(index, item){
        if(item.name.indexOf('.') > 0) {
            var attributeName = 'obj';
            $.each(item.name.split('.'), function(index, item){
                attributeName += '.' + item;
                if(!eval(attributeName)){
                    eval(attributeName + '={};');
                }
            });
        }
        eval('obj.'+ item.name + '="' + item.value + '"');
    });
    return JSON.stringify(obj);
}