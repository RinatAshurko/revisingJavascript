'use strict';

const log = function (a, b, ...rest) {
    console.log(a, b, rest);
}

log(1, 2, 'lower', 'loser', 'crouser');
function double (a, basis = 2) {
    console.log(a * basis);
}
double(3, 3);



















