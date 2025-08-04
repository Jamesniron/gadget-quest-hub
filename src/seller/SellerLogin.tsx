import React, { useState } from 'react';

const SellerLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'seller' && password === '1234') {
      onLogin();
    } else {
      alert('Invalid seller credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto mt-20">
      <h2 className="text-xl font-semibold mb-4">Seller Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  );
};

export default SellerLogin;
