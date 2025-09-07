// =======================
// TO-DO LIST LOGIC
// =======================

// Load tasks from localStorage
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button class="remove-btn" onclick="removeTask(${index})">Remove</button>
    `;
    taskList.appendChild(li);
  });
}

// Add new task
function addTask() {
  let taskInput = document.getElementById("task");
  let task = taskInput.value.trim();

  if (task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    loadTasks();
  }
}

// Remove task
function removeTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

// Load tasks when page is ready
window.onload = loadTasks;


// =======================
// PRODUCT CATALOG LOGIC
// =======================

const products = [
  { name: "Book A", category: "books", price: 150, rating: 4.5 },
  { name: "Book B", category: "books", price: 120, rating: 4.2 },
  { name: "Headphones", category: "electronics", price: 999, rating: 4.7 },
  { name: "Speaker", category: "electronics", price: 1499, rating: 4.6 },
];

// Display products
function displayProducts(filtered = products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price}</p>
      <p>Rating: ⭐ ${p.rating}</p>
    `;
    productList.appendChild(div);
  });
}

// Filter products by category
function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

// Sort products by price or rating
function sortProducts() {
  const sortBy = document.getElementById("sortOption").value;
  let sorted = [...products];

  if (sortBy === "price") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortBy === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(sorted);
}

// Initial product display
displayProducts();
