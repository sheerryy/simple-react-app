import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import App from './App';

it('renders without crashing', () => {
    shallow(<App/>);
});

it('check left command of calculateGrid()', () => {
    const wrapper = mount(<App/>);
    const initialArray = Array.from(Array(5), _ => Array(5).fill(0));
    initialArray[2][2] = 2;
    const expectedArray = Array.from(Array(5), _ => Array(5).fill(0));
    expectedArray[2][1] = 2;

    wrapper.setState(
        {grid: initialArray}
    );
    wrapper.instance().calculateGrid('left');

    expect(wrapper.state('grid')).toEqual(expectedArray);
});