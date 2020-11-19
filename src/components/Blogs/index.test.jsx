import React from "react";
import renderer from "react-test-renderer";
import Blogs from "./index";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          title: {
            rendered: "Women standing together",
          },
          jetpack_featured_media_url:
            "https://safeplace102505649.files.wordpress.com/2020/11/womentogether.jpg",
        },
      ]),
  })
);

describe("Blogs", () => {
  it("renders correctly and matches the snapshot", () => {
    const tree = renderer.create(<Blogs />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
