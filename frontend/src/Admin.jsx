import React, { useState } from 'react';
import {initiateVesting, addBeneficiary} from './contractMethods';

function Admin() {
  const [beneficiary, setBeneficiary] = useState('');
  const [role, setRole] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddBeneficiary = async (event) => {
    event.preventDefault();
    const success = await addBeneficiary();
    if(success) {
       setBeneficiary('');
       setRole('');
       setAmount('');
    }
  };

  const handleStartVesting = async () => {
    const success = await initiateVesting();
    if (success.hash) {
      alert ("Vesting started successfully");
    }
  };

  return (
    <div className="container">
      <h1>Admin Page</h1>
      <form onSubmit={handleAddBeneficiary}>
        <label>
          Beneficiary Address:
          <input id = "benefAddress" type="text" value={beneficiary} onChange={(e) => setBeneficiary(e.target.value)} required />
        </label>
        <label>
          Role:
          <select id = "role" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="0">Select Role</option>
            <option value="1">User</option>
            <option value="2">Partner</option>
            <option value="3">Team</option>
          </select>
        </label>
        <label>
          Amount:
          <input id = "amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </label>
        <button type="submit">Add Beneficiary</button>
      </form>
      <button className="claim" onClick={handleStartVesting}>Start Vesting</button>
    </div>
  );
}

export default Admin;
