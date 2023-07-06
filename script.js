//Global Variable//
const currentHour = dayjs().format("H");
//This function display the current time on the header of the page//
function updateTime() {
  const dateEl = $("#date");
  const timeEl = $("#time");
  const currentDate = dayjs().format("dddd, MMMM D, YYYY");
  const currentTime = dayjs().format("hh:mm:ss A");
  dateEl.text(currentDate);
  timeEl.text(currentTime);
}

//Tracts the hour of the day and adds a class to each row depending on the time of day//
function hourTracker() {
  $(".time-block").each(function () {
    var schedulehHour = $(this).attr("id").split("hour")[1];
    console.log("currentHour " + currentHour);
    console.log("time-block " + schedulehHour);

    if (schedulehHour < currentHour) {
      $(this).addClass("past");
    } else if (schedulehHour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

//sets the value that is written dow in the textarea to the locale storage//
$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, value);
});

//pulls the value from the localestorage and place them back on the page after refresh//
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour7"));

hourTracker();
setInterval(updateTime, 1000);
