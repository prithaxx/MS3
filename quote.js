//function that works onclick for get a quote
function getAQuote() {
  alert("Request for a quote has been submitted successfully!");
  goToUserHomePage();
}

// ------------------- JS FOR LINKING TO USER HOME PAGE ----------------------------
function goToUserHomePage() {
  var targetPage = "user_home.html";
  window.location.href = targetPage;
}