function calculateTotals(shopping, tax) {
  const totalSales = shopping.reduce((acc, item) => {
    const value = item.price * item.quantity;
    return (acc += value);
  }, 0);

  const taxAmount = (totalSales * tax) / 100;
  const totalSalesWithTax = totalSales + taxAmount;
  return parseFloat(totalSalesWithTax.toFixed(2));
}
module.exports = calculateTotals;
