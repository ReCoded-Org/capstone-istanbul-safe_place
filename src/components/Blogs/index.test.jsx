import React from "react";
import renderer from "react-test-renderer";
import Blogs from "./index";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        title: {
          rendered: "Women standing together",
        },
      }),
  })
);

describe("Blogs", () => {
  it("renders correctly and matches the snapshot", () => {
    const tree = renderer.create(<Blogs />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders title", async () => {
    Blogs.fetchBlogPosts = jest.fn();
    const title = await Blogs.fetchBlogPosts("");
    expect(title).toMatchSnapshot("Women standing together");
  });
});
