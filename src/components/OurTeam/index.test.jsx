import React from "react";
import renderer from "react-test-renderer";
import OurTeam from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<OurTeam />).toJSON();
  expect(tree).toMatchSnapshot();
});
