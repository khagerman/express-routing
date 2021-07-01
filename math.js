function mean(nums) {
  return parseFloat((nums.reduce((a, b) => a + b) / nums.length).toFixed(2));
}

const median = (arr) => {
  const middle = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  // if number is odd return the middle number, otherwise return average
  return arr.length % 2 !== 0
    ? nums[middle]
    : (nums[middle - 1] + nums[middle]) / 2;
};

function checkNums(arr) {
  for (let num of arr) {
    if (!parseInt(num)) {
      return false;
    } else {
      return true;
    }
  }
}

function makeArrayOfNums(nums) {
  noCommas = nums.split(",");
  return (toNums = noCommas.map(function (x) {
    if (x != null) {
      return parseInt(x, 10);
    }
  }));
}
// throw new ExpressError("Oops, please enter valid numbers!", 400);

function mode(nums) {
  // count num which number is highest keys

  let countNums = nums.reduce(function (acc, next) {
    if (acc[next]) {
      acc[next]++;
    } else {
      acc[next] = 1;
    }
    return acc;
  }, {});
  return parseFloat(
    Object.keys(countNums).reduce((a, b) =>
      countNums[a] > countNums[b] ? a : b
    )
  );
}

module.exports = {
  mean,
  median,
  makeArrayOfNums,
  mode,
  checkNums,
};
