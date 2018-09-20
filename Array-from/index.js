Array.from = (function() {
    const isCallable = function(fn) {
        return typeof fn === 'function' && Object.prototype.toString.call(fn) === '[object Function]';
    };
    // 返回一个value的整数
    const toInteger = function(value) {
        const v = Number(value);
        if (isNaN(v)) {
            return 0;
        }
        // 0或者无穷大的数，直接返回
        if (v === 0 || !isFinite(v)) {
            return v;
        }
        return ( v > 0 ? 1 : -1 ) * Math.floor(Math.abs(v));
    }
    const maxSafeInteger = Math.pow(2, 53) - 1;
    const toLength = function(value) {
        const len = toInteger(value);
        // len的最小值不能比0小。最大值不能比maxSafeInteger大。
        return Math.min(Math.max(len, 0), maxSafeInteger);
    }
    return function (arrayLike/*, mapFn, thisArg*/) {
        const C = this;
        // 如果没有第一个参数，throw error。
        if (arrayLike == null) {
            throw new TypeError("Array.from requires an array-like object - not null or undefined");
        }
        const items = Object(arrayLike);
        let thisArg = '';
        const mapFn = arguments.length > 1 ? arguments[1] : void undefined; 
        if (typeof mapFn !== 'undefined') {
            // 如果有第二个参数，判断是第二个参数类型如果不是构造函数，throw error
            if (!isCallable(mapFn)) {
                throw new TypeError("Array.from when provided mapFn must be a function");
            }
            if (arguments.length > 2) {
                thisArg = arguments[2];
            }
        }
        const len = toLength(items.length);
        const arr = isCallable(C) ? Object(new C(len)) : new Array(len);
        let i = 0;
        
        while(i < len) {
            iValue = items[i];
            if (mapFn) {
                arr[i] = typeof thisArg === 'undefined' ? mapFn(iValue, i) : mapFn.call(thisArg, iValue, i);
            } else {
                arr[i] = iValue;
            }
            i++;
        }
        return arr;
    }
})();

module.exports = Array;


