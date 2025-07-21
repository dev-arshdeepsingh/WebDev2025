document.addEventListener('DOMContentLoaded', () => {

let expenseNameInput = document.getElementById('expense-name')
let expenseAmountInput = document.getElementById('expense-amount')
let expenseForm = document.getElementById('expense-form')
let expenseList = document.getElementById('expense-list')
let totalAmountDisplay = document.getElementById('total-amount')


let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let totalAmount = sumTotalExpense()

renderExpenses()


expenseForm.addEventListener('submit', (e) => {

    e.preventDefault()  //forgot to add parenthesis

    let name = expenseNameInput.value.trim();
    let amount = parseFloat(expenseAmountInput.value.trim())

    if( name !== "" && !isNaN(amount) && amount > 0){

        let newExpense = {
            id: Date.now(),
            name: name,
            amount: amount
        }

        

        expenses.push(newExpense);
        console.log(expenses)
        saveToLocal();
        updateExpense();
        renderExpenses(); //so that the new expense is displayed immediately as soon the form is submitted


        expenseNameInput.value = ""
        expenseAmountInput.value = ""



    }

})


function saveToLocal(){

    localStorage.setItem("expenses", JSON.stringify(expenses))

}

function sumTotalExpense(){

    return expenses.reduce( (sum, currentValue) => (sum + currentValue.amount),0)  //forgot to add .amount

}

function updateExpense(){

    totalAmount = sumTotalExpense()
    totalAmountDisplay.textContent = totalAmount


}

function renderExpenses(){

    expenseList.innerHTML = ""  //Prevents Duplication: Without clearing the list first, each time renderExpenses() is called, it would append new list items to the existing ones, causing the same expenses to appear multiple times.
    //Ensures Fresh Rendering: It creates a clean slate so that the function can rebuild the entire list from scratch with the current state of the expenses array.

    expenses.forEach(exp => {

        let li = document.createElement('li')
        li.innerHTML = `<span>ExpenseName: ${exp.name}, ExpensePrice: $${exp.amount}</span>
        <button data-id = "${exp.id}">Delete Expense</button>`

        expenseList.appendChild(li)
        
        
    });

        saveToLocal()
        updateExpense()

}

expenseList.addEventListener('click', (e) => {

    if(e.target.tagName === 'BUTTON'){
      let expenseId = parseInt(e.target.getAttribute('data-id')); //forgot to add parseInt

      expenses = expenses.filter(e => e.id !== expenseId)
      renderExpenses()   // render expenses after deleting an expense so that the total amount is updated
      saveToLocal()
      updateExpense()  
    }
})






})