var a1=[1,2];
var a2=a1;
a2[0]=2;
a1 //[1,2]




/*判断数组中是否有值为5*/

let arr1 = [1, 2, 3, 4, 5, 6];
/*es5*/
function isInclude(_val, _arr) {
    let _bool = false;
    for (let i = 0; i < _arr.length; i++) {
        if (_arr[i] == _val) {
            _bool = true;
        }
    }
    return _bool;
}
isInclude(5, arr1);//true
/*es6*/
arr1.includes(5);//true


/*判断数组中是否有值为NaN  */

let arr1 = [1, 2, 3, 4, 5, 6, NaN];
/*es5*/
function isInclude(_val, _arr) {
    let _bool = false;
    for (let i = 0; i < _arr.length; i++) {
        if (isNaN(_val) && isNaN(_arr[i])) {
            _bool = true;
        }
        if (_arr[i] == _val) {
            _bool = true;
        }

    }
    return _bool;
}
isInclude(NaN, arr1);//true
/*es6*/
let arr1 = [1, 2, 3, 4, 5, 6, NaN];
arr1.includes(NaN);//true

