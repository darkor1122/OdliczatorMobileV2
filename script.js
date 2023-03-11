const daysCount = document.querySelector('.days-count')
const hoursCount = document.querySelector('.hours-count')
const minutesCount = document.querySelector('.minutes-count')
const secondsCount = document.querySelector('.seconds-count')
const photo = document.querySelector('.change-photo')
const ukSpan = document.querySelector('.uk-span');
const plSpan = document.querySelector('.pl-span');

const planeBox = document.querySelector('.plane')
const planeImg = document.querySelector('.plane-img')

let root = document.documentElement;

const setTime = () => {
	const currentTime = new Date();
	const backHomeTime = new Date('05 09 2023 15:15:00');
    const startApp = new Date('03 11 2023 15:45:00') 

    const numbers = backHomeTime - startApp
    console.log(numbers);

	const result = backHomeTime - currentTime;

    if (result < 0) return

	const seconds = Math.floor(result / 1000) % 60;
	const minutes = Math.floor(result / 1000 / 60) % 60;
	const hours = Math.floor(result / 1000 / 60 / 60) % 24;
	const days = Math.floor(result / 1000 / 60 / 60 / 24);

	photo.setAttribute(`src`, `img/timer--${days}.jpg`);
    

	daysCount.textContent = days;
	hoursCount.textContent = hours;
	minutesCount.textContent = minutes;
	secondsCount.textContent = seconds;

	const percentLeft = (result * 100) / numbers;
	const distanceInPercentege = 100 - percentLeft;

	ukSpan.textContent = `${percentLeft.toFixed(2)}%`;
	plSpan.textContent = `${distanceInPercentege.toFixed(2)}%`;

	root.style.setProperty('--distance', `${distanceInPercentege}%`);

    if (percentLeft <= 90 && percentLeft >= 10) {
        planeImg.classList.remove('fa-plane-departure')
        planeImg.classList.add('fa-plane')
    } else if (percentLeft < 10) {
        planeImg.classList.remove('fa-plane-departure');
        planeImg.classList.add('fa-plane-arrival')
    }

}
setTime()
setInterval(setTime, 1000)