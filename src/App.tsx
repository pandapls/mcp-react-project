import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-gray-800">MCP React Project</div>
              <div className="flex space-x-4">
                <Link to="/" className="text-gray-700 hover:text-blue-500">首页</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-500">关于</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-500">联系</Link>
              </div>
            </div>
          </nav>
        </header>
        
        <main className="container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <footer className="bg-white shadow-inner py-6">
          <div className="container mx-auto px-6">
            <p className="text-center text-gray-600">© 2025 MCP React Project. 使用 TypeScript 和 Webpack 手动配置。</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
