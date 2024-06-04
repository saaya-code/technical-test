import React, { useState } from 'react';

const DeleteAccount = () => {
  const [deleteReason, setDeleteReason] = useState('');
  const [deleteError, setDeleteError] = useState('');

  const handleDeleteAccount = (e) => {
    e.preventDefault();
    if (!deleteReason) {
      setDeleteError('Please select a reason');
    } else {
      setDeleteError('');
    }
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Delete Your Account</h2>
      <p className="mb-4">We're sorry to see you go. It would be great if we could know the reason behind.</p>
      <form onSubmit={handleDeleteAccount}>
        <div className="mb-4">
          {deleteReason=="" && <label className="block mb-1 text-red-500">⚠️Please select one of the below reasons.</label>}
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="reason" value="privacy" onChange={(e) => setDeleteReason(e.target.value)} />
              <span className="ml-2">I have privacy concerns.</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="reason" value="notUseful" onChange={(e) => setDeleteReason(e.target.value)} />
              <span className="ml-2">I no longer find this useful.</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="reason" value="irrelevantEmails" onChange={(e) => setDeleteReason(e.target.value)} />
              <span className="ml-2">I’m receiving irrelevant email contents.</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="reason" value="tooManyEmails" onChange={(e) => setDeleteReason(e.target.value)} />
              <span className="ml-2">I’m getting too many emails.</span>
            </label>
            <label className="items-center">
              <input type="radio" name="reason" value="others" onChange={(e) => setDeleteReason(e.target.value)} />
              <span className="ml-2">Others</span>
            </label>
          </div>
          {deleteError && <p className="text-red-500 text-sm mt-1">{deleteError}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="comments">Let us know if you've other comments.</label>
          <textarea id="comments" className="w-full px-3 py-2 border rounded" maxLength="2000"></textarea>
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default DeleteAccount;
