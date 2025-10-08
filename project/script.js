// Get references to the HTML elements
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expenseTableBody = document.querySelector('#expenseTable tbody');

// Function to handle adding an expense
function addExpense() {
    // 1. Get the values from the input fields
    const titleInput = document.getElementById('title');
    const amountInput = document.getElementById('amount');
    const dateInput = document.getElementById('date');

    const title = titleInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const date = dateInput.value;

    // 2. Simple validation: Check if all fields are filled
    if (title === '' || isNaN(amount) || amount <= 0 || date === '') {
        alert('Please enter a valid title, amount, and date.');
        return; // Stop the function if validation fails
    }

    // 3. Create a new row (<tr>) for the table
    const newRow = expenseTableBody.insertRow();

    // 4. Create cells (<td>) and insert the data
    const titleCell = newRow.insertCell(0);
    const amountCell = newRow.insertCell(1);
    const dateCell = newRow.insertCell(2);

    titleCell.textContent = title;
    // Format amount for display
    amountCell.textContent = '$' + amount.toFixed(2);
    dateCell.textContent = date;

    // 5. Clear the input fields after adding the expense
    titleInput.value = '';
    amountInput.value = '';
    dateInput.value = '';
}

// 6. Attach the 'addExpense' function to the button click event
addExpenseBtn.addEventListener('click', addExpense);