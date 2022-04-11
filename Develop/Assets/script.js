

// Formats the date for the top of the page with moment Day- Month- Day - Year
var date = moment().format("dddd, MMMM Do, YYYY");

// displays the current date
$("#currentDay").text(date);


// to get items from local storage and turn th em into variables
var textareaVal9 = localStorage.getItem("hr-9");
var textareaVal10 = localStorage.getItem("hr-10");
var textareaVal11 = localStorage.getItem("hr-11");
var textareaVal12 = localStorage.getItem("hr-12");
var textareaVal1 = localStorage.getItem("hr-1");
var textareaVal2 = localStorage.getItem("hr-2");
var textareaVal3 = localStorage.getItem("hr-3");
var textareaVal4 = localStorage.getItem("hr-4");
var textareaVal5 = localStorage.getItem("hr-5");

// assign id's to the text areas
var textarea9 = $("#hr-9");
var textarea10 = $("#hr-10");
var textarea11 = $("#hr-11");
var textarea12 = $("#hr-12");
var textarea1 = $("#hr-1");
var textarea2 = $("#hr-2");
var textarea3 = $("#hr-3");
var textarea4 = $("#hr-4");
var textarea5 = $("#hr-5");

// stored info shows up in the times
textarea9.val(textareaVal9);
textarea10.val(textareaVal10);
textarea11.val(textareaVal11);
textarea12.val(textareaVal12);
textarea1.val(textareaVal1);
textarea2.val(textareaVal2);
textarea3.val(textareaVal3);
textarea4.val(textareaVal4);
textarea5.val(textareaVal5);

// time 
function time() {

    // variable "currentHour" holds current hour with moment

    // function for each row to be in the now, in the past, or futire
    $(".block").each(function () {

        // variable "hour" holds id hour from class block and pareInt is used to make it from a string to an integer.
        var hour = parseInt($(this).attr("id"));

        // if time is in the past
        if (hour < currentHour) {
            // adds grey to blocks
            $(this).addClass("past");
        }

        //else if the time is now
        else if (hour === currentHour) {
            // removes grey to blocks
            $(this).removeClass("past");
            // adds red to blocks
            $(this).addClass("present");
        }

        // if the time is in the future
        else {
            // removes grey 
            $(this).removeClass("past");
            // removes red 
            $(this).removeClass("present");
            // adds green to blocks for now
            $(this).addClass("future");
        }

    });

};

// time function
time();



   // on click function
(".saveBtn").on("click", function (event) {
    // Stops from refreshing
    event.preventDefault();

    // vThis holds what's going to be saves
    var textarea = $(this).prev();


    var id = textarea.attr("id");

    // this is what in inside the text area to save
    var value = textarea.val();
    // give an id to what's in local storage
    localStorage.setItem(id, value);
});
