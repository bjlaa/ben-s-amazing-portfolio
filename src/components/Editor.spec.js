import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Editor from './Editor';

describe('Editor', () => {
  it('should render a div with a container-editor className', () => {
    const wrapper = shallow(<Editor />);

    expect(wrapper.find('div.container-editor')).to.have.length(1);
  });

  it('should render a div with an editor className ', () => {
    const wrapper = shallow(<Editor />);

    expect(wrapper.find('div.editor')).to.have.length(1);
  });

  it('should render a div with an editor-nav className', () => {
    const wrapper = shallow(<Editor />);

    expect(wrapper.find('div.editor-nav')).to.have.length(1);
  });

  it('should render 3 div with an editor-nav-link className', () => {
    const wrapper = shallow(<Editor />);

    expect(wrapper.find('div.editor-nav-link')).to.have.length(3);
  });
});
