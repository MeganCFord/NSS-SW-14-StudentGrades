var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var gradeA = [];
var gradeB = [];
var gradeC = [];
var gradeD = [];
var gradeF = [];

///////////add each score from the scores array into the appropriate container array.
for (var i = 0; i < scores.length; i++) {
  if (scores[i] >= 91) {
    gradeA.push(scores[i]);
  } else if (scores[i] >=81 && scores[i] <= 90) {
    gradeB.push(scores[i]);
  } else if (scores[i] >=71 && scores[i] <= 80) {
    gradeC.push(scores[i]);
  } else if (scores[i] >=61 && scores[i] <= 70) {
    gradeD.push(scores[i]);
  } else if (scores[i] >=50 && scores[i] <=60) {
    gradeF.push(scores[i]);
  }
}
console.log("how many grade As", gradeA.length);
console.log("how many grade Bs", gradeB.length);
console.log("how many grade Cs", gradeC.length);
console.log("how many grade Ds", gradeD.length);
console.log("how many grade Fs", gradeF.length);

//////////////////////////////
/////////these variables find the largest number in each array.
//////////////////////////////

var highest = scores.reduce(function(x,y){
       return (x > y) ? x : y;
}); //reduce does math on each of the array items in order until there's just one left.
console.log("the highest score is", highest);

var lowest = scores.reduce(function(x,y){
      return (x < y) ? x : y;
});
console.log("the lowest score is", lowest);
