document.addEventListener('DOMContentLoaded', function () {

    const currencyToggle = document.getElementById('currency-toggle');
    const pricingElements = document.querySelectorAll('[id="pricing"]');
    const currencyElements = document.querySelectorAll('[id="currency"]');

    let isEuro = true; // true if the current currency is Euro, false if it's Dollar

    // Function to round the number to the nearest whole dollar
    function roundToDollar(number) {
        return Math.round(number);
    }

    // Function to update the currency display
    function updateCurrencyDisplay() {
        if (isEuro) {
            const conversionRate = 1.11; // Conversion rate from Euro to Dollar (1 Euro = 1.11 Dollars)
            pricingElements.forEach(function (element) {
                const dollarAmount = parseFloat(element.textContent) * conversionRate;
                element.textContent = isEuro ? roundToDollar(dollarAmount) : parseFloat(element.textContent);
            });
            const ExpensiveElements = document.getElementById('expense');
            ExpensiveElements.textContent = '2.208';
        } else {
            const conversionRate = 1.11; // Conversion rate from Dollar to Euro (1 Dollar = 0.89 Euro)
            pricingElements.forEach(function (element) {
                const euroAmount = parseFloat(element.textContent) / conversionRate;
                element.textContent = isEuro ? parseFloat(element.textContent) : roundToDollar(euroAmount);
            });
            const ExpensiveElements = document.getElementById('expense');
            ExpensiveElements.textContent = '1.989';
        }

        // Update the currency symbol based on the selected currency
        const currencySymbol = isEuro ? '$' : '€';
        currencyElements.forEach(function (element) {
            element.textContent = currencySymbol;
        });

        isEuro = !isEuro; // Toggle the currency flag after updating all elements
    }

    // Event listener to handle currency switch when the toggle switch is clicked
    currencyToggle.addEventListener('click', updateCurrencyDisplay);



});

