function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// Time before starting the operation
var startTime = Date.now();
addUpTo(1000000000);
var endTime = Date.now();

console.log(`Total time: ${(endTime- startTime) / 1000} seconds`)



