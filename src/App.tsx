import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/molecules/Header';
import ListPage from './components/molecules/ListPage';
import './index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<ListPage listType="ALL" />} />
        <Route path="/ALL" element={<ListPage listType="ALL" />} />
        <Route path="/Active" element={<ListPage listType="Active" />} />
        <Route path="/Completed" element={<ListPage listType="Completed" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
