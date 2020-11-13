var rotate = function(nums, k) {

};
describe('旋转数组', function () {
    it('should ', function () {
        // give
            const input = [1,2,3,4,5,6,7]
        const k = 3
        // when
        rotate(input,3)
        // then
        expect(input).toEqual([5,6,7,1,2,3,4])
    });

});
