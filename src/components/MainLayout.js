import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

export default function MainLayout() {
  return (
    <div id="colorlib-page">
      <SideBar />
      <div id="colorlib-main">
        <Outlet />
      </div>
    </div>
  );
}
