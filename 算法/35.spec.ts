//给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
//
// 你可以假设数组中无重复元素。
//示例 1:
//
// 输入: [1,3,5,6], 5
// 输出: 2
// 示例 2:
//
// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:
//
// 输入: [1,3,5,6], 7
// 输出: 4
// 示例 4:
//
// 输入: [1,3,5,6], 0
// 输出: 0
//
function searchInsert(nums: number[], target: number): number {
    let length = nums.length;
    if(length === 0){
        return 0
    }
    if(target > nums[length-1]){
        return length
    }
    let low = 0;
    let high = length;
    while(low<=high){
        let middle = (low + high) >> 1;
        let middleValue = nums[middle];
        if(middleValue === target){
            return middle
        }else if(middleValue < target){
            low = middle + 1
        }else if(middleValue > target){
            high = middle - 1
        }
    }
    return low
};
test.each([
    [[1,3,5,6],5 ,2 ],
    [[1,3,5,6],2 ,1 ],
    [[1,3,5,6],7 ,4 ],
    [[1,3,5,6],0 ,0 ],
])('should', (a, b, expected) => {
    //when
    const result = searchInsert(a, b);

    //then
    expect(result).toBe(expected);
});
