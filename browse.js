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
// function filterSelection(filter){
//     var li,i,j; 
//     li = document.getElementsById("filterContractors"); 
//     filterItems = document.getElementsByClassName(filter); 
//     // if (filter == "all") filter = "";
//     //find the listings with the filter id
//     for(i = 0; i < li.length; i++){
//         for(j=0; j<filterItems.length; j++){
//             if(li[i]==filterItems[j]){
//                 li[i].style.display = "";
//             } else {
//                 li[i].style.display = "none";
//             }
//         }
        
//     }
    
// }

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
  if(type == "reviews"){
      sortByRating(value); 
  }else if(type == "price"){
      sortByPrice(value); 
  }else if(type == "distance")
      sortByDistance(value); 
}
function sortByRating(value){
  if(value == "top-rated"){

  }else if(value == "highest-rating"){

  }else if(value == "low-rating"){

  }
}

function topRated(){
  active = document.getElementsByClassName("show");

}

function highestRating(){
  active = document.getElementsByClassName("show");
}

function lowRating(){
  active = document.getElementsByClassName("show");
}

function sortByDistance(value){
  if(value == "distance"){

  }else if(value == "radius"){

  }else if(value == "postal"){
      
  }
}

function radiusDistance(){
  active = document.getElementsByClassName("show");
}

function postal(){
  active = document.getElementsByClassName("show");

}

function sortByPrice(value){
  if(value == "high-low"){
    priceOrder("desc");
  }else if (value == "low-high"){
    SortData(); 
  }
  filterSelection(value); 
}

function priceOrder(direction){
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementsById("clist");
  switching = true;
  // Set the sorting direction to ascending:
  dir = direction;
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByClassName("price");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /* If next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          /* If next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
}
}

function comparator(a, b) { 
  if (a.dataset.clisting < b.dataset.clisting) 
      return -1; 
  if (a.dataset.clisting > b.dataset.clisting) 
      return 1; 
  return 0; 
} 

// Function to sort Data 
function SortData() { 
  var listings = document.querySelectorAll("[data-clisting]"); 
  var listingsArray = Array.from(listings); 
  let sorted = listingsArray.sort(comparator()); 
  sorted.forEach(e => 
      document.querySelector("#clist").appendChild(e)); 
} 



function priceLowHigh(){

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