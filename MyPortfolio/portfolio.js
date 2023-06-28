document.addEventListener('DOMContentLoaded', function() {
  // Get all the buttons inside the cards
  var buttons = document.querySelectorAll('.card-body .btn');

  // Add click event listener to each button
  buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      var url = this.getAttribute('href'); // Get the URL from the href attribute
      window.location.href = url; // Navigate to the URL in the same page
    });
  });
});
