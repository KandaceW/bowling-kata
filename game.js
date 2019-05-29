//Score 119:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]

//Score 83
// var frames = [
//   [1, 2], [6, 4], [5, 4], [5, 5], [7, 2], [5, 5], [5, 5], [5, 2], [7, 0], [4, 4]
// ]

// Score 141:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]


//Score 300:
var frames = [
 [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
]

function score (arr){
var accumScore = 0
//var frameScores = [];
  for (var i=0; i<arr.length; i++){
    var currentFrame = frameSum(arr[i])
    //CHECK IF STRIKE
    if (checkStrike(arr[i]) && i < 9) { //CHECK IF STRIKE
      currentFrame = currentFrame + frameSum(arr[i+1]) 
      if (checkStrike(arr[i+1]) && i < 7) {
      currentFrame = currentFrame + arr[i+2][0]
      }
      //CHECK IF SPARE
    } else if (checkSpare(arr[i]) && i < 9) { //CHECK IF SPARE
      currentFrame = currentFrame + arr[i+1][0]
    }
    console.log(currentFrame)
    accumScore = accumScore + currentFrame
    }
  console.log('final score is',accumScore)
}

var testFrame = [5,5]

function frameSum(frame) {
  var score = 0;
  for (var i = 0; i<frame.length; i++) {
    score = score + frame[i]
  }
  return score
}

function checkStrike (frame) {
  if (frame[0]===10) {
    console.log('STRIKE')
    return true
  } else {return false}
}

function checkSpare (frame) {
  if (frameSum(frame)===10){
    console.log('SPARE')
    return true
  } else {return false}
}

score(frames);


