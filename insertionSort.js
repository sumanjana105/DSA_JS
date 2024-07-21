// function insertionSort(arr){
//     function swap(arr, idx1, idx2){
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     }

//     for(let i=1; i < arr.length; i++){
//         for(let j=i; j > 0 ; j--){
//             if(arr[j] < arr[j-1]) swap(arr, j, j-1)
//         }
//     }
//     return arr;
// }

console.log(insertionSort([2,1,9,76,4]))

function insertionSort(arr){

    for(let i=1; i < arr.length; i++){
        let j = 0;
        let currentVal = arr[i];
        for( j=i; j > 0 && arr[j-1] > currentVal ; j--){
            if(currentVal < arr[j-1]) arr[j] = arr[j-1]
            console.log(arr);
        }
        arr[j] = currentVal;
        
    }
    return arr;
}