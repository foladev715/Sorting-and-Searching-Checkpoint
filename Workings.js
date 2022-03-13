// Declare the input array
let nums = [3, 0, 2, 5, -1, 4, 1];

// Insertion sort function
const insertion_Sort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    //start with the second item
    let current = nums[i];
    for (var j = i - 1; nums[j] > current && j > -1; j--) {
      //if the previous element is greater than the current element, move the previous element one place to the right.
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = current; //drop the current element in the position where the previous element used to be if the previous element is no longer larger than the current element at the end of the for loop
  }
  return nums; // return the sorted array
};
console.log(insertion_Sort(nums));
