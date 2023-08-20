
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  let newMatrix = [];
  let sign = 0;
  if (arguments.length === 0 || matrix.length === 0) {
    return newMatrix;
  }
for (let i =0; i < matrix.length; i++) {
  if (sign>0) {
    newMatrix[i] =  matrix[i].reverse();
    sign --;
  } else {
    newMatrix[i] =  matrix[i];
    sign ++;
  }
}
return newMatrix.flat();
}


