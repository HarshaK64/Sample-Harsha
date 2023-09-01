export const fetchTransactionData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [
        { customerId: 1, month: 'January', amount: 120 },
        { customerId: 1, month: 'February', amount: 80 },
        
      ];
      resolve(data);
    }, 1000); 
  });
};
