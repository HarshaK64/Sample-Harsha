// RewardPointsCalculator.js
import React, { useEffect, useState } from 'react';
import { fetchTransactionData } from '../api';

function RewardPointsCalculator() {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    // Fetch transaction data when the component mounts
    fetchTransactionData().then((data) => {
      setCustomerData(data);
    });
  }, []);

  // Calculate reward points for a single transaction
  const calculatePoints = (amount) => {
    let points = 0;
    if (amount > 100) {
      points += 2 * (amount - 100);
      points += 50; // Points for the first $50
    } else if (amount > 50) {
      points += 2 * (amount - 100);
    }
    return points;
  };

  return (
    <div>
      <h1>Reward Points Calculator</h1>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Month</th>
            <th>Transaction Amount</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.customerId}</td>
              <td>{transaction.month}</td>
              <td>${transaction.amount}</td>
              <td>{calculatePoints(transaction.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RewardPointsCalculator;
