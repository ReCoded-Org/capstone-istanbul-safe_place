import React from "react";
import renderer from "react-test-renderer";
import Blogs from "./index";

// fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve({
//         title: {
//           rendered: "Women standing together",
//         },
//         jetpack_featured_media_url:
//           "https://safeplace102505649.files.wordpress.com/2020/11/womentogether.jpg",
//       }),

//   })

// );

// console.log(fetch);

// describe("Blogs", () => {
//   it("renders correctly and matches the snapshot", () => {
//     const tree = renderer.create(<Blogs />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

describe("Fetch", () => {
  beforeAll(() => {
    global.fetch.mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve({
            json: () =>
              new Promise((resolve) =>
                resolve([
                  {
                    title: {
                      rendered: "Women standing together",
                    },
                    jetpack_featured_media_url:
                      "https://safeplace102505649.files.wordpress.com/2020/11/womentogether.jpg",
                  },
                ])
              ),
          });
        })
    );
  });

  it("should call fetch with url", () => {
    require("./index");
    expect(global.fetch).toHaveBeenCalledWith(
      "https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts?per_page=1"
    );
  });
  console.log(global.fetch);

  afterAll(() => {
    global.fetch.mockClear();
  });
});
