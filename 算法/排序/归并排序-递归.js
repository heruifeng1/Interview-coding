function _mergeSort(arr, low, high) {
    if (high - low < 1) return;
    const middle = (low + high) >> 1;
    _mergeSort(arr, low, middle);
    _mergeSort(arr, middle+1, high);
    merge(arr, low, middle, high)
}

function giveLeft(arr, low, i, b, j) {
    arr[low + i] = b[j++];
    return j;
}

function giveRight(arr, low, i, valInRight) {
    arr[low + i] = valInRight;
}

function merge(arr, low, middle, high) {
    if(high === 1){
        debugger
    }
    const lb = middle - low;
    const b = new Array(lb);
    const lc = high - middle;
    //缓存数据到左序列中
    for (let i = 0; i < lb; b[i] = getValInArr(arr,low,i),i++);

    for(let i=0,j=0,k=0;(j<lb) || (k<lc);i++){
        let bElement = b[j];
        let valInRight = k<lc ? getValInArr(arr,low+lb,k) : Infinity;
        let leftBigger = bElement <= valInRight;
        if((j<lb) && (lc<=k ||leftBigger)) j = giveLeft(arr, low, i, b, j);
        if((k<lc) && (lb<=j || !leftBigger)) {giveRight(arr, low, i, valInRight); k++}
    }
}
const abc = [5,4,3,2,1]
function mergeSort(arr){
    _mergeSort(arr,0,arr.length-1)
}
mergeSort(abc)
console.log(abc)
function getValInArr(arr,low,index){
    return arr[low + index]
}
