//Score 119:
//var frames = [
//  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
//]
var frames = [
[1, 2], [6, 3], [5, 4], [1, 0], [7, 2], [1, 0], [1, 0], [5, 2], [7, 0], [4, 4]
]

function scoreFrame (frame) {
  return frame[0] + frame[1]
}

// var first = frames[0][0] + frames[0][1]
// var second = frames[1][0] + frames[1][1]
// var third = frames[2][0] + frames[2][1]
// var fourth = frames[3][0] + frames[3][1]
// var fifth = frames[4][0] + frames[4][1]
// var sixth = frames[5][0] + frames[5][1]
// var seventh = frames[6][0] + frames[6][1]
// var eighth = frames[7][0] + frames[7][1]
// var ninth = frames[8][0] + frames[8][1]
// var tenth = frames[9][0] + frames[9][1]
var result = 0
for(var i = 0; i < frames.length; i++) {
  result = result + scoreFrame(frames[i])
}
// var result = first + second + third + fourth + fifth + sixth + seventh + eighth + ninth + tenth

console.log(result)

//PART 1
// add values of first and second items in the 1st array.
// this gives the value of the first array (frame).
// do this for all the arrays (frames).
// and add all array (frame) totals together.

//function score (arr){
  //var scr = 0
  //  for (var i=0; i<arr.length; i++){
   //   scr.push(arr[i])
   // }
  //return scr



//PART 2
// scan through all arrays (frames)
// if spare take first item of the next array(frame) and add it to the previous frames value.
// else if not a spare take value of the current array(frame) and add it to the next.


//PART 3
// if there is a strike ..... 
// else if add the score to the next array(frame).


// Score 141:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
//Score 300:
// var frames = [
//  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
// ]
