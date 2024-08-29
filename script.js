// Funkcja do pobierania listy walut
async function getCurrencyList() {
  try {
    // Wykonanie zapytania do API
    const response = await fetch("https://api.frankfurter.app/latest");
    if (!response.ok) {
      throw new Error("Błąd w pobieraniu danych");
    }

    const data = await response.json();

    const currencies = Object.keys(data.rates);

    const select = document.createElement("select");

    currencies.forEach((currency) => {
      const option = document.createElement("option");
      option.value = currency;
      option.textContent = currency;
      select.appendChild(option);
    });

    document.body.appendChild(select);
  } catch (error) {
    console.error("Wystąpił błąd:", error);
  }
}

document
  .getElementById("getCurrencies")
  .addEventListener("click", getCurrencyList);
