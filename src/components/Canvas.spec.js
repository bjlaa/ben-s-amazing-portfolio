import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Canvas from './Canvas';

describe('Canvas', () => {
  it('should render a div with a canvas className', () => {
    const wrapper = shallow(<Canvas />);
    const expected = wrapper.find('div').first().prop('className');
    const actual = 'canvas';

    expect(actual).to.equal(expected);
  });

  it('should render 2660 pixels divs', () => {
    const wrapper = shallow(<Canvas />);

    expect(wrapper.find('div.pixel')).to.have.length(2660);
  });
});
