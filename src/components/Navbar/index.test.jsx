import React from "react";
import renderer from "react-test-renderer";
import MainNavbar from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<MainNavbar />).toJSON();
  expect(tree).toMatchSnapshot();
});