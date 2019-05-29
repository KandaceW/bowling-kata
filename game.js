// Score 119:
var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]

function totalScore(fullGame) {
  var total = 0
  var bonusBalls = 0
  for (var i = 0; i < fullGame.length; i++) {
    if (!isStrike[fullGame[i] && !isSpare[i]] && bonusBalls == 0) {
      total += addFrame(fullGame[i])
    }
  }
}
}

function isStrike(frame) {
  if (frame[0] == 10) {
    return true
  } else {
    return false
  }
}

function isSpare(frame) {
  if (addFrame(frame) == 10) {
    return true
  } else {
    return false
  }
}


function addFrame(frame, bonus) {
  frameTotal = 0
  var bonusCount = bonus
  for (var i = 0 i < bonusCount; i++)
    for (var i = 0; i < frame.length; i++) {
      frameTotal += frame[i]
    }
  return frameTotal
}


console.log(totalScore(frames))






// function gameOne() {
//   var total = 0
//   var isStrike = false;
//   var isSpare = false;
//   var tempScore = 0

//   for (var i = 0; i < frames.length; i++) {
//     for (var j = 0; j < frames[i].length; j++) {
//       if (isStrike) {
//       } else if (isSpare) {

//       } else {
//         tempScore += frames[i][j]
//         console.log(tempScore)
//       }
//       if (tempScore == 10) {
//         if (frames[i][0] == 10) {
//           isStrike = true
//           total += tempScore
//           tempScore = 0
//         } else {
//           isSpare = true
//           total += tempScore
//           tempScore = 0
//         }
//       }
//     }
//     total += tempScore
//     tempScore = 0
//   }
// }

// gameOne()
//
// Score 141:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
//Score 300:
// var frames = [
//  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
// ]
