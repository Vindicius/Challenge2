function displayDay() {
	var date = new Date();
	var day = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
	var dayName = day[date.getDay()];
	document.getElementById('showDay').innerHTML = dayName;
}
displayDay();

function displayTime(){
	var date = new Date();
	//var time = date.toLocaleTimeString(); dit wilde ik gebruiken maar hiermee kon ik de 0 niet toevoegen als het cijfer onder de 10 was

	var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
	document.getElementById('showTime').innerHTML = h + ':' + m + ':' + s;


	var morning = (h >= 6 && h < 12);
	var afternoon = (h >= 12 && h < 18);
	var evening = (h >= 18 && h < 24);
	var night = (h < 6);

	var dayTimeVisual = document.getElementById('dayTimeVisual');
	var cycle = document.getElementById('cycle');


	switch(true){ //checkt de fase van de dag zoals die hierboven zijn gedefineerd en gebaseerd daarop zal een andere image worden weergegeven
		case morning:
			dayTimeVisual.classList.add('imgSwap');
			cycle.src = 'img/morning.png';
			break;
		case afternoon:
			dayTimeVisual.classList.add('imgSwap');
			cycle.src = 'img/afternoon.png';
			break;
		case evening:
			dayTimeVisual.classList.add('imgSwap');
			cycle.src = 'img/evening.png';
			break;
		case night:
			dayTimeVisual.classList.add('imgSwap');
			cycle.src = 'img/night.png';
			break;
		default:
			dayTimeVisual.classList.remove('imgSwap');
			break;
	}
}
	displayTime();
	setInterval(displayTime, 500);

function displayDate(){
	var date = new Date();
	var showDate = date.toLocaleDateString();
	document.getElementById('showDate').innerHTML = showDate;
}
displayDate();

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // Voegt 0 achter een cijfer 
    return i;
}