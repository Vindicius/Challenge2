var date = new Date();

function displayDay() {
	var day = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
	var dayName = day[date.getDay()];
	document.getElementById('showDay').innerHTML = dayName;
}
displayDay();

function displayTime(){
	var time = date.toLocaleTimeString();
	document.getElementById('showTime').innerHTML = time;

	
}
displayTime();