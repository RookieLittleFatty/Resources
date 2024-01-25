const { swapData, copyArray, DemoArray, DemoArrayForStability } = require("./constants");

const demoArray = copyArray(DemoArray);
const demoArrayForStability = copyArray(DemoArrayForStability);

const sort = (array, left, right) => {
    const pivotIndex = right;
    // 移动找到标准值在分好的数组中的索引，
    let location = left;
    // 遍历, 通过把i的索引的数据和location索引的数据交换，把小于标准值的数据换到左边。
    for (let i = left; i <= right; i++) {
        if (parseInt(array[i]) < parseInt(array[pivotIndex])) {
            swapData(array, location, i);
            // 左边累计一个小于标准值的值，标准值所在索引累计加1
            location++;
        }
    }
    // 交换标准值到location位置，达到左边是小于标准的数据，右边是大于标准的数据。
    swapData(array, location, pivotIndex);
    return location;
}

// 找到一个元素作为比较元素
// 然后将所有元素和这个元素比较，小的放左边，大的放右边
// 再将左右分开执行同样的排序操作
const quickSort = (array, left, right) => {
    if(right <= left) return;
    const pivotLocation = sort(array, left, right);
    quickSort(array, left, pivotLocation - 1);
    quickSort(array, pivotLocation + 1, right);
};

quickSort(demoArray, 0, demoArray.length - 1);
quickSort(demoArrayForStability, 0, demoArrayForStability.length - 1);

console.log(demoArray);
console.log(demoArrayForStability);