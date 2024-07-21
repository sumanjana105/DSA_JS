function fib(nth_term){
    if(nth_term === 1){
        //console.log(1);
        return 1;
    }
    function recFibo(f_term, s_term, nth_term){
        if(nth_term === 0){
            return 0;
        }
         //console.log(f_term+s_term);
        return f_term + recFibo(s_term, f_term+s_term, --nth_term);
    }
    return 1+ recFibo(0,1,--nth_term);
}

fib(11);