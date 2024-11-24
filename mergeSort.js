const mergeSort = (array) => {
    if (array.length <= 1) return array;
    const middle = Math.floor(array.length / 2);
    let leftArray = mergeSort(array.slice(0, middle));
    let rightArray = mergeSort(array.slice(middle));

    return merge(leftArray, rightArray);
}


const merge = (left, right) => {
    const array = []
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length &&  rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array.push(left[leftIndex]);
            leftIndex ++;
        } else {
            array.push(right[rightIndex]);
            rightIndex ++;
        }
    }
    while (leftIndex < left.length) {
        array.push(left[leftIndex]);
        leftIndex ++;
    }
    while (rightIndex < right.length) {
        array.push(right[rightIndex]);
        rightIndex++;
    }
    return array;
}


console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]))