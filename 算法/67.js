/**
 * @param {string} s
 * @return {number}
 */
function getFirstMeaningChar (s){
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        let sign = '+'
        if(char === ' '){
            continue;
        }
        if(char === '-'){
            sign = '-'
        }
        return [sign,]
    }
    return [false,'']
}

var myAtoi = function(s) {
    let isEmptyString = s === "";
    if(isEmptyString || isSign(s)) {
        return 0
    }
    const [isFirstCharMakeSense,s1] = getFirstMeaningChar(s)
    if(!isFirstCharMakeSense || s1.length ===0){
        return 0
    }
    const min = -Math.pow(2,31);
    const max = Math.pow(2,31) -1;
    let result = '';
    for (let i = 0; i < s1.length; i++) {
        let char = s1.charAt(i);
        if(isSign(result) && isSign(char) ){
            return 0
        }
        if(isCharMakeSense(char)){
            result += char;
        }else{
            break;
        }
    }
    let final = parseInt(result,10);
    let abc = Math.max(Math.min(max,final),min);
    return abc;
};
//丢弃开头的无用整数
//第一个非空字符为正负号要保留
//后面的数字要拼起来
//有符号整数范围
// 第一个非空字符不是数字直接返回0
//超过直接返回界限
function isCharMakeSense(char){
    return [isNumber,isSign].some(fn=>fn(char))
}
const isNumber = (char)=>{
    return char.match(/[0-9]/)
}
const isSign = (char) => {
    return ['+','-'].includes(char)
}
console.log(myAtoi("42"));
