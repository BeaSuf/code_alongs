

const savingsAccount = {
    name: 'SAVINGS',
    balance: 0
}

const checkingAccount = {
    name: 'CHECKING',
    balance: 0
}

const bankAccounts = {

}

const deposit = function(account, amount) {
    account.balance += amount;
}

const withdraw = function(account, amount) {
    if(account.balance > amount) {
        account.balance -= amount;
    } else if(account.balance + account.linkedAccount.balance > amount){
        let stagedAmount = amount - account.balance;
        account.balance -= stagedAmount;
        account.linkedAccount.balance -= (amount - stagedAmount);
    } else {
        //TODO error
    }
}