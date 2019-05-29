// Score 119:
var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]
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



function score(game) {


  let result = 0;

  
  for (let i = 0; i < game.length; i++) {

    let frame = game[i]

    let scoreOfFrame = addScore(frame)

    result += scoreOfFrame

  }

  console.log('The final result is' , result)
  return result

  
}


function addScore(frame) {
  return frame[0] + frame[1]
}

function spare(frame) {
  if(addScore(frame) === 10 && frame[0] !== 10){
    return true
  } else {
    return false
  }
}

function strike(frame) {
  if(frame[0] === 10){
    return true
  } else {
    return false
  }
}


score(frames);




// REQUIREMENTS

// A strike scores ten points plus the score for the next two balls.

// A spare scores ten points plus the score for the next ball.

// On the tenth frame, if the first two balls contain a strike or make a spare, the player gets a third ball.

// The maximum possible score (a "perfect game" of all strikes) is 300.