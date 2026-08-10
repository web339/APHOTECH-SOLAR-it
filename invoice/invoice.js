// Generate invoice number
const invoiceNo = "APH-" + Math.floor(100000 + Math.random() * 900000);

// Get date
const today = new Date().toLocaleDateString();

// Get URL parameters
const params = new URLSearchParams(window.location.search);
const packageName = params.get("package");
const amount = params.get("amount");

// Populate invoice
document.getElementById("invoiceNo").textContent = invoiceNo;
document.getElementById("invoiceDate").textContent = today;
document.getElementById("packageName").textContent = packageName;
document.getElementById("packageAmount").textContent = Number(amount).toLocaleString();
document.getElementById("totalAmount").textContent = Number(amount).toLocaleString();

// Print function
function printInvoice() {
  window.print();
}

function sendWhatsAppInvoice() {
  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("customerPhone").value;
  const email = document.getElementById("customerEmail").value || "N/A";

  if (!name || !phone) {
    alert("Please enter customer name and phone number.");
    return;
  }

  const message = `
*Aphotech Solar-Solution Enterprises*

Invoice No: ${invoiceNo}
Date: ${today}

Customer Name: ${name}
Phone: ${phone}
Email: ${email}

Package: ${packageName}
Amount: ₦${Number(amount).toLocaleString()}

Bank: Moniepoint MFB
Account No: 6531397045

Please confirm payment.
Thank you for choosing Aphotech Solar.
`;

  const whatsappURL =
    "https://wa.me/2348165029912?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
}
