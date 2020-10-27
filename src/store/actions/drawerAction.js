import appConstants from '../constants';

const { DRAWER_CLOSED, DRAWER_OPEN } = appConstants;

const drawerOpened = () => ({ type: DRAWER_OPEN });

const drawerClosed = () => ({ type: DRAWER_CLOSED });

export {
  drawerClosed,
  drawerOpened,
};
