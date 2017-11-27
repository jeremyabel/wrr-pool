'use strict';

function gcd(a, b) {
    var max = Math.max(a, b);
    var min = Math.min(a, b);
    var mod = 0;

    while (min !== 0) {
        mod = max % min;
        max = min;
        min = mod;
    }

    return max;
}

module.exports = gcd;