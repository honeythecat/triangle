var triangle = function(sideA, sideB, sideC) {

  var typeOfTriangle = []

  if (((sideA > sideB) && (sideB > sideC) && (sideA > sideC)) != true) {
    typeOfTriangle.push("not a triangle");
  // } else {
  //   ((sideA === sideB && sideB === sideC));
  //   typeOfTriangle.push("equilateral");
  // }
  }
  return typeOfTriangle;

};
