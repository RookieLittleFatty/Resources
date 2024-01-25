const DemoArray = [3, 44, 38, 5, 432, 47, 15, 36, 26, 27, 2, 283, 127, 46, 4, 19, 108, 50, 98,48, 15];
const DemoArrayForStability = [3, 44, '15-c', 38, '15-b', 5, 47, '15-a',15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
const copyArray = (array) => {return JSON.parse(JSON.stringify(array));};

const ListArray = [
    {
        value: 4,
        id: 'a'
    },
    {
        value: 6,
        id: 'b'
    },
    {
        value: 2,
        id: 'c'
    },
    {
        value: 0,
        id: 'd'
    },
    {
        value: 4,
        id: 'e'
    },
    {
        value: 8,
        id: 'f'
    },
    {
        value: 6,
        id: 'g'
    }
];
const swapData = (array, indexOne, indexTwo) => {
    const temp = array[indexTwo];
    array[indexTwo] = array[indexOne];
    array[indexOne] = temp;
}

module.exports = {
    copyArray,
    DemoArrayForStability,
    DemoArray,
    ListArray,
    swapData,
};