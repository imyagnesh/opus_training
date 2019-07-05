import * as types from '../Constants/actionTypes';

export default (state = [], { type, payload }) => {
  switch (type) {
    case `${types.LOAD_AUTHORS}_${types.SUCCESS}`:
      return payload;

    default:
      return state;
  }
};
