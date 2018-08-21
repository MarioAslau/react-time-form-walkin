import React from 'react';
import { shallow, mount } from 'enzyme';
import WaitingTimeItem from '../../components/ProgressBar';

test('should render DashboardPage correctly', () => {
  const wrapper = shallow(<WaitingTimeItem />);

  expect(wrapper).toMatchSnapshot();
});

test('should have prop', () => {
    const wrapper = mount(<WaitingTimeItem name={'mar'} time={10}/>);

    expect(wrapper.props().name).toBe('mar');
    expect(wrapper.props().time).toBe(10);
});

