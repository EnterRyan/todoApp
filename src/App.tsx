import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/molecules/Footer';
import Header from './components/molecules/Header';
import ListPage from './components/molecules/ListPage';
import { DarkModeProvider2 } from './context/TestReducerAndContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DarkModeProvider2>
        <div className="container mx-auto rounded-md grid place-items-center w-70%">
          <Header />
          <Routes>
            <Route path="/*" element={<ListPage listType="ALL" />} />
            <Route path="/ALL" element={<ListPage listType="ALL" />} />
            <Route path="/Active" element={<ListPage listType="Active" />} />
            <Route
              path="/Completed"
              element={<ListPage listType="Completed" />}
            />
          </Routes>
          <Footer />
        </div>
      </DarkModeProvider2>
    </BrowserRouter>
  );
};

export default App;
