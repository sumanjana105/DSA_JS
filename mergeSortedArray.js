function mergeSortedArray(arr1, arr2) {
    let results = [];
    let j = 0;
    let i = 0;
    while (i < arr1.length, j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            results.push(arr1[i]);
            i++;
        }
        else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }


    return results
}

console.log(mergeSortedArray([], [2, 14, 99, 100]));