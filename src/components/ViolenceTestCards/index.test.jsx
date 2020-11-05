import React from "react";
import renderer from "react-test-renderer";
import ViolenceTestCards from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<ViolenceTestCards />).toJSON();
  expect(tree).toMatchSnapshot();
});
