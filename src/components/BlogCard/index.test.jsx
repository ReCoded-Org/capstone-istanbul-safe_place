import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import BlogCard from "./index";

const mockData = {
  title: {
    rendered: "You can find safe place for yourself here",
  },
  jetpack_featured_media_url:
    "https://safeplace102505649.files.wordpress.com/2020/11/womentogether.jpg",
  id: 78,
};

it("renders correctly and matches the snapshot", () => {
  const tree = renderer
    .create(
      <Router>
        <BlogCard blogPost={mockData} />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
