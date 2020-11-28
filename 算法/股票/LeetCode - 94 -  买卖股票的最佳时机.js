//只能完成一笔交易.
//所以需要寻找的是前驱最小,和其后最大.
// 遍历,每次更新前驱最小,一旦发现大于前驱最小,且利润大于现有利润的,更新现有利润
[7,1,5,3,6,4]

var maxProfit = function(prices) {
    let maxProfit = 0;
    let i = 1;
    let pre_min = prices[0]
    while(i<prices.length){
        const curr = prices[i];
        if(curr < pre_min){
            pre_min = curr;
        }else{
            const currProfit = curr - pre_min
            if(currProfit > maxProfit){
                maxProfit = currProfit
            }
        }
        i++
    }
    return maxProfit

};
