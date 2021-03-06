//只能完成一笔交易.
//所以需要寻找的是前驱最小,和其后最大.
// 遍历,每次更新前驱最小,一旦发现大于前驱最小,且利润大于现有利润的,更新现有利润
[7,1,5,3,6,4]

var maxProfit = function(prices) {
    let maxProfit = 0;
    let high = 0;
    let low = prices[0];
    let i = 1;
    while(i<prices.length){
        const price = prices[i];
        //下降渠道
        if(price < high){
            maxProfit += high - low;
            low = price
            high = 0;
        }else{
            //上升渠道
            if(price > high){
                high = price
            }
            if(price < low){
                low = price
            }
        }

        i++
    }
    return maxProfit
};
