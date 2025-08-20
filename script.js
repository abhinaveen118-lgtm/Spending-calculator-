function calculateSpending() {
  const data = document.getElementById('dataInput').value.trim();
  if (!data) {
    alert('Please paste your order data first!');
    return;
  }

  const lines = data.split('\n');
  let total = 0;
  const monthlySpending = {};

  for (let line of lines) {
    const [dateStr, amountStr] = line.split(',').map(s => s.trim());
    const amount = parseFloat(amountStr);
    if (!dateStr || isNaN(amount)) continue;

    total += amount;

    const month = dateStr.slice(0, 7); // YYYY-MM
    if (!monthlySpending[month]) monthlySpending[month] = 0;
    monthlySpending[month] += amount;
  }

  let resultHtml = `<h2>Total Spending: ₹${total.toFixed(2)}</h2>`;
  resultHtml += `<h3>Monthly Breakdown:</h3><table border="1" cellpadding="5"><tr><th>Month</th><th>Amount (₹)</th></tr>`;
  for (const month in monthlySpending) {
    resultHtml += `<tr><td>${month}</td><td>${monthlySpending[month].toFixed(2)}</td></tr>`;
  }
  resultHtml += `</table>`;

  document.getElementById('result').innerHTML = resultHtml;
}
