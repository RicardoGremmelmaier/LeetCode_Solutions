/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Author: Ricardo Marthus Gremmelmaier
Date: 6/21/2024

O(n²) - testa todas as possibilidades
Da pra melhorar
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//O(n²)
var twoSum = function(nums, target) {
    let i,j;
    let out =[];
    for(i = 0; i < nums.length; i++){
        for(j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                out.push(i);
                out.push(j);
            }
        }
    }
    return out;
}
