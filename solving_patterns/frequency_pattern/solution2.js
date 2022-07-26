function same(arr1, arr2) {
    // Check if they both have the same length 
    if(arr1.length !== arr2.length) {
        return false
    }

    // convert arrays into freqency counts object
    let arr1Freq = {}
    let arr2Freq = {}

    for (let val of arr1) {
        arr1Freq[val] = (arr1Freq[val] || 0 ) + 1
    }
    for (let val of arr2) {
        arr2Freq[val] = (arr2Freq[val] || 0 ) + 1
    }

    // Compare key counts
    for(let key in arr1Freq) {
        // check if squared key doesnt exist in arr2Freq
        if(!(key ** 2 in  arr2Freq)) {
            return false
        }

        // Check if count of key in arr1Freq is equal to squared key the arr2Freq
        if(arr1Freq[key] !== arr2Freq[key ** 2]) {
            return false
        }
    }
    return true
}

console.log(same([1, 2, 4, 5], [1, 4, 9, 16]))