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
    //   w3RemoveClass(x[i], "show");
      w3RemoveClass(x[i], "hide")
      if (x[i].className.indexOf(c) > -1){
        // w3AddClass(x[i], "show");
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