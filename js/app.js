    function getInputNumber(inputId){
        const inputBox = document.getElementById(inputId + '-input-box');
        const amount = parseInt(inputBox.value);
        // console.log(amount);
        return amount;
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
