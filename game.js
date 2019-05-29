// Score 119:
// var frames = [
//   [1, 1], [1, 1], [1, 1], [10, 0], [1, 1], [2, 2], [1, 1], [1, 1], [7,1], [1, 1]
// ]
//
// Score 141:
var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
]
//
//Score 300:
// var frames = [
//  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
// ]



function score(game) {


  let result = 0;

  
  for (let i = 0; i < game.length; i++) {

    let frame = game[i]
    let secondFrame = game[i + 1]
    let thirdFrame = game[i + 2]

    console.log('Hi I am the first frame: ' , frame)
    console.log('Hi I am that frame\'s buddy: ' , secondFrame)
    console.log('Hi I am that frame\'s second buddy: ' , thirdFrame)

    if(checkStrike(frame)){

      result += addStrikeScore(frame, secondFrame, thirdFrame)

    } else if (checkSpare(frame)){

      result += addSpareScore(frame, secondFrame)

    } else {

      result += addScore(frame)
    
    }

  }

  console.log('The final result is' , result)
  return result
}


function addScore(frame) {
  return frame[0] + frame[1]
}

function addStrikeScore(frame, secondFrame, thirdFrame) {

  if(checkDoubleStrike(frame, secondFrame)){
    return frame[0] + frame[1] + secondFrame[0] + secondFrame[1] + thirdFrame[0] + thirdFrame[1]
  }

  return frame[0] + frame[1] + secondFrame[0] + secondFrame[1]

}

function addSpareScore(frame, secondFrame) {
  return frame[0] + frame[1] + secondFrame[0]
}


// Check if there is a spare - working!
function checkSpare(frame) {
  if(addScore(frame) === 10 && frame[0] !== 10){
    return true
  } else {
    return false
  }
}

// Check if there is a strike - working!
function checkStrike(frame) {
  if(frame[0] === 10){
    return true
  } else {
    return false
  }
}

// Check if there is a double strike
function checkDoubleStrike(frame, secondFrame){
  if(frame[0] === 10 && secondFrame[0] === 10){
    return true
  } else {
    return false
  }
}

// Call the function
score(frames);




// REQUIREMENTS

// A strike scores ten points plus the score for the next two balls.

// A spare scores ten points plus the score for the next ball.

// On the tenth frame, if the first two balls contain a strike or make a spare, the player gets a third ball.

// The maximum possible score (a "perfect game" of all strikes) is 300.