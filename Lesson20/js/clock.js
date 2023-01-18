const showClock = () => {
	let date = new Date();
	let hr = timeFormat(date.getHours());
	let min = timeFormat(date.getMinutes());
	let sec = timeFormat(date.getSeconds());
	document.getElementById('hour').innerHTML = `${hr}:${min}:${sec}`;

	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	let weekday = days[date.getDay()];
	let day = date.getDate();
	let month = months[date.getMonth()];
	let dateText = `${weekday}, ${month} ${day} `;
	document.getElementById('date').innerHTML = dateText;

	document.getElementById('container').classList.toggle('animation');
};

const timeFormat = (hour) => {
	if (hour < 10) hour = '0' + hour;
	return hour;
};

setInterval(showClock, 1000);
