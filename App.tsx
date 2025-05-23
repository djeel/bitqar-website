
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DocumentationPage from './pages/DocumentationPage';
import WalletPage from './pages/WalletPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/docs" element={<DocumentationPage />} />
          <Route path="/wallet" element={<WalletPage />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default App;
