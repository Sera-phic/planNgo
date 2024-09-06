// Add event listener to the navigation menu
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav ul li a");
  
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault