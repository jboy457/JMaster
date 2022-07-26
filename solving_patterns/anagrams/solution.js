function solution(str1, str2) {
    // Check both array length if they are equal
    if(str1.length !== str2.length) {
        return false
    }

    // convert string into frequecy object for each char
    let str1Freq = {}
    let str2Freq = {}

    for (let char of str1) {
        str1Freq[char] = (str1Freq[char] || 0 ) + 1
    }

    for (let char of str2) {
        str2Freq[char] = (str2Freq[char] || 0 ) + 1
    }
    console.log(str1Freq, str2Freq)
    for (let char in str1Freq) {
        // Check if char exist in second string
        if(!(char in str2Freq)) {
            return false
        }
        // Check if char account in first string equal second 
        if(str1Freq[char] !== str2Freq[char]) {
            return false
        }
    }

    return true

}


console.log(solution('ics', 'sci'));