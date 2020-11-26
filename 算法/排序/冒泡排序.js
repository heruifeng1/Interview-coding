function bubbleSort(arr){
    let low = 0;
    let high = arr.length;
    while(!bubble(arr,low,high--)){}
    return arr
}
Array.prototype.bubbleSort = function () {
    let high = this.length
    //由低位迈向高位,减而治之
    while(!bubble(this,0,high--)){}
}
function bubble(arr,low,high) {
    let sorted = true;
    while(++low<high){
        if(arr[low-1]>arr[low]){
            sorted = false;
            swap(arr,low-1,low)
        }
    }
    return sorted
}
function swap(arr,index1,index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp;
}
