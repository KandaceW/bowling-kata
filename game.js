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

// function totalScore(frames) {
//   let newArr = [];
//   for (let i = 0; i < frames.length; i++) {
//     // if frames[i] frames[i][0] to frames[i][1]
//       frames[i] = (frames[i][0] + frames[i][1]);
//       newArr.push(frames[i]);
//   }
//   return newArr
// }

// console.log(totalScore(frames));

function spare(frames) {
  let something = frames;
  for (let i = 0; i < frames.length; i++) {
    if (frames[i][0] + frames[i][1] === 10 && frames[i][1] !== 0) {
     frames[i + 1] + frames[i][0];
    }
  }
  return something;
}

console.log(spare(frames));
