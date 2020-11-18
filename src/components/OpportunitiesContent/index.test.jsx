import React from "react";
import renderer from "react-test-renderer";
import JobsTrainingContent from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<JobsTrainingContent />).toJSON();
  expect(tree).toMatchSnapshot();
});
