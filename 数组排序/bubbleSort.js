const {DemoArray, DemoArrayForStability, copyArray} = require('./constants') ;

const compareAndSwap = (array, index) => {
    const nextIndex = index + 1;
    if (parseInt(array[index]) > parseInt(array[nextIndex])){
        const temp = array[index];
        array[index] = array[nextIndex];
        array[nextIndex] = temp;
    }
}

// 不停比较交换相邻数据，得到最值
const bubbleSort = (array) => {
    // 界定未排序区
    for (let j = array.length; j > 0; j--) {
        // 循环未排序区，不断调换位移，获取此次排序比较中的最大值
        for (let i = 0; i < j; i++) {
           compareAndSwap(array, i);
        }
    }
    return array;
}

// 递归
const recursionBubbleSort = (array, lengthForBubble) => {
    if (lengthForBubble <= 0) return array;
    for(let i = 0; i < lengthForBubble; i++) {
       compareAndSwap(array, i);
    }
    return recursionBubbleSort(array, lengthForBubble - 1);
};

console.log(bubbleSort(copyArray(DemoArray)));

console.log(recursionBubbleSort(copyArray(DemoArray), DemoArray.length));

// 稳定性
console.log(bubbleSort(copyArray(DemoArrayForStability)));

console.log(recursionBubbleSort(copyArray(DemoArrayForStability), DemoArray.length));