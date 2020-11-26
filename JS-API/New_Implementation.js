function objectFactory() {
    const Constructor = [].shift.call(arguments);
    if(typeof Constructor !== "function"){
        throw '第一个参数必须是方法体';
    }
    var obj = new Object();

    obj.__proto__ = Constructor.prototype;

    var ret = Constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret : obj;

};
