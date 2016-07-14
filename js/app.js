$(function() {
    $( "#datepicker-from" ).datepicker({
  		showAnim: "fold",
  		minDate: 0,
  		maxDate: "+3m",
  		onSelect: function(selected, event){
  			$('#datepicker-to').prop( "disabled", false)
  			$( "#datepicker-to" ).datepicker("option", "minDate", selected);
  			if ($('#datepicker-from')[0].value && $('#datepicker-to')[0].value) {
  				showTable();
  			}
  		}
	});
    $( "#datepicker-to" ).datepicker({
  		showAnim: "fold",
  		minDate: 0,
  		maxDate: "+3m",
  		onSelect: function(selected, event){
  			if ($('#datepicker-from')[0].value && $('#datepicker-to')[0].value) {
  				showTable();
  			}
  		}
	});
})();

function getDate(){
	// debugger;
}
function showTable(){
var to = $('#datepicker-to').datepicker('getDate')
var from = $('#datepicker-from').datepicker('getDate')
var res = new Date(to - from)
var daytot = res.getDate()
var montto = res.getMonth()
	debugger;
}
/*
Date.prototype.nextDay = function(){
  var currentDate = this.getDate();
  return new Date(this.setDate(currentDate +1));
}

var date = new Date(); 
date; //Fri May 16 2014 20:47:14 GMT-0500 (Central Daylight Time)
date.nextDay();//Sat May 17 2014 20:47:14 GMT-0500 (Central Daylight Time)*/