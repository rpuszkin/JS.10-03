document
  .getElementById("getCurrencies")
  .addEventListener("click", getCurrencyList);

function getCurrencyList() {
  const apiUrl = "https://api.frankfurter.app/latest";

  const existingSelect = document.getElementById("currencySelect");
  if (existingSelect) {
    existingSelect.remove();
  }

  const errorMessage = document.getElementById("errorMessage");
  if (errorMessage) {
    errorMessage.remove();
  }

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const rates = data?.rates;
      if (!rates) {
        throw new Error("Nie udało się pobrać danych o walutach.");
      }
      const select = document.createElement("select");
      select.id = "currencySelect";
      for (const currency in rates) {
        if (rates.hasOwnProperty(currency)) {
          const option = document.createElement("option");
          option.value = currency;
          option.textContent = currency;
          select.appendChild(option);
        }
      }
      document.body.appendChild(select);
    })
    .catch((error) => {
      const errorDiv = document.createElement("div");
      errorDiv.id = "errorMessage";
      errorDiv.textContent = `Wystąpił błąd: ${error.message}`;
      document.body.appendChild(errorDiv);
    });
}
