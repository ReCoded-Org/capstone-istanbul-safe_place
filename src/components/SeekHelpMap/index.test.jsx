import React from "react";
import SeekHelpMap from "./index";
import renderer from "react-test-renderer";

it("seek help component renders correctly", () => {
  const tree = renderer.create(<SeekHelpMap />).toJSON();
  expect(tree).toMatchSnapshot();
});
