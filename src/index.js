module.exports = function zeros(expression) {
  let arr = expression.split('*');
  let singleFactorialArray = [];
  let doubleFactorialArray = [];
  let zerosObj = {
    zerosTwo: 0,
    zerosFive: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('!!')) {
      doubleFactorialArray.push(arr[i]);
    } else {
      singleFactorialArray.push(arr[i]);
    }
  }
  let removeSigns = function(arr) {
    while (arr.some(elem => elem.includes('!'))) {
      arr = arr.map(elem => elem.replace('!', ''));
    }
    arr = arr.map(elem => Number(elem));
    return arr;
  };
  function findZeros(el, shift, base) {
    while (el >= 1) {
      for (let item = el; item % base === 0; item /= base) {
        if (base == 2) {
          zerosObj.zerosTwo++;
        } else {
          zerosObj.zerosFive++;
        }
      }
      el -= shift;
    }
    console.log(zerosObj);
  }

  let part1Arr = removeSigns(doubleFactorialArray);
  let part2Arr = removeSigns(singleFactorialArray);
  console.log(part1Arr, part2Arr);
  let zerosCount = function() {
    if (part1Arr.length > 0) {
      part1Arr.map(function(el) {
        findZeros(el, 2, 2), findZeros(el, 2, 5);
      });
    } else if (part2Arr.length > 0) {
      part2Arr.map(function(el) {
        findZeros(el, 1, 5), findZeros(el, 1, 2);
      });
    }
    return Math.min(zerosObj.zerosTwo, zerosObj.zerosFive);
  };
  return zerosCount();
};
