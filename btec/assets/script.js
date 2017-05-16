var chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

function check_chrome() {
	if(!chrome) {
		alert("This interface is only designed to work with Google Chrome. Please use Google Chrome to use this interface.");
		document.getElementById('page').style.display = 'none';
		document.getElementById('error_msg').style.display = 'block';
	}
}

function resturants_f() {
	$("#map").fadeOut(500);
	setTimeout(function(){
			document.getElementById('map').src = "map_resturants.html";
	}, 500);
	$("#map").fadeIn(500);
	document.getElementById('sub_menu').style.display = 'none';
	document.getElementById('main_cont').style.marginBottom = "0px";
}
function clothing_f() {
	$("#map").fadeOut(500);
	setTimeout(function(){
			document.getElementById('map').src = "map_clothing.html";
	}, 500);
	$("#map").fadeIn(500);
	document.getElementById('sub_menu').style.display = 'none';
	document.getElementById('main_cont').style.marginBottom = "0px";
}
function toilets_f() {
	$("#map").fadeOut(500);
	setTimeout(function(){
			document.getElementById('map').src = "map_toilets.html";
	}, 500);
	$("#map").fadeIn(500);
	document.getElementById('sub_menu').style.display = 'none';
	document.getElementById('main_cont').style.marginBottom = "0px";
}
function parking_f() {
	$("#map").fadeOut(500);
	setTimeout(function(){
			document.getElementById('map').src = "map_parking.html";
	}, 500);
	$("#map").fadeIn(500);
	document.getElementById('sub_menu').style.display = 'none';
	document.getElementById('main_cont').style.marginBottom = "0px";
}
function reset_f() {
	$("#map").fadeOut(500);
	setTimeout(function(){
			document.getElementById('map').src = "map.html";
	}, 500);
	$("#map").fadeIn(500);
	document.getElementById('sub_menu').style.display = 'none';
	document.getElementById('main_cont').style.marginBottom = "0px";
}
function other_f() {
	$("#map").fadeOut(500);
	setTimeout(function(){
			document.getElementById('map').src = "map_other.html";
	}, 500);
	$("#map").fadeIn(500);
	document.getElementById('sub_menu').style.display = 'none';
	document.getElementById('main_cont').style.marginBottom = "0px";
}
function banks_f() {
	$("#map").fadeOut(500);
	setTimeout(function(){
			document.getElementById('map').src = "map_banks.html";
	}, 500);
	$("#map").fadeIn(500);
	document.getElementById('sub_menu').style.display = 'none';
	document.getElementById('main_cont').style.marginBottom = "0px";
}
function emergency_exit_f() {
	$("#map").fadeOut(500);
	setTimeout(function(){
			document.getElementById('map').src = "map_emergency_exit.html";
	}, 500);
	$("#map").fadeIn(500);
	document.getElementById('sub_menu').style.display = 'none';
	document.getElementById('main_cont').style.marginBottom = "0px";
}
function expand_menu() {
	document.getElementById('sub_menu').style.display = 'inline';
	document.getElementById('main_cont').style.marginBottom = "15px";
}
function close_menu() {
	document.getElementById('sub_menu').style.display = 'none';
	document.getElementById('main_cont').style.marginBottom = "0px";
}
function enlarge_f() {
	// Zoom in
	if (document.getElementById('enlarge').innerHTML == "Enlarge text") {
		document.body.style.zoom = "175%";
		document.getElementById('enlarge').innerHTML = "Decrease text size";
	}
	// Zoom out
	else if (document.getElementById('enlarge').innerHTML == "Decrease text size") {
		document.body.style.zoom = "100%";
		document.getElementById('enlarge').innerHTML = "Enlarge text";
	}
}
function plus_zoom(){
	document.body.style.zoom = "130%";
	document.getElementById('plus').style.height="38px";
	document.getElementById('plus').style.width="38px";
	document.getElementById('minus').style.height="38px";
	document.getElementById('minus').style.width="38px";
	document.getElementById('plus').style.marginRight="8px";
}
function minus_zoom(){
	document.body.style.zoom = "100%";
	document.getElementById('plus').style.height="50px";
	document.getElementById('plus').style.width="50px";
	document.getElementById('minus').style.height="50px";
	document.getElementById('minus').style.width="50px";
	document.getElementById('plus').style.marginRight="10px";
}