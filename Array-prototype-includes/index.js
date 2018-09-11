
module.exports = Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {
        if (this === null) {
            throw new typeError('"this" is null or undefined');
        }
        const o = new Object(this);
        const length = o.length;
        fromIndex = fromIndex || 0;
        if (fromIndex >= length) {
            return false;
        }
        if (length === 0) {
            return false;
        }
        let k = fromIndex;
        if (fromIndex < 0 ) {
            k = fromIndex + length > 0 ? fromIndex + length : 0;
        }
        while(k < length) {
            if (o[k] === searchElement) {
                return true;
            }
            k++;
        }
        return false;
    }
})