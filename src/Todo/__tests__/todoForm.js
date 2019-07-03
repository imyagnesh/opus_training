import React from 'react';

import TodoForm from '../todoForm';

function setup() {
  const props = {
    addTodo: jest.fn(),
    todoText: '',
    changeText: jest.fn(),
  };
  const Wrapper = shallow(<TodoForm {...props} />);
  return {
    props,
    Wrapper,
  };
}

describe('snapshot', () => {
  it('snapshot of index', () => {
    const { Wrapper } = setup();
    expect(Wrapper).toMatchSnapshot();
  });
});

describe('test todoForm component', () => {
  it('check form exist', () => {
    const { Wrapper, props } = setup();
    const form = Wrapper.find('form');
    expect(form.exists()).toBe(true);
    form.simulate('submit');
    form.simulate('submit');
    form.simulate('submit');
    form.simulate('submit');
    expect(props.addTodo.mock.calls.length).toBe(4);
  });

  it('check input exist', () => {
    const { Wrapper, props } = setup();
    const input = Wrapper.find('input');
    expect(input.exists()).toBe(true);
    input.simulate('change');
    expect(props.changeText.mock.calls.length).toBe(1);
    const text = 'get Food';
    Wrapper.setProps({ todoText: text });
    const input1 = Wrapper.find('input');
    expect(input1.prop('value')).toEqual(text);
    expect(input1.prop('placeholder')).toEqual('Write your TODO here...');
  });
});
