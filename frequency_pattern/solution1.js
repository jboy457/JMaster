function same(arr1, arr2) {
    // Check if they both have the same length 
    if(arr1.length !== arr2.length) {
        return false
    }

    // Iterate over the first array
    for (let val of arr1) {
        // Check if squared value exist in arr2
        const exist = arr2.indexOf(val ** 2);
        if(exist === -1) {
            return false
        }
        arr2.splice(val, 1);
    }
    return true
}

console.log(same([1, 2, 3, 4], [1, 4, 9, 16]))