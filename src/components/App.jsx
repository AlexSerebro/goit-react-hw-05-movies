import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout';
import { HomePage } from 'views/HomePage';
import { MoviesPage } from 'views/MoviesPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="movies" element={<MoviesPage />} />
      </Route>
      
      
          
          {/* <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<HomePage />} /> */}
  

    </Routes>

  );
};
