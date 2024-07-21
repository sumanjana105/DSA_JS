// function bubbleSort(arr){
//     for(let i = 0; i < arr.length ; i++){
//         for(let j=0; j < arr.length - i -1 ;  j++){
//             if (arr[j]> arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr
// }

console.log(bubbleSort([37,45,29,8,12,88,-3]));

// ES6 version also optimized with noSwaps for already sorted array in early stage
function bubbleSort(arr){
    let noSwap;
    const swap = (arr, idx1, idx2)=>{
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    for(let i = 0; i < arr.length ; i++){
        noSwap = true;
        for(let j=0; j < arr.length - i -1 ;  j++){
            if (arr[j]> arr[j+1]){
                noSwap = false;
                swap(arr, j, j+1);
            }
        }
        if(noSwap) break;
    }
    return arr;
}