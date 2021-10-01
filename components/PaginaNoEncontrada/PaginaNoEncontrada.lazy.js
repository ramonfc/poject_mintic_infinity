import React, { lazy, Suspense } from 'react';

const LazyPaginaNoEncontrada = lazy(() => import('./PaginaNoEncontrada'));

const PaginaNoEncontrada = props => (
  <Suspense fallback={null}>
    <LazyPaginaNoEncontrada {...props} />
  </Suspense>
);

export default PaginaNoEncontrada;
