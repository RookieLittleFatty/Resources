const { DemoArray, copyArray, ListArray } = require("./constants");

const reduceCount = (countArray) => {
    for(let i = 1; i < countArray.length; i++){
        countArray[i] = countArray[i] + countArray[i - 1];
    }
    return countArray;
}


const countArray = (array, min) => {
    const max = Math.max(...array);
    // 保证array的值存在于countArray的下标中的某一个
    const countArray = new Array(max - min + 1);
    countArray.fill(0);
    for(let i = 0; i < array.length; i++) {
        // 通过countArray的下标记录array的值和建立有序性
        // 通过countArray的值记录数值数量
        countArray[array[i] - min]++;
    }
    console.log('size of count array:', countArray.length);
    return countArray;
}


const countingSort = (array, isFromMin) => {
    const min = isFromMin ? Math.min(...array) : 0;
    let countResult = countArray(array, min);
    let index = 0;
    // 根据记录的数量，有序的铺开下标值
    for(let j = 0; j < countResult.length; j++) {
        for (let i = 0; i < countResult[j]; i++) {
            array[index++] = j + min;
        }
    }
    return array;
};

const stableCountingSort = (arrayList, field) => {
    const array = field ? arrayList.map(item => item[field]) : arrayList
    const sortedArray = new Array(array.length);
    const min = Math.min(...array);
    let countResult = countArray(array, min);
    // array： arrayIndex， arrayElement；sortedArray：sortedArrayIndex， sortedArrayElements；countArray: countArrayIndex, countArrayElement; 
    // countArrayIndex = arrayElement - min; countArrayElement - 1 = sortedArrayIndex; countArrayElement= countArray[countArrayIndex];
    // sortedArrayIndex = countArray[countArrayIndex] - 1 = countArray[arrayElement - min] - 1;
    countResult = reduceCount(countResult);
    // unstable;
    // for(let i = 0; i < arrayList.length; i++) {;
    //         // find array[i]'s index in sorted array;
    //         sortedArray[countResult[array[i]-min] - 1] = arrayList[i];
    //         // decrease reduced index；
    //         countResult[array[i]-min]--;
    // }
    // stable: countArrayElement的值，是累计的值的最后一个下标，通过减减累计的计数值的方式向前推的下标，所以反向遍历原始数组，保证数据的稳定性
    for(let i = arrayList.length - 1; i >= 0; i--) {;
        // find array[i]'s index in sorted array;
        sortedArray[countResult[array[i] - min] - 1] = arrayList[i];
        // decrease reduced index；
        countResult[array[i]-min]--;
    }
    return sortedArray;
}


const countingSortForRadixSort = (arrayList, sortArrayMapFunction) => {
    const array = typeof sortArrayMapFunction === 'function' ? sortArrayMapFunction(arrayList) : arrayList;
    const sortedArray = new Array(array.length);
    const min = Math.min(...array);
    let countResult = countArray(array, min);
    // array： arrayIndex， arrayElement；sortedArray：sortedArrayIndex， sortedArrayElements；countArray: countArrayIndex, countArrayElement; 
    // countArrayIndex = arrayElement - min; countArrayElement - 1 = sortedArrayIndex; countArrayElement= countArray[countArrayIndex];
    // sortedArrayIndex = countArray[countArrayIndex] - 1 = countArray[arrayElement - min] - 1;
    countResult = reduceCount(countResult);
    // unstable;
    // for(let i = 0; i < arrayList.length; i++) {;
    //         // find array[i]'s index in sorted array;
    //         sortedArray[countResult[array[i]-min] - 1] = arrayList[i];
    //         // decrease reduced index；
    //         countResult[array[i]-min]--;
    // }
    // stable: countArrayElement的值，是累计的值的最后一个下标，通过减减累计的计数值的方式向前推的下标，所以反向遍历原始数组，保证数据的稳定性
    for(let i = arrayList.length - 1; i >= 0; i--) {;
        // find array[i]'s index in sorted array;
        sortedArray[countResult[array[i] - min] - 1] = arrayList[i];
        // decrease reduced index；
        countResult[array[i]-min]--;
    }
    return sortedArray;
}
// 负数和小数

// 小数： 化小数为整数后进行比较
// 负数： 化负数为整数后再进行比较


// console.log(countingSort(copyArray(DemoArray)));
// console.log(countingSort(copyArray(DemoArray), true));
// console.log(stableCountingSort(copyArray(DemoArray)));
// console.log(stableCountingSort(copyArray(ListArray), 'value'));

module.exports = {
    countingSort
}