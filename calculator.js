
window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupInitialValues() {
  document.getElementById("loan-amount").value = 10000;
  document.getElementById("loan-years").value = 5;
  document.getElementById("loan-rate").value = 5;
  update();
}

function update() {
  const values = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
}

function calculateMonthlyPayment(values) {
  const principal = values.amount;
  const yearlyRate = values.rate;
  const numberOfPayments = values.years * 12;
  const monthlyInterestRate = yearlyRate / 12 / 100;

  const numerator = principal * monthlyInterestRate;
  const denominator = 1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments);

  const monthlyPayment = numerator / denominator;
  return monthlyPayment.toFixed(2);
}

function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = "$" + monthly;
}