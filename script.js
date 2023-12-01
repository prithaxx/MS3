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

// Add an event listener to the search input
document.getElementById("searchInput").addEventListener("input", showSuggestions);
function showSuggestions() {
var input = document.getElementById("searchInput");
var suggestionsContainer = document.getElementById("suggestions-container");

// Clear previous suggestions
suggestionsContainer.innerHTML = "";

// If the input is not empty, generate and display suggestions
if (input.value.trim() !== "") {
  var suggestions = generateSuggestions(input.value);

  // Append each suggestion as a link in the suggestion list
  suggestions.forEach(function (suggestion) {
    var suggestionLink = document.createElement("a");
    suggestionLink.href = suggestion.link;
    suggestionLink.textContent = suggestion.text;
    suggestionsContainer.appendChild(suggestionLink);
  });

  // Show the suggestion list
  suggestionsContainer.style.display = "block";
} else {
  // Hide the suggestion list if the input is empty
  suggestionsContainer.style.display = "none";
}
}

function generateSuggestions(query) {
// Hardcoding the available contractor sites for the search suggestions.
var allSuggestions= [
  { text: "Kitchen Renovation", link: "kitchenKing.html" },
  { text: "Carpet Installation", link: "fabulousCarpenting.html" },
  { text: "Innovate Renovations", link: "contractor_home.html" },
  { text: "General Contracting", link: "smith_sons.html" },
];
var filteredSuggestions = allSuggestions.filter(function (suggestion) {
  return suggestion.text.toLowerCase().includes(query.toLowerCase());
});

return filteredSuggestions;
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

// ------------------- JS FOR LINKING TO GET A QUOTE HOME PAGE ----------------------------
function goToQuotePage(){
var targetPage = 'quote.html';
window.location.href = targetPage;
}
// ------------------- JS FOR LINKING TO SCHEDULE HOME PAGE ----------------------------
function goToScedulePage(){
var targetPage = 'schedule.html';
window.location.href = targetPage;
}

function confirmDelete(btn) {
if (confirm("Are you sure you want to delete this row?")) {
    var row = btn.parentNode.parentNode; // Get the parent <tr> of the button
    row.parentNode.removeChild(row); // Remove the <tr> from the table
}
}

function contact(i) {
  var contact = document.getElementById(i);
  contact.classList.toggle("showPopUp");
}



function goToBrowseAll(){
  var targetPage = 'browse.html';
  window.location.href = targetPage;

}

function goToBrowseAppliance(){
  var targetPage = 'browse.html';
  window.location.href = targetPage;
  
}

function goToBrowseBasement(){
  var targetPage = 'browse.html';
  window.location.href = targetPage;
}

function goToBrowseBathroom(){
  var targetPage = 'browse.html';
  window.location.href = targetPage;
}

function goToBrowseDrywall(){
  var targetPage = 'browse.html';
  window.location.href = targetPage;
}

function goToBrowseElectric(){
  var targetPage = 'browse.html';
  window.location.href = targetPage;
}


function goToBrowseKitchen(){
  var targetPage = 'browse.html';
  window.location.href = targetPage;
}

function goToBrowseLandscaping(){
  var targetPage = 'browse.html';
  window.location.href = targetPage;
}

function goToBrowsePainting(){
  var targetPage = 'browse.html';
  window.location.href = targetPage;
}

function goToBrowsePlumbing(){
  var targetPage = 'browse.html';
  window.location.href = targetPage;
}

function goToBrowseRoofing(){
  var targetPage = 'browse.html';
  window.location.href = targetPage;
}

function toggleMapList(){
  const toggle = document.getElementById("map"); 
  toggle.addEventListener('click', toggleMap("map")); 

}
function toggleMap(i) {
  const map = document.getElementById(i);
  map.classList.toggle('show');
  const list = document.getElementById("clist"); 
  w3AddClass(list, "hide");

}
 
function favourite(i) {
  const heart = document.getElementById(i); 
  heart.addEventListener('click', redHeart(i) );
}

function redHeart(i) {
  const heart = document.getElementById(i);
  heart.classList.toggle('red');

}

