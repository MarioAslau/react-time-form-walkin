import React from 'react';
import { shallow, mount } from 'enzyme';
import ProgressBar from '../../components/ProgressBar';

test('should render DashboardPage correctly', () => {
  const wrapper = shallow(<ProgressBar />);

  expect(wrapper).toMatchSnapshot();
});

test('should have prop', () => {
    const wrapper = mount(<ProgressBar percentage={80} />);

    expect(wrapper.props().percentage).toBe(80);
});

test('should have component Filler inside', () => {
    const wrapper = mount(<ProgressBar percentage={80} />);

    expect(wrapper.find('Filler')).toHaveLength(1);
    expect(wrapper.find('Filler').props().percentage).toBe(80);
});
