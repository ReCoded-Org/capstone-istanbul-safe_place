import React from "react";
import renderer from "react-test-renderer";
import SeekHelpSingleCard from "./index";

const mockData = {
  title: "Doctor",
  name: "Jenny Wilson",
  portraitImg: "doctorImg",
  phoneNumber: "+1-340-5558-235 ",
  address: "9094 Bay Meadows Street, Conyers, GA 30012",
  moreInfo:
    "In oculis quidem faciunt, ut dolore magnam aliquam causam ista, quae sine causa? quae fuerit causa, nollem me ab eo delectu rerum, quem modo ista sis",
};

it("renders correctly and matches the snapshot", () => {
  const tree = renderer
    .create(<SeekHelpSingleCard cardDetails={mockData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
