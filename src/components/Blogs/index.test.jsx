import React from "react";
import renderer from "react-test-renderer";
import Blogs from "./index";

describe("Blogs", () => {
  it("renders correctly and matches the snapshot", () => {
    const tree = renderer.create(<Blogs />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
