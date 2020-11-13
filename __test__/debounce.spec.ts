//接收一个fn和延迟事件,返回一个debounced函数.
//debounced函数被调用后,开始计时,fn在延迟时间到了之后被调用
//如果在debounced函数被调用后,每当debounced函数被调用时,计时清零.
jest.useFakeTimers();
const _ = require('lodash')
describe('debounce a function', function () {
    it('should ', function () {

        jest.useFakeTimers();

        function timerGame(callback) {
            console.log('Ready....go!');
            setTimeout(() => {
                console.log("Time's up -- stop!");
                callback && callback();
            }, 1000);
        }
        timerGame(console.log(1));

        expect(setTimeout).toHaveBeenCalledTimes(2);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });
    const a = [];
    
    it('延迟执行函数', function () {
        // give
        jest.useFakeTimers();


        const fn = jest.fn()
        const debouncedFn = _.debounce(fn,1000);
        // when
        debouncedFn()
        // then
        expect(fn).toHaveBeenCalledTimes(0);
        setTimeout(()=>{
            expect(fn).toHaveBeenCalledTimes(33)
        },1000)
    });
    // it('连续同步调用,只有最后一次生效', function () {
    //     // give
    //     const fn = jest.fn()
    //     const debouncedFn = _.debounce(fn,1000);
    //     // when
    //     debouncedFn();
    //     debouncedFn();
    //     debouncedFn();
    //     // then
    //     expect(fn).toHaveBeenCalledTimes(0);
    //     setTimeout(()=>{
    //         expect(fn).toHaveBeenCalledTimes(1)
    //     },1000)
    // });
    // it('调用之后,计时器清0', function () {
    //     // give
    //
    //     const fn = jest.fn()
    //     const debouncedFn = _.debounce(fn,1000);
    //     // when
    //     debouncedFn();
    //     setTimeout(()=>{debouncedFn()},500)
    //     setTimeout(()=>{debouncedFn()},1499)
    //     setTimeout(()=>{debouncedFn()},1501)
    //
    //     // then
    //     expect(fn).toHaveBeenCalledTimes(0);
    //     setTimeout(()=>{
    //         expect(fn).toHaveBeenCalledTimes(55)
    //     },1502)
    // });
});
