const express = require("express");
const ExpressError = require("./expressError");
const { mean, median, mode, makeArrayOfNums } = require("./math");
const app = express();

function checkNums(arr) {
  for (let num of arr) {
    if (!parseInt(num)) throw new ExpressError(`${num} is not a number`, 400);
  }
}
app.get("/mean", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "Please enter numbers sepereated by a comma ie (/mean?nums=1,23,3,4)",
      400
    );
  }

  let nums = req.query.nums;
  checkNums(nums.split(","));

  let result = {
    operation: "mean",
    result: mean(makeArrayOfNums(nums)),
  };
  return res.send(result);
});

app.get("/median", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "Please enter numbers sepereated by a comma ie (/median?nums=1,23,3,4)",
      400
    );
  }
  let nums = req.query.nums;
  checkNums(nums.split(","));
  let result = {
    operation: "median",
    result: median(makeArrayOfNums(nums)),
  };

  return res.send(result);
});

app.get("/mode", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      " Please enter numbers sepereated by a comma ie (/mode?nums=1,3,3,4)",
      400
    );
  }
  let nums = req.query.nums;
  checkNums(nums.split(","));
  let result = {
    operation: "mode",
    result: mode(makeArrayOfNums(nums)),
  };
  return res.send(result);
});

// If no other route matches, respond with a 404
app.use((req, res, next) => {
  const e = new ExpressError("Page Not Found", 404);
  next(e);
});

// Error handler
app.use(function (err, req, res, next) {
  //Note the 4 parameters!
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message =
    err.msg ||
    "Oops, something went wrong! Please enter numbers sepereated by a comma ie (/mode?nums=1,3,3,4)";

  // set the status and alert the user
  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
