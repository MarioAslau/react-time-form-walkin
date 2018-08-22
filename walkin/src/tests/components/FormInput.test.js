import React from 'react';
import { shallow, mount } from 'enzyme';
import FormInput from '../../components/ProgressBar';

test('should render DashboardPage correctly', () => {
  const wrapper = shallow(<FormInput />);

  expect(wrapper).toMatchSnapshot();
});

test('should have prop', () => {
  const wrapper = mount(<FormInput newUserName={'mar'} newUserTime={10} />);

  expect(wrapper.props().newUserName).toBe('mar');
  expect(wrapper.props().newUserTime).toBe(10);
});
