import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Users from './pages/Users';
import BorrowRecords from './pages/BorrowRecords';

function App() {
  return (
    <Router>
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Library Management System</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/books" className="hover:underline">Books</Link>
          <Link to="/users" className="hover:underline">Users</Link>
          <Link to="/borrow-records" className="hover:underline">Borrow Records</Link>
        </nav>
      </header>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/users" element={<Users />} />
          <Route path="/borrow-records" element={<BorrowRecords />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
