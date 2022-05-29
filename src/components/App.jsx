// import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout';
import { HomePage } from 'views/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>}></Route>
      </Route>
    </Routes>

  );
};
