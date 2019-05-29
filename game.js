// var frames = [
//   [1, 1],
//   [1, 1],
//   [1, 1],
//   [1, 1],
//   [1, 1],
//   [1, 1],
//   [1, 1],
//   [1, 1],
//   [1, 1],
//   [1, 1],
// ];

//  Score 119:
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

function getScore(framesArray) {
  var totalScore = 0;
  for (i = 0; i < framesArray.length; i++) {
    var frame = framesArray[i];
    var ball1 = frame[0];
    var ball2 = frame[1];
    var frameScore = ball1 + ball2;

    totalScore = totalScore + frameScore;
    console.log(frame, ball1 + ball2);
  }

  return totalScore;
}

var totalScore = getScore(frames);
console.log(totalScore);
