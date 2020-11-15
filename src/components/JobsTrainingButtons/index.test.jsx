import React from "react";
import renderer from "react-test-renderer";
import JobsTrainingButtons from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<JobsTrainingButtons />).toJSON();
  expect(tree).toMatchSnapshot();
});
