const initialState = {
  data: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_COURSES_REQUEST':
      return { ...state, ...payload };

    default:
      return state;
  }
};
