describe('Loan Calculator', function() {
  it('should calculate the monthly payment correctly', function () {
    const testValues = { amount: 10000, years: 5, rate: 5 };
    const expectedMonthlyPayment = '188.71'; 

    const calculatedMonthlyPayment = calculateMonthlyPayment(testValues);
    expect(calculatedMonthlyPayment).toBe(expectedMonthlyPayment);
  });

  it("should return a result with 2 decimal places", function() {
    const testValues = { amount: 15000, years: 3, rate: 4.5 };
    const calculatedMonthlyPayment = calculateMonthlyPayment(testValues);
    const decimalPlaces = calculatedMonthlyPayment.split(".")[1].length;

    expect(decimalPlaces).toBe(2);
  });

});