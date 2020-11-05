import React from "react";
import renderer from "react-test-renderer";
import OpportunitiesCard from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<OpportunitiesCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
