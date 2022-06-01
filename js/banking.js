function getInputValue(fieldId)
{
    const inputField = document.getElementById(fieldId);
    const inputAmount = inputField.value;
    inputField.value = "";
    return inputAmount;
}

function getTotalValue(fieldId, fieldAmount)
{
    const inputField = document.getElementById(fieldId);
    const inputAmount = inputField.innerText;
    inputField.innerText = parseFloat(inputAmount) + parseFloat(fieldAmount);
}

function getBalanceValue(fieldId, fieldAmount, isAdding)
{
    const inputField = document.getElementById(fieldId);
    const inputAmount = inputField.innerText;
    if(isAdding == true)
    {
        inputField.innerText = parseFloat(inputAmount) + parseFloat(fieldAmount);
    }
    else
    {
        inputField.innerText = parseFloat(inputAmount) - parseFloat(fieldAmount);
    }
}

function getExtraBalanceValue(fieldId)
{
    const inputField = document.getElementById(fieldId);
    const inputAmount = inputField.innerText;
    const inputExtraAmount = parseFloat(inputAmount);
    return inputExtraAmount;
}

document.getElementById("deposit-button").addEventListener("click", function()
{
    const fieldAmount = getInputValue("deposit-input");
    // getTotalValue("deposit-total", fieldAmount);
    // getBalanceValue("balance-total", fieldAmount, true);
    if(fieldAmount > 0)
    {
        getTotalValue("deposit-total", fieldAmount);
        getBalanceValue("balance-total", fieldAmount, true);
    }
});

document.getElementById("withdraw-button").addEventListener("click", function()
{
    const fieldAmount = getInputValue("withdraw-input");
    const fieldExtraAmount = getExtraBalanceValue("balance-total");
    // getTotalValue("withdraw-total", fieldAmount);
    // getBalanceValue("balance-total", fieldAmount, false);
    if(fieldAmount > 0 && fieldAmount <= fieldExtraAmount)
    {
        getTotalValue("withdraw-total", fieldAmount);
        getBalanceValue("balance-total", fieldAmount, false);
    }
});