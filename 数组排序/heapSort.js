const { swapData, copyArray, DemoArray } = require("./constants");

const demoArray = copyArray(DemoArray);

const checkHeap = (array, i, n) => {
   const left = 2 * i + 1;
   const right = 2 * i + 2;
   let largest = i;
   // 因为不一定左右节点都有，所以分别比较
   if (left < n && array[left] > array[largest]) {
        largest = left;
   }
   if (left < n && array[right] > array[largest]) {
        largest = right;
   }
   // 当当前节点的值不是，当前节点及其左右节点中的最大值时，交换最大值和当前节点的位置
   // largest的所以是下一层的索引，继续往下构建，使得每一层满足堆的条件。
   if (largest !== i) {
        swapData(array, largest, i);
        checkHeap(array, largest, n);
   }
}

const buildMaxHeap = (array) => {
    const length = array.length;
    // 由于左右节点分别等于当前节点乘以2 加1或2，所以由叶子节点的非叶子节点肯定是从parseInt(length / 2) - 1开始的，不然叶子节点索引会超出数组长度。
    for (let i = parseInt(length / 2) - 1; i >= 0; i--) {
        checkHeap(array, i, length);
    }
}

const heapSort = (array) => {
    const length = array.length;
    buildMaxHeap(array);
    console.log('heap:', array);
    for (let i = length - 1; i >= 0; i--) {
        swapData(array, 0, i);
        // 交换顶部值到数组排序区后，顶部元素不符合条件，执行元素顶堆比较操作，往下排到合适的层级和位置的同时，找到剩余元素中的顶点值，也就是下一个最值。
        checkHeap(array, 0, i - 1);
    }
};

heapSort(demoArray);
console.log(demoArray);   