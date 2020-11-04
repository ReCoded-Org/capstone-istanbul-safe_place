import React from "react";
import renderer from "react-test-renderer";
import ViolenceTestHeader from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<ViolenceTestHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
