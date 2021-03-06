/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/

const arr1 = ["a", "a", "a"]
// # const expected1 = {a: 3}


let i = 0;
expected1 = {};
function water(arr){    
    let count = (arr.length);    
    expected1[arr[i]] = count ;
    console.log(expected1) ;
}
water(arr1);

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];



function fire(arr){
    let expected2 = {};
    for (let i = 0; i < arr.length; i++){
        for (let x = 0; x < arr.length; x++){
            if arr[i] == arr[x]{

            }
        }
    }
}



// for loop and .count func, now I have a nested for loop which is bad!!!  Use loop plus confitional statements //

const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 * 
 * some_dict = {}
 * some_dict['key'] = value
 */
function frequencyTableBuilder(arr) {}

// *****************************************************************

// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {}