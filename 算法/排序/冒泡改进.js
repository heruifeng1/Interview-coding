function bubbleSort(arr){
    let low = 0;
    let high = arr.length;
    while(!bubble(arr,low,high--)){}
    return arr
}
Array.prototype.bubbleSort = function () {
    let high = this.length
    //由低位迈向高位,减而治之
    while(0 < bubble(this,0,high)){}
}
//如果只有前r位无序,后n-r位都是有序的,那么此版本为最优
// 关键在于记录最后一个逆序对的位置,该位置之后的数据都是有序的
function bubble(arr,low,high) {
    let last = low; // last 是我们需要返回的最高位的位置
    console.log(last)
    while(++low<high){ //low是递增的
        if(arr[low-1]>arr[low]){
            last = low
            swap(arr,low-1,low)
        }
    }
    return last // last一定返回的是最右侧的逆序对的位置
}
function swap(arr,index1,index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp;
}
const cdef = [3,2,1,4,5,6,7,8,9]
cdef.bubbleSort()
console.log(cdef)
