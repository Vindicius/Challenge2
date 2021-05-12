var date = new Date();

function displayDay() {
	var day = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
	var dayName = day[date.getDay()];
	document.getElementById('').innerHTML = dayName;
}
displayDay();