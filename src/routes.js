import { Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Skills from './pages/Skills';
import Blog from './pages/Blog';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Work from './pages/Work';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      { path: 'blog', element: <Blog /> },
      { path: 'skills', element: <Skills /> },
      { path: 'work', element: <Work /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: '', element: <Navigate to="/about" /> },
    ],
  },
];

export default routes;
