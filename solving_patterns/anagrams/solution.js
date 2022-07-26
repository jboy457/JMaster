function validAnagram(str1, str2) {
    // Check both array length if they are equal
    if(str1.length !== str2.length) {
        return false
    }

    // convert string into frequecy object for each char
    let lookup = {}

    for (let char of str1) {
        lookup[char] = (lookup[char] || 0 ) + 1
    }

    for (let char of str2) {
        if(!lookup[char]) {
            return false
        } else {
            lookup[char] -= 1
        }
    }

    return true

}


console.log(validAnagram('aaz', 'aza'));