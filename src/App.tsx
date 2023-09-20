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
        <div className="container mx-auto rounded-md bg-slate-100 border border-2 border-gray-700 mt-40">
          <div className="grid place-items-center w-4/5 mx-auto">
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
        </div>
      </DarkModeProvider2>
    </BrowserRouter>
  );
};

export default App;
