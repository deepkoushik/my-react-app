document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.main-content');

  // Toggle sidebar visibility when the menu icon is clicked
  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('open');
    sidebar.classList.toggle('show-sidebar');
    mainContent.classList.toggle('show-sidebar');
  });
});