import React, { lazy, Suspense } from 'react';

const LazyProductos = lazy(() => import('./Productos'));

const Productos = props => (
  <Suspense fallback={null}>
    <LazyProductos {...props} />
  </Suspense>
);

export default Productos;
