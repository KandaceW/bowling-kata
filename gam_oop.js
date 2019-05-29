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

// Test Frames
var frames = [
  [10, 0], [2, 3], [4, 5], [6, 0], [1, 2], [10, 0], [10, 0], [9, 0], [8, 2], [10, 2, 0]
]







let bowling = {

  result: 0,

  check: {

    spare: function (frame) {
      // return (bowling.add.score(frame) === 10 && frame[0] !== 10 ? true : false)
      if (bowling.add.score(frame) === 10 && frame[0] !== 10) {
        return true
      } else {
        return false
      }
    },


    strike: function (frame) {
      // return (frame[0] === 10 ? true : false)
      if (frame[0] === 10) {
        return true
      } else {
        return false
      }
    },


    doubleStrike: function (frame, secondFrame) {
      // return (frame[0] === 10 && secondFrame[0] === 10 ? true : false)
      if (frame[0] === 10 && secondFrame[0] === 10) {
        return true
      } else {
        return false
      }
    },


    freeBall: function (frame) {
      // return (frame.length === 3 ? true : false)
      if (frame.length === 3) {
        return true
      } else {
        return false
      }
    }

  },

  add: {

    sum: function(){
        var total = 0;
        for (var i=0; i < arguments.length; i++) {
            total += arguments[i];
        }
        return total;
    },

    score: function (frame) {
      return frame[0] + frame[1]
    },

    spareScore: function (frame, secondFrame) {
      return frame[0] + frame[1] + secondFrame[0]
    },

    strikeScore: function (frame, secondFrame, thirdFrame) {

      if (bowling.check.doubleStrike(frame, secondFrame)) {

        let total = 0

        total += frame[0] + frame[1]

        if (secondFrame) { total += secondFrame[0] + secondFrame[1] }
        if (thirdFrame) { total += thirdFrame[0] }

        return total

      }

      return frame[0] + frame[1] + secondFrame[0] + secondFrame[1]
    },

    freeBall: function (frame) {
      return frame[0] + frame[1] + frame[2]
    }

  },

  score: function(game) {

    // For each ball
    for (let i = 0; i < game.length; i++) {
  
      // Set frames
      let frame = game[i]
      let secondFrame = game[i + 1]
      let thirdFrame = game[i + 2]
  
      // Check for success
      if (bowling.check.freeBall(frame)) {
  
        bowling.result += bowling.add.freeBall(frame)
  
      } else if (bowling.check.strike(frame)) {
  
        bowling.result += bowling.add.strikeScore(frame, secondFrame, thirdFrame)
  
      } else if (bowling.check.spare(frame)) {
  
        bowling.result += bowling.add.spareScore(frame, secondFrame)
  
      } else {
  
        bowling.result += bowling.add.score(frame)
  
      }
    }
  }
}


bowling.score(frames);

console.log('***********************************')
console.log('Great Work! Your final score is', bowling.result)
console.log('***********************************')





// REQUIREMENTS

// A strike scores ten points plus the score for the next two balls.

// A spare scores ten points plus the score for the next ball.

// On the tenth frame, if the first two balls contain a strike or make a spare, the player gets a third ball.

// The maximum possible score (a "perfect game" of all strikes) is 300.