import { createBrowserRouter } from 'react-router-dom';

import { RouterProvider } from 'react-router-dom';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import NavbarSisdebarWrapper from './components/shared/NavbarSidebarWrapper';
import UserManagement from './pages/user-management/UserManagement';
import NotFound from './pages/404/NotFound';
import NetworkError from './pages/network-error/NetworkError';
import UserCard from './pages/web-components/userCard';
import CustomHook from './pages/custom-hooks';

const MainRouter = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/reactSafetyAnalytics/',
      element: <Login />,
    },
    {
      path: '/user-cards',
      element: <UserCard />,
    },
    {
      path: '/custom-hooks',
      element: <CustomHook />,
    },
    {
      path: '/user-management',
      element: (
        <NavbarSisdebarWrapper>
          <UserManagement />
        </NavbarSisdebarWrapper>
      ),
    },
    {
      path: '/dashboard',
      element: (
        <NavbarSisdebarWrapper>
          <Dashboard />
        </NavbarSisdebarWrapper>
      ),
    },
    {
      path: '/network-error',
      element: (
        <NavbarSisdebarWrapper>
          <NetworkError />
        </NavbarSisdebarWrapper>
      ),
    },
    {
      path: '*',
      element: (
        <NavbarSisdebarWrapper>
          <NotFound />
        </NavbarSisdebarWrapper>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default MainRouter;
