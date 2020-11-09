import React from "react";
import renderer from "react-test-renderer";
import ViolenceTestModal from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<ViolenceTestModal />).toJSON();
  expect(tree).toMatchSnapshot();
});
