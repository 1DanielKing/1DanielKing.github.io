// Fetch and load navbar
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;
    setupStickyNavbar(); // Set up sticky after loading
  });

// Sticky Navbar function
function setupStickyNavbar() {
  const navbar = document.getElementById('navbar');
  const sticky = navbar.offsetTop;

  window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };
}
