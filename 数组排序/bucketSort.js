const { copyArray, DemoArray } = require("./constants");
const { countingSort } = require("./countingSort");

const demoArray = copyArray(DemoArray);

const bucketSort = (array, bucketSize) => {
    const minValue = Math.min(...array);
    const maxValue = Math.max(...array);
    const bucketCount = Math.ceil((maxValue - minValue) / bucketSize);
    const buckets = new Array(bucketCount);
    // 导致每个buckets的元素，指向同一个数组，然后push进去的内容是整个数组，所有bucket数组元素内容一样。
    // buckets.fill([]);
    for (let i = 0; i < array.length; i++) {
        // 元素属于哪个桶，也就是桶的index，也可以像bucket的数量一样通过bucketSize计算出来。
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
        buckets[bucketIndex] = buckets[bucketIndex] || [];
        buckets[bucketIndex].push(array[i]);
    }
    let index = 0;
    for (let j = 0; j < buckets.length; j++) {
        // 空桶不做处理
        if (buckets[j]) {
            // 可以用其他方式排序。
            countingSort(buckets[j], true);
            // 平铺排好序的桶里的元素。
            for(let m = 0; m < buckets[j].length; m++) {
                array[index++] = buckets[j][m];
            }
        }
    }
};
bucketSort(demoArray, 5);
console.log(demoArray);