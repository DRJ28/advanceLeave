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

function showTable(){ // make html and show in #hoursTable .disable-day
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var temp1 = '<div class=\''; //class
  var temp2 = '\'><span>'; // day from array
  var temp3 = '</span><br><span>'; // date in format dd-mm-yyyy
  var temp4 = '</span><br><input type="text"></div>'
  var secInDay = 24*60*60*1000;
  var from = $('#datepicker-from').datepicker('getDate');
  var to = $('#datepicker-to').datepicker('getDate');
  var res = (to - from)/secInDay + 1;
  var date = new Date();
  var finalTemplate = '';
  // previous day from from-date
  var preDay = from.getDay(); // 2 for tuesday
  var cpre = from.getDay();
  for (var i = 0; i < preDay; i++) { // previous days that are not selected
    finalTemplate += temp1 + 'disable-day' + temp2;
    finalTemplate += days[i] + temp3;
    var nowD = new Date(from.getTime() - (cpre--)*secInDay);
    finalTemplate += nowD.getDate() +'-'+ (nowD.getMonth()+1) +'-'+ nowD.getFullYear();
    finalTemplate += temp4;
  }
  
  var nowD = from.getTime();
  var toTime = to.getTime();
  while(nowD<=toTime){
    var currentDate = new Date(nowD);
    var weekDay = currentDate.getDay();
    finalTemplate += temp1;
    if (weekDay == 0 || weekDay == 6) {
      finalTemplate += 'disable-day';
    }
    finalTemplate += temp2 + days[weekDay] + temp3;
    finalTemplate += currentDate.getDate() +'-'+ (currentDate.getMonth()+1) +'-'+ currentDate.getFullYear();
    finalTemplate += temp4;
    if (weekDay == 6) {
      finalTemplate += '<br><br>';
    }
    nowD = nowD + secInDay;
  }
  $('#hoursTable').html(finalTemplate);
}
