import React from "react";
import renderer from "react-test-renderer";
import JobsTrainingHome from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<JobsTrainingHome />).toJSON();
  expect(tree).toMatchSnapshot();
});
