import React from "react";
import renderer from "react-test-renderer";
import ErrorMessage from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<ErrorMessage />).toJSON();
  expect(tree).toMatchSnapshot();
});
