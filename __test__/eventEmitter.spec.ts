

function EventEmitter(){

}
EventEmitter.prototype.getListeners = function (evt: string): Function[] | Object {
    const  events = this._getEvents();

    let newVar = events[evt] || (events[evt] = []);
    return newVar;
}
EventEmitter.prototype._getEvents = function () {
    return this._events || (this._events = {});
}
EventEmitter.prototype.addListener = function (evt:string,listener:Function) {
    var listeners = this.getListenersAsObject(evt);
    var listenerIsWrapped = typeof listener === 'object';
    var key;

    for (key in listeners) {
        if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
            listeners[key].push(listenerIsWrapped ? listener : {
                listener: listener,
                once: false
            });
        }
    }

    return this;
}
function indexOfListener(listeners, listener) {
    var i = listeners.length;
    while (i--) {
        if (listeners[i].listener === listener) {
            return i;
        }
    }

    return -1;
}
EventEmitter.prototype.getListenersAsObject = function(evt:string){
    var listeners = this.getListeners(evt);
    var response;

    if (listeners instanceof Array) {
        response = {};
        response[evt] = listeners;
    }

    return response || listeners;
}
EventEmitter.prototype.flattenListeners = function (listeners) {
    var flatListeners = [];
    var i;

    for (i = 0; i < listeners.length; i += 1) {
        flatListeners.push(listeners[i].listener);
    }

    return flatListeners;
}
let ee;
describe('', function () {
    beforeEach(()=>{
        ee = new EventEmitter();
    })
    describe('初始化', function () {
        it('初始化', function () {
            ee.getListeners('foo');
            expect(ee.events).toEqual({foo:[]})
        });
        it('不会重写监听数组', function () {
            var listeners = ee.getListeners('foo');
            listeners.push('bar');
            expect(ee._events).toEqual({
                foo: ['bar']
            })
            ee.getListeners('foo');

            expect(ee._events).toEqual({
                foo: ['bar']
            })
        });
        it('事件名字符串不匹配的不返回', function () {
            var check = function () {};

            ee.addListener('foo', function () {});
            ee.addListener('fooBar', check);

            var listeners = ee.getListeners('fooBar');
            expect(listeners.length).toBe(1);
            expect(listeners[0].listener).toBe(check)
        });
    });
    describe('添加事件', function () {
        var fn1 = function (){}
        var fn2 = function(){}
        it('给特定的事件添加监听', function () {
            ee.addListener('foo',fn1)
            expect(ee.flattenListeners(ee.getListeners('foo'))).toEqual([fn1])
        });

    });
    describe('删除事件', function () {
        var fn1 = function(){};
        var fn2 = function(){};
        var fn3 = function(){};
        var fn4 = function(){};
        var fn5 = function(){};
        var fnX = function(){};
        it('should ', function () {
            
        });
    });

});
