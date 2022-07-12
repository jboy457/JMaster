function addUpTo(n) {
    return n * (n + 1) / 2;
}

// Time before starting the operation
var startTime = Date.now();
addUpTo(1000000000);
var endTime = Date.now();

console.log(`Total time: ${(endTime- startTime) / 1000} seconds`)

