// Score 119:
let framesOne = [[1, 2],  [6, 4],  [5, 4],  [10, 0],  [7, 2], [10, 0],  [10, 0],  [5, 2],  [7, 0], [4, 4]
];

// Score 141:
let framesTwo = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
]
//
// Score 300:
let framesThree = [
 [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
]


function finalScore(frames) {
  checkSpare(frames);
    
  checkThreeStrikes(frames);
    
  checkLastThreeStrikes(frames);
    
  checkStrike(frames);

  frameScore(frames);

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



console.log(finalScore(framesOne));
console.log(finalScore(framesTwo));
console.log(finalScore(framesThree));

// console.log(checkSpare(frames));
// console.log(checkThreeStrikes(frames));
// console.log(checkLastThreeStrikes(frames));
// console.log(checkStrike(frames));
// console.log(frameScore(frames))
// console.log(total(frames));
