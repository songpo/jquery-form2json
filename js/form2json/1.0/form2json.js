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