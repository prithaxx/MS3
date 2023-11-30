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


// ids for sorting div swap
// priceAsc
// priceDesc
// topRated
// highestRating
// lowRating
// radius
// distance


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
    priceOrder("asc");
    // SortData(); 
    // sort(); 
  }else{
    filterSelection(value); 
  }
  
}

function priceOrder(direction){
  var i, list, low, mid, high,parent; 
  parent = document.getElementById('clist'); 
  parent.innerHTML = ""; 
  list = document.getElementsByClassName("all"); 
  list= Array.prototype.slice.call(list, 0);
  low= list.getElementsById("$1"); 
  low== Array.prototype.slice.call(low, 0);
  mid= list.getElementsById("$2"); 
  mid= Array.prototype.slice.call(mid, 0);
  high = list.getElementsById("$3"); 
  high== Array.prototype.slice.call(high, 0);

  if(direction == "asc"){





    // for(i = 0, i<low.length; i++;){
    //   list[i] = low[i]; 
    // }
    // for(i, i<low.length + mid.length-1; i++;){
    //   list[i] = mid[i-low.length]; 
    // }
    // for(i, i<low.length+mid.length+high.length; i++;){
    //   list[i] = high[i-low.length-mid.length]; 
    // }
    // sort(); 
  }else if(direction == "desc"){





  //   for(i = 0, i<high.length; i++;){
  //     list[i] = high[i]; 
  //   }
  //   for(i, i<high.length + mid.length-1; i++;){
  //     list[i] = mid[i-high.length]; 
  //   }
  //   for(i, i<low.length+mid.length+high.length; i++;){
  //     list[i] = low[i-high.length-mid.length]; 
  //   }
  // }

  // for(var i = 0, l = list.length; i < l; i++) {
  //   parent.appendChild(list[i]);
}
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