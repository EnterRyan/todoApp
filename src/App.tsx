import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/molecules/Footer';
import Header from './components/molecules/Header';
import ListContents from './components/organisms/ListContents';
import { DarkModeProvider2 } from './context/TestReducerAndContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DarkModeProvider2>
        <div className="container mx-auto rounded-md grid place-items-center w-70% bg-slate-700">
          <Header />
          <Routes>
            <Route path="/*" element={<ListContents listType="ALL" />} />
            <Route path="/ALL" element={<ListContents listType="ALL" />} />
            <Route
              path="/Active"
              element={<ListContents listType="Active" />}
            />
            <Route
              path="/Completed"
              element={<ListContents listType="Completed" />}
            />
          </Routes>
          <Footer />
        </div>
      </DarkModeProvider2>
    </BrowserRouter>
  );
};

export default App;
