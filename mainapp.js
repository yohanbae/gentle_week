
var app = angular.module('two', []);
app.controller('TwoCtrl', function($scope){
	$scope.name = 'GentleWeek';
	$scope.userNote = localStorage.getItem('USERNOTE');

	// DATA FOR EACH DAYS
	$scope.tasks_mon = [];
	$scope.tasks_tue = []; 
	$scope.tasks_wed = []; 
	$scope.tasks_thu = []; 
	$scope.tasks_fri = []; 			
	$scope.tasks_sat = []; 
	$scope.tasks_sun = []; 			

	// FOR THE VERY FIRST TIME VISITOR
	$scope.tasks_mon = JSON.parse(localStorage.getItem('WEEK_W_MON'));
	$scope.tasks_tue = JSON.parse(localStorage.getItem('WEEK_W_TUE'));
	$scope.tasks_wed = JSON.parse(localStorage.getItem('WEEK_W_WED'));
	$scope.tasks_thu = JSON.parse(localStorage.getItem('WEEK_W_THU'));
	$scope.tasks_fri = JSON.parse(localStorage.getItem('WEEK_W_FRI'));
	$scope.tasks_sat = JSON.parse(localStorage.getItem('WEEK_W_SAT'));
	$scope.tasks_sun = JSON.parse(localStorage.getItem('WEEK_W_SUN'));

	var total_num = 0;
	if($scope.tasks_mon==null){ total_num += 0; }else{ total_num += 1;}
	if($scope.tasks_tue==null){ total_num += 0; }else{ total_num += 1;}	
	if($scope.tasks_wed==null){ total_num += 0; }else{ total_num += 1;}
	if($scope.tasks_thu==null){ total_num += 0; }else{ total_num += 1;}
	if($scope.tasks_fri==null){ total_num += 0; }else{ total_num += 1;}
	if($scope.tasks_sat==null){ total_num += 0; }else{ total_num += 1;}
	if($scope.tasks_sun==null){ total_num += 0; }else{ total_num += 1;}

	$scope.tasks = JSON.parse(localStorage.getItem('WEEK_W_DATA'));


	if(total_num < 1){ // IF There's no exist data(for the first user)
	$scope.tasks = JSON.parse(localStorage.getItem('WEEK_O_DATA'));
	localStorage.setItem('WEEK_W_DATA', JSON.stringify($scope.tasks));

	$scope.tasks_mon = JSON.parse(localStorage.getItem('WEEK_O_MON'));
	$scope.tasks_tue = JSON.parse(localStorage.getItem('WEEK_O_TUE'));
	$scope.tasks_wed = JSON.parse(localStorage.getItem('WEEK_O_WED'));
	$scope.tasks_thu = JSON.parse(localStorage.getItem('WEEK_O_THU'));
	$scope.tasks_fri = JSON.parse(localStorage.getItem('WEEK_O_FRI'));
	$scope.tasks_sat = JSON.parse(localStorage.getItem('WEEK_O_SAT'));
	$scope.tasks_sun = JSON.parse(localStorage.getItem('WEEK_O_SUN'));

	localStorage.setItem('WEEK_W_MON', JSON.stringify($scope.tasks_mon));
	localStorage.setItem('WEEK_W_TUE', JSON.stringify($scope.tasks_tue));
	localStorage.setItem('WEEK_W_WED', JSON.stringify($scope.tasks_wed));
	localStorage.setItem('WEEK_W_THU', JSON.stringify($scope.tasks_thu));
	localStorage.setItem('WEEK_W_FRI', JSON.stringify($scope.tasks_fri));
	localStorage.setItem('WEEK_W_SAT', JSON.stringify($scope.tasks_sat));
	localStorage.setItem('WEEK_W_SUN', JSON.stringify($scope.tasks_sun));
	localStorage.setItem('WEEK_W_CREATED', Date.now() );

	}	else{
		console.log('This week data already exist');
	}


// CALCULATE THE DATE

	var oldDate = JSON.parse(localStorage.getItem('WEEK_W_CREATED'));

	oldDate = new Date(oldDate);
	oldDate.setHours(0,0,0,0);


	var today = Date.now();
	today = new Date(today);
	today.setHours(0,0,0,0);

	var oldday_num = oldDate.getDay();
	var diff_num = 6 - oldday_num;

	var old_lastDay = oldDate.setDate(oldDate.getDate() + diff_num);
	old_lastDay = new Date(old_lastDay);	
	old_lastDay.setHours(0,0,0,0);
	console.log('okay for time');


	//IF NEW WEEK BEGINS, MAKE A NEW DATA FOR THE WEEK
	if(today > old_lastDay) {
		$scope.tasks_mon = [];
		$scope.tasks_tue = []; 
		$scope.tasks_wed = []; 
		$scope.tasks_thu = []; 
		$scope.tasks_fri = []; 			
		$scope.tasks_sat = []; 
		$scope.tasks_sun = []; 			
		$scope.origin_mon = JSON.parse(localStorage.getItem('WEEK_O_MON'));
		$scope.origin_tue = JSON.parse(localStorage.getItem('WEEK_O_TUE'));
		$scope.origin_wed = JSON.parse(localStorage.getItem('WEEK_O_WED'));
		$scope.origin_thu = JSON.parse(localStorage.getItem('WEEK_O_THU'));
		$scope.origin_fri = JSON.parse(localStorage.getItem('WEEK_O_FRI'));
		$scope.origin_sat = JSON.parse(localStorage.getItem('WEEK_O_SAT'));
		$scope.origin_sun = JSON.parse(localStorage.getItem('WEEK_O_SUN'));		

		for (i = 0; i < $scope.origin_mon.length; i++) { 
			var addUp = {
				title: $scope.origin_mon[i].title,
				createdAt: Date.now(),
				qty: 0,
				total: $scope.origin_mon[i].total				
			}
			$scope.tasks_mon.push(addUp);			
		}		
		localStorage.setItem('WEEK_W_MON', JSON.stringify($scope.tasks_mon));

		for (i = 0; i < $scope.origin_tue.length; i++) { 
			var addUp = {
				title: $scope.origin_tue[i].title,
				createdAt: Date.now(),
				qty: 0,
				total: $scope.origin_tue[i].total				
			}
			$scope.tasks_tue.push(addUp);			
		}		
		localStorage.setItem('WEEK_W_TUE', JSON.stringify($scope.tasks_tue));

		for (i = 0; i < $scope.origin_wed.length; i++) { 
			var addUp = {
				title: $scope.origin_wed[i].title,
				createdAt: Date.now(),
				qty: 0,
				total: $scope.origin_wed[i].total				
			}
			$scope.tasks_wed.push(addUp);			
		}		
		localStorage.setItem('WEEK_W_WED', JSON.stringify($scope.tasks_wed));

		for (i = 0; i < $scope.origin_thu.length; i++) { 
			var addUp = {
				title: $scope.origin_thu[i].title,
				createdAt: Date.now(),
				qty: 0,
				total: $scope.origin_thu[i].total				
			}
			$scope.tasks_thu.push(addUp);			
		}		
		localStorage.setItem('WEEK_W_THU', JSON.stringify($scope.tasks_thu));

		for (i = 0; i < $scope.origin_fri.length; i++) { 
			var addUp = {
				title: $scope.origin_fri[i].title,
				createdAt: Date.now(),
				qty: 0,
				total: $scope.origin_fri[i].total				
			}
			$scope.tasks_fri.push(addUp);			
		}		
		localStorage.setItem('WEEK_W_FRI', JSON.stringify($scope.tasks_fri));

		for (i = 0; i < $scope.origin_sat.length; i++) { 
			var addUp = {
				title: $scope.origin_sat[i].title,
				createdAt: Date.now(),
				qty: 0,
				total: $scope.origin_sat[i].total				
			}
			$scope.tasks_sat.push(addUp);			
		}		
		localStorage.setItem('WEEK_W_SAT', JSON.stringify($scope.tasks_sat));

		for (i = 0; i < $scope.origin_sun.length; i++) { 
			var addUp = {
				title: $scope.origin_sun[i].title,
				createdAt: Date.now(),
				qty: 0,
				total: $scope.origin_sun[i].total				
			}
			$scope.tasks_sun.push(addUp);			
		}		
		localStorage.setItem('WEEK_W_SUN', JSON.stringify($scope.tasks_sun));

		localStorage.setItem('WEEK_W_CREATED', Date.now() ); //make sure to record the DATE the new data created

	}


// SETUP DATES
	var scope_d=[]; var scope_w=[];
	scope_d['sun'] = $scope.tasks_sun;
	scope_w['sun'] = 'WEEK_W_SUN';
	scope_d['mon'] = $scope.tasks_mon;
	scope_w['mon'] = 'WEEK_W_MON';
	scope_d['tue'] = $scope.tasks_tue;
	scope_w['tue'] = 'WEEK_W_TUE';
	scope_d['wed'] = $scope.tasks_wed;
	scope_w['wed'] = 'WEEK_W_WED';
	scope_d['thu'] = $scope.tasks_thu;
	scope_w['thu'] = 'WEEK_W_THU';		
	scope_d['fri'] = $scope.tasks_fri;
	scope_w['fri'] = 'WEEK_W_FRI';
	scope_d['sat'] = $scope.tasks_sat;
	scope_w['sat'] = 'WEEK_W_SAT';		
//


	// REMOVE TASK
	$scope.remove = function(task, day){
	    if (confirm("Do you want to delete this task: " + task.title + "?")) {
			    var idx = scope_d[day].findIndex(function(item){        
			        return item === task;
			    });

			    if(idx > -1){
			        scope_d[day].splice(idx, 1)
			    }
				localStorage.setItem(scope_w[day], JSON.stringify(scope_d[day]));        
	    } else {
	    }
	}

	// ADD NEW TASK
	$scope.add = function(newTask, newTotal, day){
		var newData = {
			title: newTask,
			createdAt: Date.now(),
			qty: 0,
			total: parseInt(newTotal)
		}

		scope_d[day].push(newData);
		localStorage.setItem(scope_w[day], JSON.stringify(scope_d[day]));

	
	}

	// UPDATE TASK
	$scope.update = function(day){
		localStorage.setItem(scope_w[day], JSON.stringify(scope_d[day]));		
		get_perc();
	}



	// PERSONAL NOTE
	$scope.note_done = function(){
		$(".user_note").removeClass('opened');
		localStorage.setItem('USERNOTE', $scope.userNote);		
	}

	// GET TASK PROGRESSIVE
	get_perc();

	function get_perc(){
		var today = new Date(); 	var theday = today.getDay();		
		var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
		var total_work = 0; var total_qty = 0;
		var ttoday = days[theday];
		for (i = 0; i < scope_d[ttoday].length; i++) { 
			total_work += parseInt(scope_d[ttoday][i].total);
			total_qty += parseInt(scope_d[ttoday][i].qty);		
		}
		var hhh = (total_qty / total_work * 100).toFixed(0);
	  $("#perc").html(hhh + "% Completed Today"); // display time on the page
	}

});