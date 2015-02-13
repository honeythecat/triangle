var triangle = function(sideA, sideB, sideC) {

  var isATriangle = (((sideA + sideB) > sideC) && ((sideB + sideC) > sideA) && ((sideA + sideC) > sideB))


  if ((sideA == sideB) && (sideB == sideC)) {
    return ("equilateral");
  } else if ((sideA == sideB || sideB == sideC || sideC == sideA) && (isATriangle == true)) {
    return ("isosceles");
  } else if ((sideA != sideB) && (sideB != sideC) && (sideC != sideA) && (isATriangle == true)) {
    return ("scalene");
  } else {
    return ("not a triangle");
  }
};
