const { copyArray, DemoArray, DemoArrayForStability } = require("./constants");

const demoArray = copyArray(DemoArray);
const demoArrayForStability = copyArray(DemoArrayForStability);

// 比较排序， 合并都是在这个函数完成
const merge = (array, leftIndex, middleIndex, rightIndex) => {
   const temp = new Array(rightIndex - leftIndex + 1);
   let leftPosition = leftIndex;
   let rightPosition = middleIndex + 1;
   let tempIndex = 0;
   while(leftPosition <= middleIndex && rightPosition <= rightIndex) {
       temp[tempIndex] = parseInt(array[rightPosition]) < parseInt(array[leftPosition]) ? array[rightPosition++] : array[leftPosition++];
       tempIndex++;
   }
   while(leftPosition <= middleIndex) {
        temp[tempIndex++] = array[leftPosition++]; 
   }
   while(rightPosition <= rightIndex) {
        temp[tempIndex++] = array[rightPosition++];
   }
   for(let i = 0; i < temp.length; i++) {
        array[i + leftIndex] = temp[i];
   }
};

// 分成两组，合并是也要比较, 所以最小可以分割到一个元素一组，然后合并。
const mergeSort = (array, leftIndex, rightIndex) => {
    // 最小分割到1个元素
    if (rightIndex <= leftIndex) return;
    const middleIndex = leftIndex + parseInt((rightIndex - leftIndex) / 2);
    // 分割的数组，如果是单数，最终会有一个2个元素的数组和一个1个元素的素组，
    // 2个元素的数组会多一次mergeSort，分成两个一个元素的数组再比较排序合并
    mergeSort(array, leftIndex, middleIndex);
    mergeSort(array, middleIndex + 1, rightIndex);
    merge(array, leftIndex, middleIndex, rightIndex);
};

mergeSort(demoArray, 0, demoArray.length - 1);
mergeSort(demoArrayForStability, 0, demoArrayForStability.length - 1);
console.log(demoArray);
console.log(demoArrayForStability);
