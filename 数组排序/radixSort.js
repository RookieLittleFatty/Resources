const { copyArray, DemoArray } = require("./constants");

const demoArray = copyArray(DemoArray);
// 获取最大数的位数
const getBitCount = (value) => {
    let bitCount = 1;
    while(value >= 10 ) {
        const bitNumber  = value % 10;
        value = (value - bitNumber) / 10;
        bitCount+=1;
    }
    return bitCount;
}
// 获取数字位的数字
const calculateCountIndex = (array, elementIndex, radix) => {
    return parseInt(array[elementIndex] / radix) % 10;
}

const countingSort = (array, countArray, radix) => {
    countArray.fill(0);
    for(let i = 0; i < array.length; i++) {
        countArray[calculateCountIndex(array, i, radix)]++;
    }
    for(let j = 1; j < countArray.length; j++) {
        countArray[j] = countArray[j] + countArray[j - 1];
    }
    const temp = new Array(array.length);

    // 一定要反向遍历，为了维持地位排序的顺序保持不变。
    // 原本计数排序正向遍历的结果只是不稳定，但由于计数的元素值相等，所以看上去可能没有很大差别
    // 但是在基数排序的运用中，因为排序的是经过计算的当前位面的数字，比如在排十位数字的时候，2,3,4，都会放到0计数下，
    // 对计数排序来说拿出来的其实都是0，是一样的，但是实际元素值都是小于10的个位数字
    // 数组正向是排好的个位数，但是push进十位统计数组并累减拿出统计数组却是反向的，所以会导致个位数排序颠倒
    // 总之就是低位排序好之后，统计高位数字的时候，由于index的累计是反向的，所以要先进后出。
    // 正向遍历先进的，反向遍历让先进的后出。
    for(let m = array.length - 1; m >= 0;  m--) {
        const countArrayIndex = calculateCountIndex(array, m, radix);
        temp[countArray[countArrayIndex] - 1] = array[m];
        countArray[countArrayIndex]--;
    }
    for (let n = 0; n < temp.length; n++) {
        array[n] = temp[n];
    }
    
}

const radixSort = (array) => {
    const max = Math.max(...array);
    const bitCount = getBitCount(max);
    const countArray = new Array(10);
    for (let i = 0; i < bitCount; i++) {
        const radix = Math.pow(10, i);
        countingSort(array, countArray, radix);
    }
}

radixSort(demoArray);
console.log(demoArray);