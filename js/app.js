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

            if(isNaN(savingAmount)){
                document.getElementById('errer-sms').innerText = ' SAVING FIELD Enter only  number only.';
            }else{
                document.getElementById('success-sms').innerText = ' SAVING Field Looks Good ';
            }
            // saving amount condition
            if(savingAmount > balance){
                document.getElementById('errer-sms').innerText = ' SAVING Amount is not bigger than balance';
            }else{
                document.getElementById('success-sms').innerText = ' SAVING Looks Good ';
            }
            return savingAmount; 
    }

    document.getElementById('calculate-button').addEventListener('click', function(){
        // income amount
        const income = getInputNumber('income');
        //expenses amount
        const food = getInputNumber('food');
        const clothes = getInputNumber('clothes');
        const rent = getInputNumber('rent');
        
        if(isNaN(food)){
            document.getElementById('errer-sms').innerText = ' Check FOOD field Enter number only.';
        }else{
            document.getElementById('success-sms').innerText = 'Food Looks Good';
        }
       
        if(isNaN(rent)){
            document.getElementById('errer-sms').innerText = ' Check RENT field Enter number only.';
        }else{
            document.getElementById('success-sms').innerText = 'Rent Looks Good';
        }
       
        if(isNaN(clothes)){
            document.getElementById('errer-sms').innerText = ' Check CLOTHES field Enter number only.';
        }else{
            document.getElementById('success-sms').innerText = 'Clothes Looks Good';
        }

        // total expenses
        const totalExpenses = food + rent + clothes;
        // console.log(totalExpenses);
        const totalExpensesField = document.getElementById('total-expense');
        totalExpensesField.innerText = parseInt(totalExpenses);

        // balance after expenses
        const balanceField = document.getElementById('balance');
        let balance = balanceField.innerText;
        balance = parseInt(income) - parseInt(totalExpenses);
        
        if(balance>0){
            balanceField.innerText = balance;
        }else{
            balanceField.innerText = 0;
        }

    })
    document.getElementById('save-button').addEventListener('click', function(){
        //remaining balance
        
        let savingAmount = parseInt(getSaving());
        const balanceText = document.getElementById('balance').innerText;
        const balance = parseInt(balanceText);

        const remainingBalanceField = document.getElementById('remaining-balance-field');
        const remainingBalance = balance - savingAmount;
        if(remainingBalance<0){
            remainingBalanceField.innerText = 0;
        }else{
            remainingBalanceField.innerText = remainingBalance;
        }
       

    })

