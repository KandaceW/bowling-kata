//Score 119:
var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]

//Score 83
// var frames = [
//   [1, 2], [6, 4], [5, 4], [5, 5], [7, 2], [5, 5], [5, 5], [5, 2], [7, 0], [4, 4]
// ]

function score (arr){
var accumScore = 0
  for (var i=0; i<arr.length; i++){
    var currentFrame = frameSum(arr[i])
    if (currentFrame>10 && i < 9) { //CHECK IF STRIKE
      currentFrame = currentFrame + frameSum(arr[i+1])
    }
    
    accumScore = accumScore + currentFrame
    }

  console.log('final score is',accumScore)
}

var testFrame = [10,10,10]

function frameSum(arr) {
  var score = 0;
  for (var i = 0; i<arr.length; i++) {
    score = score + arr[i]
  }
  return score
}

score(frames);

// Score 141:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
//Score 300:
// var frames = [
//  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
// ]
