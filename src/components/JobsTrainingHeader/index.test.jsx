import React from "react";
import renderer from "react-test-renderer";
import JobsTrainingHeader from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<JobsTrainingHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
