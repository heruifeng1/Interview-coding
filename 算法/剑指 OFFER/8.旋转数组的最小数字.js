var minArray = function(numbers) {
    let left=0,
        right=numbers.length-1;
    while(left<right){
        // 二分法
        const temp=Math.floor(left+(right-left)/2);
        if(numbers[temp] > numbers[right]){
            left=temp+1;
        }else if (numbers[temp] < numbers[right]){
            right=temp
        }else{
            right--
        }
    }
    return numbers[left]
};
console.log(minArray([3,4,5,1,2]) === 1)
console.log(minArray([2,2,2,0,1]) === 0)
console.log(minArray([1,3,5]) === 1)
console.log(minArray([1,1,1]) === 1)
console.log(minArray([3,1,3]) === 1)
console.log(minArray([3,1]) === 1)
console.log(minArray([10,1,10,10,10]) === 1)
