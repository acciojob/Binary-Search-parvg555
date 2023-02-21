function binarySearch(nums, target) {
  let start = 0,
    end = nums.length - 1;
  let index = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      index = mid;
      return index;
    } else if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return index;
}

module.exports = binarySearch;