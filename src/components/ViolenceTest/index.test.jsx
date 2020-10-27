import React from "react";
import renderer from "react-test-renderer";
import ViolenceTest from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<ViolenceTest />).toJSON();
  expect(tree).toMatchSnapshot();
});

