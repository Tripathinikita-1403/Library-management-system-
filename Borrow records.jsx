import React, { useState } from 'react';

function BorrowRecords() {
  const [records, setRecords] = useState([
    { id: 1, book: '1984', user: 'Alice Johnson', borrowedDate: '2023-09-01', returnDate: '2023-09-15' },
    { id: 2, book: 'Sapiens', user: 'Bob Smith', borrowedDate: '2023-09-05', returnDate: '2023-09-20' },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Borrow Records</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border px-4 py-2">Record ID</th>
            <th className="border px-4 py-2">Book</th>
            <th className="border px-4 py-2">User</th>
            <th className="border px-4 py-2">Borrowed Date</th>
            <th className="border px-4 py-2">Return Date</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.id}>
              <td className="border px-4 py-2">{record.id}</td>
              <td className="border px-4 py-2">{record.book}</td>
              <td className="border px-4 py-2">{record.user}</td>
              <td className="border px-4 py-2">{record.borrowedDate}</td>
              <td className="border px-4 py-2">{record.returnDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BorrowRecords;
