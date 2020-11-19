import React from "react";
import renderer from "react-test-renderer";
import Blogs from "./index";

const mockData = {
  title: {
    rendered: "Women standing together",
  },
  jetpack_featured_media_url:
    "https://safeplace102505649.files.wordpress.com/2020/11/womentogether.jpg",
};

describe("Blogs", () => {
  it("renders correctly and matches the snapshot", () => {
    const tree = renderer.create(<Blogs mockData={mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
