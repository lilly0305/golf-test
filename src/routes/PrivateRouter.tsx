import React from 'react';

interface IPrivateRouter {
  children : React.ReactElement;
}
function PrivateRouter({children} : IPrivateRouter) {
  const accessible = localStorage.getItem('accessTokens') !== undefined;

  return accessible ? children : <div>PrivateRouter</div>;
}

export default PrivateRouter;
