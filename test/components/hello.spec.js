import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Hello from '../../app/Hello.jsx';

describe('Components :: <Hello />', () => {
  it('Renders the correct text in <h1> tag', () => {
    const wrapper = shallow(<Hello />)
    expect(wrapper.find('h1')).to.have.text('Hello World!');
  });
});

