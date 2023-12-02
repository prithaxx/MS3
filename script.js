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
    makeReview(); //will create the review
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


// function makeReview() {
//   var name = document.getElementById("rName").value;
//   var des = document.getElementById("rDes").value;
//   var html = <h2>${name}</h2>
//               <p class="summary"><i class="fa fa-star"></i>
//                 <i class="fa fa-star"></i>
//                 <i class="fa fa-star"></i></p>
//               <p class="descriptive-summary">${des}</p>;
//   document.getElementById("newReview").innerHTML = html;
// }

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








//----------------------------------BROWSE JS---------------------------------------
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

var cHeader = "Contractor List"; 

function initialMap(){
  var map = document.getElementById('map'); 
  w3AddClass(map, "hide");
}

function updateCHeader (service){
    document.getElementById('cHeader').innerHTML = cHeader + ": " + service;
    
}

function goToResults(){
        document.getElementById('results').scrollIntoView();
    }

// possible selection classes
//all
//appliance*
//bathroom*
//basement*
//carpet*
//drywall*
//electric*
//flooring*
//foundation*
//heating-cooling*
//insulation*
//kitchen*
//landscaping*
//painting*
//plumbing*
//roofing*
//siding*
//tree-services*
//water-heating*
//windows-doors*
//utility*
//bedroom*
//nursery*
//office*
//attic*
//
//


function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("all");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    w3RemoveClass(x[i], "hide")
    if (x[i].className.indexOf(c) > -1){
      w3AddClass(x[i], "show");
    } else {w3AddClass(x[i], "hide"); }
  }
}
  
  // Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
  
  // Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");

}





function filterSort(type, value){
  filterSelection(value); 
      
}



function sortByPrice(value){
  if(value == "high-low"){
    
  }else if (value == "low-high"){
     
    lowToHigh(); 
  }else{
    filterSelection(value); 
  }
  
}


function switchVisible() {
    if (document.getElementById('clist')) {

        if (document.getElementById('clist').style.display == 'none') {
            document.getElementById('clist').style.display = 'block';
            document.getElementById('map').style.display = 'none';
        }
        else {
            document.getElementById('clist').style.display = 'none';
            document.getElementById('map').style.display = 'block';
        }
    }

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

function mapToggle(){
  const map = document.getElementById('map');
  map.classList.toggle('show'); 
}


// var x = window.matchMedia("(max-width: 700px)")
//  // Attach listener function on state changes
//  x.addEventListener("change", function() {
//     doll_list_resize(x);
//   });

// function doll_list_resize(x){
//     if (x.matches) { // If media query matches
//       document.getElementById("serviceList1").style.display = 'block';
//       document.getElementById("doll_and_list").style.display = 'none';

//     } else {
//       document.getElementById("serviceList1").style.display = 'none';
//       document.getElementById("doll_and_list").style.display = 'block';
//     }
  
  
  // // Create a MediaQueryList object
  
  
  // // Call listener function at run time
  // myFunction(x);
  
  

  // const list = document.getElementById('serviceList1');
  // list.classList.toggle('show'); 
// }





function favourite(i) {
  const heart = document.getElementById(i); 
  heart.addEventListener('click', redHeart(i) );
}

function redHeart(i) {
  const heart = document.getElementById(i);
  heart.classList.toggle('red');

}

function addToFavourites(){

}

function contractorPage(c){
  
  document.getElementById('c').style.display= "flex";
}

function closeContractorPage(c){
  document.getElementById('c').style.display= "none";
}

function clistingName(i) {
  const contractor = document.getElementById(i); 
  heart.addEventListener('click', visited(i) );
}
function visited(c){
  const contractor = document.getElementById('c');
  contractor.classList.toggle('visited'); 
}

function contact(i) {
  var contact = document.getElementById(i);
  contact.classList.toggle("showPopUp");
}

function goToLandingPage(){
  window.location.href = 'feed.html';
}

function gotoc1(){
  var targetPage = 'contractor_home.html';
  window.location.href = targetPage;
}

function gotoc2(){
  var targetPage = 'kitchenKing.html';
  window.location.href = targetPage;
}

function gotoc3(){
  var targetPage = 'smith_sons.html';
  window.location.href = targetPage;
}

function gotoc4(){
  var targetPage = 'c4.html';
  window.location.href = targetPage;
}

function gotoc5(){
  var targetPage = 'fabulousCarpeting.html';
  window.location.href = targetPage;
}

function gotoc6(){
  var targetPage = 'c6.html';
  window.location.href = targetPage;
}

function gotoc7(){
  var targetPage = 'c7.html';
  window.location.href = targetPage;
}
function gotoc8(){
  var targetPage = 'c8.html';
  window.location.href = targetPage;
}
function gotoc9(){
  var targetPage = 'c9.html';
  window.location.href = targetPage;
}
function gotoc10(){
  var targetPage = 'c10.html';
  window.location.href = targetPage;
}
function gotoc11(){
  var targetPage = 'c11.html';
  window.location.href = targetPage;
}
function gotoc12(){
  var targetPage = 'c12.html';
  window.location.href = targetPage;
}






// -------------------------------MELs JS -----------------------------

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





function goToLandingPage(){
  window.location.href = 'feed.html';
}

function goToContractor(){
  window.location.href = 'contractor_home.html';
}

function goToLogin(){
  window.location.href = 'index.html';
}

var swiper = new Swiper('.main-container', {
slidesPerView: 4,
centerSlide: "true",
spaceBetween: 10,
pagination: {
  el: ".swiper-pagination",
  type: "fraction",
  clickable: true,
},
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
});

function openPopupPost() {
document.getElementById("newPost").style.display = "block";
}

function closePopupPost() {
document.getElementById("newPost").style.display = "none";
}












// -------------------------------SCHEDULE-------------------------



//constants saving the essential elements by id so that we can access them later to add or edit them
const calendarBody = document.getElementById("calendarBody");
const dateTable = document.getElementById("dateTable");
const selectedDateForm = document.getElementById("selectedDateForm");
const selectedDateElement = document.getElementById("selectedDate");
const timeList = document.getElementById("timeList");

// Define available dates
//these dummy dates
const availableDates = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29];

