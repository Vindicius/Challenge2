var date = new Date();

function displayDay() {
	var day = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
	var dayName = day[date.getDay()];
	document.getElementById('showDay').innerHTML = dayName;
}
displayDay();

function displayTime(){
// dit is de beste manier om de tijd te displayen maar ik kan helaas hieruit dan niet het uur apart aanspreken dus vandaar hieronder ook alsnog de oudere methode toegepast
	var time = date.toLocaleTimeString(); 
	document.getElementById('showTime').innerHTML = time;

	var hour = date.getHours();

	var morning = (hour >= 6 && hour < 12);
	var afternoon = (hour >= 12 && hour < 18);
	var evening = (hour >= 18 && hour < 24);
	var night = (hour < 6);

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

	setTimeout(displayTime, 500);
}
displayTime();