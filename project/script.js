const addBtn = document.getElementById('addExpense');
const title = document.getElementById('title');
const amount = document.getElementById('amount');
const date = document.getElementById('date');
const list = document.getElementById('expenseList');
const total = document.getElementById('total');
const todayExp = document.getElementById('today');
const highestExp = document.getElementById('highest');
const search = document.getElementById('search');
const sort = document.getElementById('sort');
const themeSwitch = document.getElementById('themeSwitch');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function render() {
  list.innerHTML = '';
  let filtered = expenses.filter(e =>
    e.title.toLowerCase().includes(search.value.toLowerCase())
  );

  if (sort.value === 'amount')
    filtered.sort((a, b) => b.amount - a.amount);
  else if (sort.value === 'date')
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

  filtered.forEach((exp, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${exp.title}</td>
      <td>$${exp.amount}</td>
      <td>${exp.date}</td>
      <td><button onclick="removeExpense(${index})">🗑️</button></td>
    `;
    list.appendChild(row);
  });

  updateStats();
}

function updateStats() {
  let totalVal = expenses.reduce((sum, e) => sum + e.amount, 0);
  let today = new Date().toISOString().split('T')[0];
  let todayVal = expenses
    .filter(e => e.date === today)
    .reduce((sum, e) => sum + e.amount, 0);
  let highest = Math.max(0, ...expenses.map(e => e.amount));

  total.textContent = `$${totalVal}`;
  todayExp.textContent = `$${todayVal}`;
  highestExp.textContent = `$${highest}`;
}

addBtn.onclick = () => {
  if (!title.value || !amount.value || !date.value) return alert('Fill all fields!');
  expenses.push({
    title: title.value,
    amount: +amount.value,
    date: date.value,
  });
  localStorage.setItem('expenses', JSON.stringify(expenses));
  title.value = amount.value = date.value = '';
  render();
};

function removeExpense(i) {
  expenses.splice(i, 1);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  render();
}

search.oninput = render;
sort.onchange = render;
themeSwitch.onchange = () => document.body.classList.toggle('dark');
render();
