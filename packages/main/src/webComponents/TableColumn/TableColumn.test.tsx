import { TableColumn } from '@ui5/webcomponents-react/lib/TableColumn';
import { mount } from 'enzyme';
import React from 'react';

describe('TableColumn', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<TableColumn />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
