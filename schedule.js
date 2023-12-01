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
let submitConf = document.getElementById("submit-confirmation");

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
