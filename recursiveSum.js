function recursiveRange(range){
   if(range === 0){
    return 0;
   }
   return range + recursiveRange(--range);
}

console.log( recursiveRange(10));