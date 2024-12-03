import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Work from '../../pages/Work';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Work />} />
    </Routes>
  );
};

export default Router;
