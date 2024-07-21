function factorial(fact){
   if (fact === 0){
    return 1;
   }
   return fact * factorial(--fact);
}

console.log(factorial(7));