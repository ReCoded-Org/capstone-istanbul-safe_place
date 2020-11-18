import React from "react";
import renderer from "react-test-renderer";
import Blogs, { fetchBlogPosts } from "./index";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      {
        title: {
          rendered: "Women standing together",
        },
      },
    ]),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("renders title", async () => {
  Blogs.global.fetch = jest.fn()
  const title = await Blogs.global.fetch("");
  console.log(title)
  expect(title).toEqual("Women standing together");
});







// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve(
//         {
//           title: {
//             rendered: "Women standing together",
//           },
//         },
//       ),
//   })
// );

// describe("Blogs", () => {
//   it("renders correctly and matches the snapshot", () => {
//     const tree = renderer.create(<Blogs />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   //console.log("hello from outside")
//   it("renders title", async () => {
    // Blogs.fetchBlogPosts = jest.fn() 
    // const title = await Blogs.fetchBlogPosts()
//     //console.log("hi")
//     expect(fetch).toMatch("Women standing together");
//   });
// });
