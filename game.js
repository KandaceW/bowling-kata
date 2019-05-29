// Score 119:
var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [8, 1], [5, 2], [7, 0], [4, 4]
]
var score = []
var strikes = []
function gameScore(frames){
  for(var i = 0; i < frames.length; i++){
    if(frames){

    }
    else if(frames[i][0] == 10){
      strikes.push(frames[i][0] + frames[i+1][0] + frames[i+1][1])
    }
    else{
      score.push(frames[i][0] + frames[i][1])
    }
  }
  console.log(score)
  console.log(strikes)
}

// var totalScore = score[i] + strikes[i]
// console.log(totalScore)

// console.log(frames)
gameScore(frames)
// Score 141:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]

// // Score 300:
// var frames = [
//  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
// ]
