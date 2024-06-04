import React, { useState } from 'react';
const CreateAccount = () => {
  const [password, setPassword] = useState('');
  const [createError, setCreateError] = useState('');

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setCreateError('Password must be at least 6 characters');
    } else {
      setCreateError('');
    }
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>
      <p className="mb-4">Create your account in a second to receive our latest news!</p>
      <form onSubmit={handleCreateAccount}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" required />
          {createError && <p className="text-red-500 text-sm mt-1">{createError}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="experience">Year of experience</label>
          <select id="experience" className="w-full px-3 py-2 border rounded">
            <option value="">Please Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Remember Me</span>
          </label>
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
