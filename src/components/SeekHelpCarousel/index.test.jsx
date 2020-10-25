import React from "react";
import SeekHelpCarousel from "./index";
import renderer from "react-test-renderer";

it("carousel works", () => {
  const tree = renderer.create(<SeekHelpCarousel />).toJSON();
  expect(tree).toMatchSnapshot();
});
