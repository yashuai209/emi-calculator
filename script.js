function calculateEMI() {
  let loan = parseFloat(document.getElementById("loan").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let months = parseInt(document.getElementById("months").value);

  if (!loan || !rate || !months) {
    alert("Please fill all fields!");
    return;
  }

  let monthlyRate = rate / (12 * 100);
  let emi = (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1);

  let totalPayment = emi * months;
  let totalInterest = totalPayment - loan;

  document.getElementById("result").innerHTML = `
    <h3>📊 EMI Details:</h3>
    <p><b>Monthly EMI:</b> ₹${emi.toFixed(2)}</p>
    <p><b>Total Interest:</b> ₹${totalInterest.toFixed(2)}</p>
    <p><b>Total Payment:</b> ₹${totalPayment.toFixed(2)}</p>
  `;
}
