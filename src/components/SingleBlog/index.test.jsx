import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import SingleBlog from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer
    .create(
      <Router>
        <SingleBlog />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
