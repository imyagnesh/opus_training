import React from 'react';

import Index from '../index';
import TodoForm from '../todoForm';
import TodoStatus from '../todoStatus';
import todoList from '../todoList';

function setup() {
  const props = {};
  const Wrapper = shallow(<Index />);
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

describe('Check index page view', () => {
  it('description', () => {
    const { Wrapper } = setup();
    const h1 = Wrapper.find('h1');
    expect(h1.text()).toEqual('Todo App');

    const errorMessage = 'oops! something went Wrong';
    Wrapper.setState({ error: new Error(errorMessage) });
    const p2 = Wrapper.find('p');
    expect(p2.text()).toEqual(errorMessage);
  });

  it('check p tag exist', () => {
    const { Wrapper } = setup();
    Wrapper.setState({ error: null });
    const p1 = Wrapper.find('p');
    expect(p1.exists()).toBe(false);
  });

  it('check todo form exist with props', () => {
    const { Wrapper } = setup();
    const form = Wrapper.find(TodoForm);
    expect(form.exists()).toBe(true);
    expect(form.props()).toEqual({
      addTodo: expect.any(Function),
      todoText: '',
      changeText: expect.any(Function),
    });
  });

  it('TodoStatus exist', () => {
    const { Wrapper } = setup();
    const statusComponent = Wrapper.find(TodoStatus);
    expect(statusComponent.exists()).toBe(true);
    expect(statusComponent.props()).toEqual({
      changeStatus: expect.any(Function),
      status: 'all',
    });
  });

  it('TodoStatus exist', () => {
    const { Wrapper } = setup();
    const statusComponent = Wrapper.find(TodoStatus);
    expect(statusComponent.exists()).toBe(true);
    expect(statusComponent.props()).toEqual({
      changeStatus: expect.any(Function),
      status: 'all',
    });
  });

  it('Todo List Exist', () => {
    const { Wrapper } = setup();
    const listComponent = Wrapper.find(todoList);
    expect(listComponent.exists()).toBe(false);

    const todoItem = {
      id: 1,
      text: 'get milk',
      isDone: false,
    };

    Wrapper.setState({
      todoList: [todoItem],
    });
    const listComponent1 = Wrapper.find(todoList);
    expect(listComponent1.exists()).toBe(true);
    expect(listComponent1.length).toBe(1);
    // expect(listComponent1.props()).toEqual({
    //   key: todoItem.id,
    //   todoItem,
    //   updatingTodo: null,
    //   updateText: Wrapper.instance.updateText(),
    //   changeTodoText: expect.any(Function),
    //   markDone: expect.any(Function),
    //   updateTodo: expect.any(Function),
    //   deleteTodo: expect.any(Function),
    // });
  });
});
