var triangle = function(sideA, sideB, sideC) {

  if ((sideA == sideB) && (sideB == sideC)) {
    return ("equilateral");
  } else if ((sideA === sideB) && (sideB === sideC)) {
    return ("isoceles");
  } else {
    return ("not a triangle");
  }
};




// var isATriangle = function(sideA, sideB, sideC) {
//   if (((sideA + sideB) > sideC) && ((sideB + sideC) > sideA) && ((sideA + sideC) > sideB)) {
//     return true;
//   } else {
//     return false;
//   }
// };