function generateCalendar(month, year) {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);
  let currentDate = new Date(startDate);
  let calendarHTML = "";

  while (currentDate <= endDate) {
    //adds 7 cells for to create a row week
    //and then starts a new row and repeats the same process
    calendarHTML += "<tr>";
    for (let i = 0; i < 7; i++) {
      if (currentDate.getMonth() === month && currentDate <= endDate) {
        const day = currentDate.getDate();
        const isAvailable = availableDates.includes(day);

        //check if day is available
        //when creating new html if data is not avaialable it will not have onclick function for that cell
        if (returnAvailable(day) == true) {
          let cellClass = "available";
          calendarHTML += `<td class="${cellClass}" onclick="selectDate(${day})">${day}</td>`;
          currentDate.setDate(day + 1);
        } else {
          let cellClass = "NA";
          calendarHTML += `<td class="${cellClass}" >${day}</td>`;
          currentDate.setDate(day + 1);
        }
      } else {
        calendarHTML += "<td></td>";
      }
    }
    calendarHTML += "</tr>";
  }
  //fills the top row with month and year
  dateTable.getElementsByTagName("th")[0].innerText = `${getMonthName(
    month
  )} ${year}`;
  calendarBody.innerHTML = calendarHTML;
}

//function that selects the date when pressed on a cell that contains the number of the day of that specific month and year
function selectDate(day) {
  const selectedDate = new Date(
    dateTable.dataset.year,
    dateTable.dataset.month,
    day
  );
  let formattedDate = `${getMonthName(
    selectedDate.getMonth()
  )} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`;
  selectedDateElement.innerText = `Selected Date: ${formattedDate}`;
  timeList.style.display = "block"; // Show the time slots
}

// ------- Popup general code ----------
// let submitConf = document.getElementById("submit-confirmation");

function openSubmitConf() {
  if (!submitConf.classList.contains("open-submit-confirmation")) {
    submitConf.classList.add("open-submit-confirmation");
    document.getElementById("overlay").style.display = "block";
    submitConf.style.visibility = "visible";
  }
}

function closeSubmitConf() {
  submitConf.classList.remove("open-submit-confirmation");
  document.getElementById("overlay").style.display = "none";
  submitConf.style.visibility = "hidden";

  goToUserHomePage();
}

function submitAppointment() {
  var selectedTime = document.querySelector('input[name="time"]:checked');
  if (selectedTime) {
    const appointmentDetails = {
      date: selectedDateElement.innerText.replace("Selected Date: ", ""),
      time: selectedTime.value,
    };

    openSubmitConf();
    //once submitted and the laert is sent it will automatically redirect you to the homepage
  } else {
    alert("Please select a time slot.");
  }
}

//function that returns true or false depending on whether the date is available to book
function returnAvailable(day) {
  var isAvailable = false;
  for (let i = 0; i < availableDates.length; i++) {
    if (day == availableDates[i]) {
      isAvailable = true;
    }
  }

  return isAvailable;
}

//function returns the month in text
function getMonthName(month) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[month];
}

//function that returns you to the homeage
function goToUserHomePage() {
  var targetPage = "user_home.html";
  window.location.href = targetPage;
}

// Initial rendering for the current month
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
dateTable.dataset.month = currentMonth;
dateTable.dataset.year = currentYear;
generateCalendar(currentMonth, currentYear);

// -------------LOGIN_-------

function doLogin() {
  var loginItem1 = document.getElementById("login-email");
  var loginItem2 = document.getElementById("login-pwd");

  if (!checkValidity(loginItem1) || !checkValidity(loginItem2)) {
    alert("Enter valid email and password.");
  } else {
    goToLandingPage();
  }
}
function checkValidity(item){
  if (item && item.value == "")
    return false;
  return true;
}

function doRegister() {
  var loginItem1 = document.getElementById("reg-email");
  var loginItem2 = document.getElementById("reg-pwd");
  var loginItem3 = document.getElementById("reg-pwd2");

  if (!checkValidity(loginItem1) || !checkValidity(loginItem2) || !checkValidity(loginItem3) ) {
    alert("Enter valid email and password.");
  } else {
    goToLogin();
  }
}
function checkValidity(item){
  if (item && item.value == "")
    return false;
  return true;
}




// -----------------------QUOTE-----------------------
function getAQuote() {
  var loginItem1 = document.getElementById("quoteemail");
  var loginItem2 = document.getElementById("quoteph");
  var loginItem3 = document.getElementById("quotename");
  var loginItem4 = document.getElementById("quotemessage");
  
  

  if (!checkValidity(loginItem1) || !checkValidity(loginItem2) ||!checkValidity(loginItem3) ||!checkValidity(loginItem4)) {
    alert("Enter valid email and password.");
  } else {
    goToUserHomePage();
  }
}
function checkValidity(item){
  if (item && item.value == "")
    return false;
  return true;
}



//function that works onclick for get a quote
function getAQuote() {
  if(validateForm()) {
    alert("Request for a quote has been submitted successfully!");
    goToUserHomePage();
  }
}


// ------------------- JS FOR LINKING TO USER HOME PAGE ----------------------------
function goToUserHomePage() {
  var targetPage = "user_home.html";
  window.location.href = targetPage;
}

