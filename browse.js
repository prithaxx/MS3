var cHeader = "Contractor List"; 

function initializeBrowse(){

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
  // w3AddClass(element, "hide");
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
            // document.getElementById()
        }
        else {
            document.getElementById('clist').style.display = 'none';
            document.getElementById('map').style.display = 'block';
        }
    }

}
function toggleMapList(){
    // list = document.getElementById("clist"); 
    // map = document.getElementsByClassName("map"); 

    // w3RemoveClass(list, "show");
    // w3AddClass(list, "show"); 
    // w3RemoveClass(map, "hide"); 
    // w3AddClass(map, "show"); 


    const toggle = document.getElementById("map"); 
    toggle.addEventListener('click', toggleMap("map")); 

    
    // w3AddClass(); 
}
function toggleMap(i) {
    const map = document.getElementById(i);
    map.classList.toggle('show');
    const list = document.getElementById("clist"); 
    w3AddClass(list, "hide");
    // addToFavourites(); 
}





function favourite(i) {
  const heart = document.getElementById(i); 
  heart.addEventListener('click', redHeart(i) );
}

function redHeart(i) {
  const heart = document.getElementById(i);
  heart.classList.toggle('red');
  // addToFavourites(); 
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
