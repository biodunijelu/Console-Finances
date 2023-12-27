// Sample dataset for financial records
const financialData = [
    ['Jan-2023', 867884],
    ['Feb-2023', 984655],
    ['Mar-2023', 322013],
    ['Apr-2023', 2000],
    ['May-2023', 1000],
    ['June-2023', 1500],
    ['July-2023', -500],
  
  ];

  // To calculate financial analysis
  function calculateFinancialAnalysis(data) {
    let totalMonths = data.length;
    let totalProfitLoss = 0;
    let totalChange = 0;
    let greatestIncrease = { amount: 0 };
    let greatestDecrease = { amount: 0 };

    for (let i = 0; i < totalMonths; i++) {
      // Extracting values from the current record
      let currentData = data[i];
      let currentProfitLoss = parseInt(currentData[1]);
  
      // Calculating total Profit/Loss
      totalProfitLoss += currentProfitLoss;
  
      // Calculating change in Profit/Loss
      if (i > 0) {
        let change = currentProfitLoss - parseInt(data[i - 1][1]);
        totalChange += change;
  
        // Updating greatest increase and decrease
        if (change > greatestIncrease.amount) {
          greatestIncrease.amount = change;
          greatestIncrease.date = currentData[0];
        } else if (change < greatestDecrease.amount) {
          greatestDecrease.amount = change;
          greatestDecrease.date = currentData[0];
        }
      }
    }
// Calculating average change
let averageChange = totalChange / (totalMonths - 1);

}