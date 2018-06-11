$(document).ready(function(){
	var today_day = get_today_day();
	change_today_deco(today_day);

	var today_data = new Date();
	setInterval(function() {
	    var d = new Date();
	    t = d.toLocaleTimeString();
	    hr = d.getHours();
	    min = d.getMinutes();
	    sec = d.getSeconds();
	    newhr = 24-hr;
	    min = 60-min;
	    sec = 60-sec;
	    if(min==60){
	    	hr = hr+1;
	    	min = 0;
	    }
	    if(today_data.getMonth() == d.getMonth() && today_data.getDate() == d.getDate()){
	    	var good = 'good';
	    }else{
			location.reload();
	    }
	    $("#time").html(newhr+ "h " +min + "m " +sec + "s remained today"); // display time on the page
	}, 1000);


	$('.note_btn').click(function(){
		if($('.user_note').hasClass("opened")){
			$('.user_note').removeClass("opened");
		}else{
			$('.user_note').addClass("opened");		
			 $("#unote").focus();
		}
	});
});


function get_today_day(){
	var today = new Date();
	var theday = today.getDay() +1;
	return theday;
}


function change_today_deco($day){
	$('#day' + $day).css("opacity", "1");
}


