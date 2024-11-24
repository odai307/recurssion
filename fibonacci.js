const fibs = (n) => {
    result = [];
    for (let i = 0; i < n; i++) {
        if (i < 2) result.push(i);
        else {
            firstFib = result[i-1];
            secondFib = result[i-2];
            result.push(firstFib+secondFib);
        }
    }
    return result;
}


const fibsRec = (n) => {
    if (n < 2) return n;
    return fibsRec(n - 1) + fibsRec(n - 2);
    
}

console.log(fibs(8));
console.log(fibsRec(7))