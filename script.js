function calculateEMI() {
  let loan = parseFloat(document.getElementById("loan").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let months = parseInt(document.getElementById("months").value);

  if (!loan || !rate || !months) {
    alert("Please fill all fields!");
    return;
  }

  // EMI Formula Calculation
  let monthlyRate = rate / (12 * 100);
  let emi = (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1);

  let totalPayment = emi * months;
  let totalInterest = totalPayment - loan;

  // Show Result
  document.getElementById("result").innerHTML = `
    <h3>📊 EMI Details:</h3>
    <p id="emiResult"><b>Monthly EMI:</b> ₹${emi.toFixed(2)}</p>
    <p><b>Total Interest:</b> ₹${totalInterest.toFixed(2)}</p>
    <p id="totalResult"><b>Total Payment:</b> ₹${totalPayment.toFixed(2)}</p>
  `;
}

/* ✅ STEP 3: Add Print and Share functionality below */

// 🖨️ Print Result
document.getElementById("printBtn").addEventListener("click", function () {
  window.print();
});

// 📤 Share Result
document.getElementById("shareBtn").addEventListener("click", async function () {
  const emi = document.getElementById("emiResult")?.innerText || "";
  const total = document.getElementById("totalResult")?.innerText || "";

  if (!emi) {
    alert("Please calculate EMI before sharing.");
    return;
  }

  if (navigator.share) {
    try {
      await navigator.share({
        title: "EMI Calculator Result",
        text: `${emi}\n${total}\nCheck your EMI here: ${window.location.href}`,
      });
    } catch (err) {
      console.log("User cancelled sharing or not supported.");
    }
  } else {
    alert("Sharing is not supported on this browser.");
  }
});
