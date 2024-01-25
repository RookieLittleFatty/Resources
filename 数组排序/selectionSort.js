const { copyArray, DemoArray } = require("./constants");

const selectionSort = (array) => {
    // 1个及1个以下元素的数组不需要排序
    if (array.length <= 1) {
        return array;
    }

    for(let i = 0; i < array.length; i++) {
        // 初始最小元素为剩余元素中的第一个元素的索引
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            // 从剩余元素中比较选择当前最小元素，并记录更改最小元素索引
            if (parseInt(array[j]) < parseInt(array[minIndex])) {
                minIndex = j;
            }
        }
        // 选择到的最小元素索引和初始化的索引位置不一致时，交换位置
        if (minIndex != i) {
            const temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
};
console.log(selectionSort(copyArray(DemoArray)));
