/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     let map = new Map(); // Stores number -> index

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i]; // Found the pair
        }

        map.set(nums[i], i); // Store current number and index
    }

    return []; 
};