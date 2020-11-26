Function.prototype.myCall = function (context) {
    const myContext = context || window;
    myContext.fn = this;
    // 获取剩余参数
    const otherArg = Array.from(arguments).slice(1);
    // 调用这个方法，将剩余参数传递进去
    const result = myContext.fn(otherArg);
    delete myContext.fn;
    return result;
}

var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.myCall(foo); // 1
