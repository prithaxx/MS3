function openNav() {
    document.getElementById("my-burger-links").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("my-burger-links").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

var dropdown = document.getElementsByClassName("browse-dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var dropdown = document.getElementsByClassName("servicesbtn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function toggleNav() {
  var nav = document.getElementById("my-burger-links");
  var btnText = document.getElementById("btn-text");

  if (nav.style.width == "250px") {
    // Close the side navigation
    nav.style.width = "0";
    btnText.innerHTML = "☰ Show Text";
  } else {
    // Open the side navigation
    nav.style.width = "250px";
    btnText.innerHTML = ""; // Make the text inside the button disappear
  }
}

function scrollWriteReviewSection() {
  var element = document.getElementById("write-review-section");
  element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

document.getElementById("review").addEventListener("submit", function (event) {
  event.preventDefault();
  resetForm();
});

function resetForm(){
  var form = document.getElementById("review");
  form.reset();
}


// ------- Popup general code ----------
let submitConf = document.getElementById("submit-confirmation");

function openSubmitConf() {
  if (!submitConf.classList.contains("open-submit-confirmation")) {
    submitConf.classList.add("open-submit-confirmation");
    document.getElementById("overlay").style.display = "block";
    submitConf.style.visibility = "visible";
  }
}
function closeSubmitConf(){
  submitConf.classList.remove("open-submit-confirmation");
  document.getElementById("overlay").style.display = "none";
  submitConf.style.visibility = "hidden";
}

// ------------------- JS FOR LINKING TO USER HOME PAGE ----------------------------
function goToUserHomePage(){
  var targetPage = 'user_home.html';
  window.location.href = targetPage;
}

function confirmDelete(btn) {
  if (confirm("Are you sure you want to delete this row?")) {
      var row = btn.parentNode.parentNode; // Get the parent <tr> of the button
      row.parentNode.removeChild(row); // Remove the <tr> from the table
  }
}