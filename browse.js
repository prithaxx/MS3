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

