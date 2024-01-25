class DynamicArray {
    constructor(size) {
        this.size = size;
        this.array = new Array(size);
    }

    // get element by index
    get(index) {
        if (this.checkIndexRange(index)) {
            throw 'Index out of range.'
        } 
        return this.array[index];
    }

    // set or add;
    add(index, value) {
        const lastIndex = this.size;
        const newSize = this.size + 1;
        const newArray = new Array(newSize);
        const insertIndex = this.checkIndexRange(index) ? lastIndex : index;
        for (let i = 0, j = 0; i <= newSize - 1; i++){
           if (i === insertIndex) {
            newArray[i] = value;
            continue;
           } else {
            newArray[i] = this.array[j];
            j++;
           }
        }
        this.array = newArray;
        this.size = newSize;
    }

    remove(index) {
       if(this.checkIndexRange(index)) return;
       const newSize = this.size - 1;
       const newArray = new Array(newSize);
       for (let i = 0, j = 0; i <= this.size - 1; i++) {
            if (i === index) {
                continue;
            } else {
                newArray[j] = this.array[i];
                j++;
            }
       }
       this.size = newSize;
       this.array = newArray;
    }

    checkIndexRange(index) {
        return index >= this.size || index < 0;
    }
}

const {stdin, stdout} = process;

function main() {
    const size= Number(stdin.read());
    console.log(typeof size);
    const array = new DynamicArray(size);
    return array;
}
const array = main();
console.log(array.size);
array.add(0, 1);
array.add(1, 2);
array.add(2, 4);
array.add(3, 5);
console.log(array, array.size);
array.add(2, 3);
console.log(array, array.size);
array.add(7, 6);
console.log(array, array.size);

array.remove(-1);
console.log(array, array.size);
array.remove(12);
console.log(array, array.size);

array.remove(2);
console.log(array, array.size);


console.log(array.get(4));
console.log(array.get(8));





