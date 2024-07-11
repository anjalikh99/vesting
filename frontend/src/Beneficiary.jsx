import React, { useState, useEffect } from 'react';
import {getCliffTime, getReleaseAmount, claimTokens} from './contractMethods';
import './styles.css';

function Beneficiary() {
  const [cliffTime, setCliffTime] = useState('');
  const [releasableAmount, setReleasableAmount] = useState('');

  useEffect(() => {
    async function getDetails(){
    // Fetch cliff time and releasable amount logic here
    const cliff = await getCliffTime();
    const releaseAmount = await getReleaseAmount(); 

    console.log(cliff, releaseAmount);

    setCliffTime(cliff);
    setReleasableAmount(releaseAmount);
    }
    getDetails();
  }, []);

  const handleClaimTokens =async () => {
    const success = await claimTokens();
    if(success) {
      alert("Tokens transferred into your acount");
    }
  };

  return (
    <div className="container">
      <h1>Beneficiary Page</h1>
      <p>Cliff Time: {cliffTime} Months</p>
      <p>Releasable Amount: {releasableAmount} MYT</p>
      <button className="claim" onClick={handleClaimTokens}>Claim Tokens</button>
    </div>
  );
}

export default Beneficiary;
