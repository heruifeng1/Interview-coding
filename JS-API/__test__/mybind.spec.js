Function.prototype.myBind = function(){

}
describe('bind', function () {
    var actual;

    var testSubject = {
        push: function (o) {
            this.a.push(o);
        }
    };
    beforeEach(function () {
        actual = [];
        testSubject.a = [];
    });
    it('不传参数', function () {
        let context;
        testSubject.func = function () {
            context = this;
        }.myBind();
    });
});
