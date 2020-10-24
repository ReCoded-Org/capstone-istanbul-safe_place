import React from 'react';
import renderer from 'react-test-renderer';
import BlogsCarouselHome from './BlogsCarouselHome';

it('carousel works', () => {
  const tree = renderer
    .create(<BlogsCarouselHome />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});