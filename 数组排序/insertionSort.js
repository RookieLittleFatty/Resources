
const {DemoArray, DemoArrayForStability, copyArray} = require('./constants') ;
// 先腾出位置，再插入数据
const insertionSort = (array) => {
    // 遍历未排序区数据
    for (let i = 1; i < array.length; i++) {
        const currentNumber = array[i];
        let j = i - 1;
        while(j >= 0 && parseInt(currentNumber) < parseInt(array[j])) {
        // while(j >= 0 && currentNumber < array[j]) {
            array[j + 1] = array[j]; // 后移
            j--;
        }
        array[j + 1] = currentNumber;
    }
    return array;
}

console.log(insertionSort(copyArray(DemoArray)));

console.log(insertionSort(copyArray(DemoArrayForStability)));
