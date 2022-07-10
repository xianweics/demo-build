import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../modules/Home'));
const Detail = lazy(() => import('../modules/Detail'));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="*" element={<Navigate replace to={'/'} />} />
    </Routes>
  );
};

export { Router };
