describe("triangle", function() {

  it("determines if three sides will equal a triangle", function() {
    expect(triangle(2, 2, 8)).to.eql("not a triangle");
  });

  it("determines if three sides will equal a triangle", function() {
    expect(triangle(1, 1, 4)).to.eql("not a triangle");
  });

  it("returns equilateral if 3 sides are equal", function() {
    expect(triangle(3, 3, 3)).to.eql("equilateral");
  });

  it("returns equilateral if 3 sides are equal", function() {
    expect(triangle(11, 11, 11)).to.eql("equilateral");
  });

  it("returns isosceles if 2 sides are equal and it is a triangle", function() {
    expect(triangle(3, 3, 2)).to.eql("isosceles");
  });

  it("returns isosceles if 2 sides are equal and it is a triangle", function() {
    expect(triangle(6, 8, 6)).to.eql("isosceles");
  });

  it("returns scalene if no sides are equal and it is a triangle", function() {
    expect(triangle(2, 3, 4)).to.eql("scalene");
  });

  it("returns scalene if no sides are equal and it is a triangle", function() {
    expect(triangle(8, 6, 4)).to.eql("scalene");
  });

});
