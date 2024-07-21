function binarySearch(array, value){
    let left = 0;
    let right = array.length - 1;
    console.log(left);
    console.log(right);
    while (left <= right){
        mid = Math.floor((right + left)/2);
        console.log("left: " +left+ " right: "+ right+ " mid: " +mid);
        if(array[mid] === value) return mid;
        else if (array[mid] < value) {
            left = mid+1;
        }
        else
            right = mid-1;
    }
    return -1;
  // add whatever parameters you deem necessary - good luck!
}
console.log("result : " + binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 95) );
//binarySearch([1,2,3,4,5],2);