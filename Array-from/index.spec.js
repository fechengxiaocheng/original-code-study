
const Array = require('./index');

describe('Array.from', () => {

    describe('about first arguments', () => {
        test('if first arguments is string return this arr', () => {
            expect(Array.from('123')).toEqual(['1','2','3'])
        })
        test('if first arguments is null throw error', () => {
            expect(() => Array.from()).toThrow();
        })
    })

    describe('about second arguments', () => {
        test('if has second arguments and it is not function throw error', () => {
            expect(() => Array.from([1,2,3], 123)).toThrow();
        })
        
        test('return the double arr', () => {
            expect(Array.from([1,2,3], x => x*2)).toEqual([2,4,6]);
        })

        test('return the arr 1,2,3,4,5', () => {
            expect(Array.from({length: 5}, (v, i) => i+1)).toEqual([1,2,3,4,5]);
        })
    })

    describe('about this third arguments', () => {
        test('if has third arguments bind it into mapFn', () => {
            const obj = {
                handle: x => x * 3
            }
            expect(Array.from([1,2,3], function(x){ return this.handle(x) }, obj)).toEqual([3,6,9]);
        })
    })
})
    
    // const a = Array.from('abc');
    // console.log(a); // [ 'a', 'b', 'c' ]
    
// const b = Array.from(new Set([1,2,3]));
// console.log(b); // [ 1, 2, 3 ]

// const c = Array.from(new Map([[1, 2], [3, 4]]));
// console.log(c); // [ [ 1, 2 ], [ 3, 4 ] ]

// const d = (function() {
//     const d1 = Array.from(arguments);
//     console.log(d1);
// })(1,2,3); // [ 1, 2, 3 ]

// const e = Array.from([1,2,3], x => x*2);
// console.log(e); // [ 2, 4, 6 ]

// const f = Array.from({length: 5}, (v, i) => i + 1);
// console.log(f); // [ 1, 2, 3, 4, 5 ]

// const g1 = [1,2,3,4];
// const g2 = [3,4,5,6];
// const g3 = [5,6,7,8];
// const g = (function() {
//     const _g = [].concat.apply([], arguments);
//     console.log(Array.from(new Set(_g)));
// })(g1, g2, g3); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
