describe('Function', function () {
    'use strict';

    describe('#apply()', function () {
        it('works with arraylike objects', function () {
            var arrayLike = { length: 4, 0: 1, 2: 4, 3: true };
            var expectedArray = [1, undefined, 4, true];
            var actualArray = (function () {
                return Array.prototype.slice.apply(arguments);
            }.apply(null, arrayLike));
            expect(actualArray).toEqual(expectedArray);
        });
    });

});
