//function that works onclick for get a quote
function getAQuote() {
    if(validateForm()) {
      alert("Request for a quote has been submitted successfully!");
      goToUserHomePage();
    }
  }
  
  // ------------------- JS FOR LINKING TO USER HOME PAGE ----------------------------
  function goToUserHomePage() {
    // if(validateForm()) {
      var targetPage = "user_home.html";
      window.location.href = targetPage;
    // }
  }
  
  function validateForm() {
    let name = document.forms["quote-form"]["name"].value;
    let email = document.forms["quote-form"]["email"].value;
    let phone = document.forms["quote-form"]["phone"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    if( email == "") {
      alert("Email must be filled out");
      return false;
    }
    if( phone == "") {
      alert("Phone number must be filled out");
      return false;
    }
    return true;
  }