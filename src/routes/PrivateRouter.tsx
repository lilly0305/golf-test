import { Login } from '@pages/account';
import React from 'react';

interface IPrivateRouter {
  children: React.ReactElement;
}
function PrivateRouter({ children }: IPrivateRouter) {
  const accessible = localStorage.getItem('accessToken') !== null;

  return accessible ? children : <Login />;
}

export default PrivateRouter;
