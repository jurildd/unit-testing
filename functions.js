const functions = {
    // randomizer: (num) => Math.floor((Math.random() * num) + 1)
    getN: (arr) => {
      return arr.length
    },
    getSum: (arr) => {
      return arr.reduce(function(a, b) {return a + b})
    },
    getMean: (arr) => {
      return functions.getSum(arr) / functions.getN(arr)
    },
    getStDev: (arr) => {
      var sum = 0
      var stdev = 0
      var mean = functions.getMean(arr)
      for(i = 0; i < functions.getN(arr); i++) {
        sum += Math.pow((arr[i] - mean), 2)
      }
      stdev = functions.getSqrt(sum / functions.getN(arr))
      return stdev
    },
    getSqrt: (n) => {
      return Math.sqrt(n)
    }
}


module.exports = functions;