describe("triangle", function() {

  it("determines if three sides will equal a triangle", function() {
    expect(triangle(2, 2, 8)).to.eql(["not a triangle"]);
  });
  //
  // it("returns equilateral if 3 sides are equal", function() {
  //   expect(triangle(3, 3, 3)).to.eql(["equilateral"]);
  // });


});
