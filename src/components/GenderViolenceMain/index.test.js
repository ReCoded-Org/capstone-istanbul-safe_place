import React from "react";
import renderer from "react-test-renderer";
import GenderViolenceMain from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<GenderViolenceMain />).toJSON();
  expect(tree).toMatchSnapshot();
});
