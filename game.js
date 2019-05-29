// Score 119:
var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]

// Score 141:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
//Score 300:
// var frames = [
//  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
// ]



function totalScore() {
    var result = 0

}

function addFrame(frame){
    for(var i = 0; i < frame; i++){
        var result = frames[i][0] + frames[i][1]
        if(result < 10){
            console.log(result);
            
        }
    }
}

function strike(){

}

function spare(){

}

addFrame(frames)



// function scoreType(frame){
//     for(var i = 0; i < frame.length; i++){
//         if (frame[i][0] == 10){
//             // Checks strike
//             console.log('strike');    
//         } else if(frames[i][0] + frames[i][1] < 10){
//             console.log(frames[i][0] + frames[i][1]);   
//         } 
//         else {
//             console.log(frames[i][0], 'spare');
//         }
//     }
// }



// function score(coords) {

//     for(var i = 0; i < 1; i++){
//         var reducer = (accumlator, currentValue) => accumlator + currentValue;
//         var frame = coords[i]
//         totalArr.push(frame.reduce(reducer));
//     }    
// }

// scoreType(frames)
// score(frames)