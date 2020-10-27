import appConstants from '../constants';
import initialState from '../initialState';

const {
  DRAWER_CLOSED, DRAWER_OPEN,
} = appConstants;

const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAWER_OPEN:
      return {
        ...state,
        open: true,
      };

    case DRAWER_CLOSED:
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
};

export default drawerReducer;
