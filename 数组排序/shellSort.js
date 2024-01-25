const { copyArray, DemoArray } = require("./constants")

const demoArray = copyArray(DemoArray);

const shellSort = (array) => {
    const length = array.length;
    for (let gap = parseInt(length / 2); gap > 0; gap = parseInt(gap / 2)) {
        // 遍历未排序区
       for(let i = gap; i < array.length; i = i + gap) {
            // 未排序区当前数据
            const unsortedCurrent = array[i];

            // 反向遍历排序区数据，因此排序区index应该是从未排序区前一个开始,也就是i减去一个gap；
            let insertIndex = i - gap;
            // 遍历排序区数据，一是为了逐个往后移动大于当前数据的位置，好空出插入位置，
            // 二是同时记录插入位置，完成数据的插入。
            while(insertIndex >= 0 && unsortedCurrent < array[insertIndex]) {
                array[insertIndex + gap] = array[insertIndex];
                insertIndex-=gap;
            }
            // 最后终止循环的是小于0的位置，或者是前一个更小的数据所在位置，所以要插入位置应当是后一个加上gap的位置
            array[insertIndex + gap] = unsortedCurrent;
       }
    }
}

shellSort(demoArray);
console.log(demoArray);