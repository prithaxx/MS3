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
    window.location.href = 'login.html';
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


