package solving_patterns.anagrams;

import java.util.Arrays;

public class Anagram {
    static public void main(String[] args) {
        System.out.print(validAnagram("aaz", "aza"));
    }

    static public boolean validAnagram(String str1, String str2) {
        boolean isValid = false;

        // Check if the string length are the same;
        if(str1.length() == str2.length()) {
            // Convert to char array
            char[] arr1 = str1.toCharArray();
            char[] arr2 = str2.toCharArray();

            // Sort the char array
            Arrays.sort(arr1);
            Arrays.sort(arr2);


            if(Arrays.equals(arr1, arr2)) {
                isValid = true;
            }
        }

        return isValid;
    }
}
