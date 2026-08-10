document.getElementById("quoteForm").addEventListener("submit", function(e){
  e.preventDefault();

  const data = {
    name: this.name.value,
    phone: this.phone.value,
    address: this.address.value,
    package: this.package.value
  };

  localStorage.setItem("invoiceClient", JSON.stringify(data));

  window.location.href = "invoice.html";
});
