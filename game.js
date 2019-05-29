// Score 119:
// var frames = [
//   [1, 1], [1, 1], [1, 1], [10, 0], [1, 1], [2, 2], [1, 1], [1, 1], [7, 1], [1, 5, 1]
// ]
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


var frames = [
  [10, 0], [2, 3], [4, 5], [6, 0], [1, 2], [10, 0], [10, 0], [9, 1], [8, 2], [6, 2, 0]
]



function score(game) {


  let result = 0;

  
  for (let i = 0; i < game.length; i++) {

    let frame = game[i]
    let secondFrame = game[i + 1]
    let thirdFrame = game[i + 2]

    // console.log('Hi I am the first frame: ' , frame)
    // console.log('Hi I am that frame\'s buddy: ' , secondFrame)
    // console.log('Hi I am that frame\'s second buddy: ' , thirdFrame)

    if (checkFreeball(frame)){

      result += addFreeball(frame)

    } else if (checkStrike(frame, secondFrame, thirdFrame)){

      result += addStrikeScore(frame, secondFrame, thirdFrame)

    } else if (checkSpare(frame)){

      result += addSpareScore(frame, secondFrame)

    } else {

      result += addScore(frame)
    
    }
  }
  console.log('Great work! Your final score is' , result)
  return result
}


function addScore(frame) {
  return frame[0] + frame[1]
}

function addSpareScore(frame, secondFrame) {
  return frame[0] + frame[1] + secondFrame[0]
}

function addStrikeScore(frame, secondFrame, thirdFrame) {

  if(checkDoubleStrike(frame, secondFrame, thirdFrame)){
    
    let total = 0
    
    total += frame[0] + frame[1]

    if(secondFrame){ total += secondFrame[0] + secondFrame[1] }
    if(thirdFrame){ total += thirdFrame[0] }

    return total

  }
  return frame[0] + frame[1] + secondFrame[0] + secondFrame[1]
}

function addFreeball(frame) {
  return frame[0] + frame[1] + frame[2]
}


// Check if there is a spare
function checkSpare(frame) {
  if(addScore(frame) === 10 && frame[0] !== 10){
    return true
  } else {
    return false
  }
}

// Check if there is a strike
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

// Check to see if the bowler recieved a free ball
function checkFreeball(frame) {
  if(frame.length === 3){
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