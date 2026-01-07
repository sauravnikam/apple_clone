
  const searchIcon = document.getElementById('searchIcon');
  const searchInput = document.getElementById('searchInput');

  searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
      searchInput.focus();
    }
  });

  // Optional: hide input if clicked outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-icons')) {
      searchInput.classList.remove('active');
    }
  });



 function mac(){
window.location.href="macpro.html"
 }






