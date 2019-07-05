import * as types from '../Constants/actionTypes';

const initialState = {};

export default (state = initialState, { type }) => {
  const matches = /(.*)_(SUCCESS|REQUEST|FAILURE)/.exec(type);
  if (!matches) {
    return state;
  }
  const [, requestName, requestState] = matches;

  if (requestState === types.REQUEST) {
    return {
      ...state,
      [requestName]: true
    };
  }

  const { [requestName]: data, ...rest } = state;

  return rest;
};
