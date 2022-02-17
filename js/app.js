    function getInputNumber(inputId){
        const inputBox = document.getElementById(inputId + '-input-box');
        const amount = parseInt(inputBox.value);
        // console.log(amount);
        return amount;
    }
    // saving percentence
    function getSaving(){
        const balanceField = document.getElementById('balance');
        let balance = parseInt(balanceField.innerText);
        const save = getInputNumber('saving');
        let savingAmount = (balance /100)* save;
        let savingAmountField = document.getElementById('saving-amount-field');
            savingAmountField.innerText = savingAmount;
            return savingAmount;
    }

    document.getElementById('calculate-button').addEventListener('click', function(){
        // income amount
        const income = getInputNumber('income');

        //expenses amount
        const food = getInputNumber('food');
        const rent = getInputNumber('rent');
        const clothes = getInputNumber('clothes');

        // total expenses
        const totalExpenses = food + rent + clothes;
        // console.log(totalExpenses);
        const totalExpensesField = document.getElementById('total-expense');
        totalExpensesField.innerText = parseInt(totalExpenses);

        // balance after expenses
        
        const balanceField = document.getElementById('balance');
        let balance = balanceField.innerText;
        balance = parseInt(income) - parseInt(totalExpenses);
        balanceField.innerText = balance;

    })
    document.getElementById('save-button').addEventListener('click', function(){
        //remaining balance
        
        let savingAmount = parseInt(getSaving());
        const balanceText = document.getElementById('balance').innerText;
        const balance = parseInt(balanceText);

        const remainingBalanceField = document.getElementById('remaining-balance-field');
        const remainingBalance = balance - savingAmount;
        remainingBalanceField.innerText = remainingBalance;

    })

