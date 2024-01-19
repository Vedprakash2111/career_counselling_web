const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});


// Use fetch to load the navbar content dynamically
fetch('navbar.html')
.then(response => response.text())
.then(html => {
  // Inject the HTML into the navbar-container element
  document.getElementById('navbar-container').innerHTML = html;
});



