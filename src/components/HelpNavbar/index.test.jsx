import React from "react";
import renderer from "react-test-renderer";
import HelpNavbar from "./index";

it("renders correctly", () => {
  const tree = renderer.create(<HelpNavbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
