var triangle = function(sideA, sideB, sideC) {

  var isATriangle = (((sideA + sideB) > sideC) && ((sideB + sideC) > sideA) && ((sideA + sideC) > sideB));


  if (((sideA == sideB) && (sideB == sideC)) && (isATriangle === true)) {
    return ("equilateral");
  } else if ((sideA == sideB || sideB == sideC || sideC == sideA) && (isATriangle === true)) {
    return ("isosceles");
  } else if ((sideA != sideB) && (sideB != sideC) && (sideC != sideA) && (isATriangle === true)) {
    return ("scalene");
  } else {
    return ("not a triangle");
  }
};

//------------------------------

$(document).ready(function() {

  $("form#triangle").submit(function(event) {
    var sideA = ($("input#sideA").val());
    var sideB = ($("input#sideB").val());
    var sideC = ($("input#sideC").val());

    var result = triangle([sideA, sideB, sideC]);

  // if (result = "equilateral") {
  //   return ("equilateral");
  // } else if (result = "isosceles") {
  //   return ("isosceles");
  // } else if (result = "scalene") {
  //   return ("scalene");
  // } else {
  //   return ("not a triangle")
  // };


    $(".make-triangle").text(result);


    event.preventDefault();

   });
});
