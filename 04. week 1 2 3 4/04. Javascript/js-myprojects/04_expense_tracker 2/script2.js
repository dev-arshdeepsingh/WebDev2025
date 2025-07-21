document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expense-form");
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");
    const totalAmountDisplay = document.getElementById("total-amount");
  
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    let totalAmount = calculateTotal();
  
    renderExpenses();
  
    expenseForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = expenseNameInput.value.trim();
      const amount = parseFloat(expenseAmountInput.value.trim());   //Forms inputs despite being number type still returns a string. Hence we used parseFloat to convert it to a number.
  
      if (name !== "" && !isNaN(amount) && amount > 0) {  //It means execute the code only if the name is not empty, the amount's NaN is false and the amount is greater than 0.
        const newExpense = {
          id: Date.now(),
          name: name,
          amount: amount,
        };
        expenses.push(newExpense);
        saveExpensesTolocal();
        renderExpenses();
        updateTotal();
  
        //clear input
        expenseNameInput.value = "";
        expenseAmountInput.value = "";
      }
    });
  
    function renderExpenses() {
      expenseList.innerHTML = "";   //due to some reason, it is set empty
      expenses.forEach((expense) => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${expense.name} - $${expense.amount}
          <button data-id="${expense.id}">Delete</button>
          `;
        expenseList.appendChild(li);
      });
    }
  
    function calculateTotal() {
      return expenses.reduce((sum, expense) => sum + expense.amount, 0); //We are writing expense.amount beacause our array is an array of objects.
    }
  
    function saveExpensesTolocal() {
      localStorage.setItem("expenses", JSON.stringify(expenses));  //Here the value passed as expenses along with JSON is array named expenses declared above & localStorage is browser's inbuilt API
    }
  
    function updateTotal() {
      totalAmount = calculateTotal();
      totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }
  
    expenseList.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const expenseId = parseInt(e.target.getAttribute("data-id"));
        expenses = expenses.filter((expense) => expense.id !== expenseId);
  
        saveExpensesTolocal();
        renderExpenses();
        updateTotal();
      }
    });
  });
  
  //reduce( ) is a method in JS, it is used to find the sum of all the elements in an array. reduce(    (accumulator, currentValue) => accumulator + currentValue, initialValue   )   // It is just a single lined func. without return statement.
  // Now, if given array is [1,2,3,4,5] then it will be like this: First we will choose initial value which is generally 0. As accumulator is empty it will take that 0 & stores it in himself. Now, job of initial value is over as it is just till 1st iteration. Now in next step, accumulator value will be 0 & current value will be 1. so it will now accumulator value will be add 0+1=1(NewAccumulatorValue = Prev. Accumulator Value + Current Value). now in next step, accumulator value will be 1 & current value will be 2(because next element in array is 2). so it will add 1+2=3. now in next step, accumulator value will be 3 & current value will be 3. so it will add 3+3=6. now in next step, accumulator value will be 6 & current value will be 4. so it will add 6+4=10. now in next step, accumulator value will be 10 & current value will be 5. so it will add 10+5=15. so the final result will be 15.
  // find() & filter() are quite similar array methods. find() is used to find the first element in an array that satisfies a condition. filter() is used to find all the elements in an array that satisfies a condition.