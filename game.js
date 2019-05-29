// Score 119:
var frames = [
  [1, 2],
  [6, 4],
  [5, 4],
  [10, 0],
  [7, 2],
  [10, 0],
  [10, 0],
  [5, 2],
  [7, 0],
  [4, 4]
];

function gameOne(frames) {
  var score = 0;

  for (i = 0; i < frames.length; i++) {
    var currentFrame = frames[i]
    var ballOne = currentFrame[0];
    var ballTwo = currentFrame[1];
  
    if (frames[i][0] === 10 ) { // strike
      strike(i) 
    }

    else if ( (frames[i][0] + frames[i][1]) === 10) { // spare 

    } 

    else { //normal score
    score = score + (ballOne+ballTwo); 
  }
  console.log(score)
}

function strike() {

}

function spare() {
  
}
                      
// console.log(frames);
// function gameOne(frames) {
//   var score = 0;
//   var currentFrameScore = 0;
//   console.log(score);

//   for (i = 0; i < frames.length; i++) {
//     var currentFrame = frames[i];
//     var nextFrame = frames[i + 1];
//     if (currentFrame[0] === 10) {
//       // if strike
//       //add points from next two balls
//       currentFrameScore =
//         currentFrame[0] + currentFrame[1] + nextFrame[0] + nextFrame[1];
//       score = score + currentFrameScore;
//       //reset currentframescore
//       currentFrameScore = 0;
//     }
//     //if spare
//   }
// }
//write a function to keep the score
// write for loop to filter through frames

// write if statements for...
//strike, if frames[i][0] === 10, add points from next two balls to current frame
//spare if the sum of frames[i] === 10, add points from next ball to current frame
//normal frame add sum of frames[i] to current frame

// push sum of each frame to score and continue for loop

// Score 141:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
//Score 300:
// var frames = [
//  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
// ]
