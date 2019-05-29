// Score 119:
// var frames = [[1, 2],  [6, 4],  [5, 4],  [10, 0],  [7, 2], [10, 0],  [10, 0],  [5, 2],  [7, 0], [4, 4]
// ];

// Score 141:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
// Score 300:
var frames = [
 [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
]


function finalScore(frames) {
  checkSpare(frames);
    console.log(frames);
  checkThreeStrikes(frames);
    console.log(frames);
  checkLastThreeStrikes(frames);
    console.log(frames);
  checkStrike(frames);
    console.log(frames);
  frameScore(frames);
    console.log(frames);
  return total(frames)
}



function frameScore(frames) {
  for (let i = 0; i < frames.length; i++) {
    frames[i] = (frames[i][0] + frames[i][1]);
  }
}



function checkSpare(frames) {
  for (let i = 0; i < frames.length; i++) {
    if (frames[i][0] + frames[i][1] === 10 && frames[i][1] !== 0) {
      frames[i] = (frames[i][0] + frames[i][1] + frames[i+1][0]) + [];
    }
  }
  return frames
}


function checkThreeStrikes(frames) {
  for (let i = 0; i < frames.length; i++) {
    if (frames[i][0] === 10 && frames[i+1] && frames[i+1][0] === 10 && frames[i+2] && frames[i+2][0] === 10) {
      frames[i] = (frames[i][0] + frames[i+1][0] + frames[i+2][0]) + [];
    }
  }
  return frames;
}



function checkLastThreeStrikes(frames) {
  for (let i = 0; i < frames.length; i++) {
    if (frames[i][0] === 10 && frames[i][1] === 10 && frames[i][2] === 10) {
      frames[i] = 30 + [];
    }
  }
  return frames
}


//check here
function checkStrike(frames) {
  for (let i = 0; i < frames.length; i++) {
     if (frames[i][0] === 10 && frames[i+1][0] === 10) {
      frames[i] = (frames[i][0] + frames[i+1][0] + frames[i+2][0]) + [];
    } else if (frames[i][0] === 10 && frames[i+1] == 30) {
        frames[i] = 30 + [];
    } else if (frames[i][0] === 10 && frames[i+1][0] !== 10) {
      frames[i] = (frames[i][0] + frames[i][1]) + (frames[i+1][0] + frames[i+1][1]) + [];
    }
  }
  return frames
}



function total(frames) {
  frames.join(' ').split('');
  return frames.map(Number).reduce((a, b) => a + b, 0);
}





console.log(finalScore(frames));

// console.log(checkSpare(frames));
// console.log(checkThreeStrikes(frames));
// console.log(checkLastThreeStrikes(frames));
// console.log(checkStrike(frames));
// console.log(frameScore(frames))
// console.log(total(frames));
