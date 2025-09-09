import React, { useState } from 'react';

function Books() {
  const [books, setBooks] = useState([
    { id: 1, title: '1984', author: 'George Orwell', status: 'Available' },
    { id: 2, title: 'Sapiens', author: 'Yuval Noah Harari', status: 'Borrowed' },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Books</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Author</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td className="border px-4 py-2">{book.id}</td>
              <td className="border px-4 py-2">{book.title}</td>
              <td className="border px-4 py-2">{book.author}</td>
              <td className="border px-4 py-2">{book.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
