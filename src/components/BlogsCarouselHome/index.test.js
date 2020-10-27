import React from "react";
import renderer from "react-test-renderer";
import BlogsCarouselHome from "./BlogsCarouselHome/index.jsx";

it("carousel works", () => {
  const tree = renderer.create(<BlogsCarouselHome />).toJSON();
  expect(tree).toMatchSnapshot();
});
