import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import  {Layout}  from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}></Route>
    </Routes>
    // <Layout>
    //   React homework template
    // </Layout>
  );
};