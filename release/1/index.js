let imgInitialWidth, imgInitialHeight;
let img = document.querySelector('#icon');
let title = document.querySelector('#name_of_product');
let pageOne = document.querySelector('#slide_one');
let pageTwo = document.querySelector('#slide_two');

onload = _ => {

	document.body.style.height = window.visualViewport.height + 'px';


	img.width = Math.floor(window.visualViewport.width*.3);
	imgInitialWidth = img.width;
	imgInitialHeight = img.height;


	title.style.opacity = 0;
	title.hidden = true;
	img.style.opacity = 1;
	img.hidden = false;
	pageOne.hidden = true;
	pageOne.style.opacity = 0;
	pageTwo.style.opacity = 0;
	pageTwo.hidden = true;

}
let currentDelta = 0;


window.addEventListener('wheel', e=>{
	currentDelta += e.deltaY/100;
	if (currentDelta<0) {
		currentDelta = 0;
	}
	


	if (currentDelta < 30) {
		img.hidden = false;
		img.width = Math.floor(imgInitialWidth * (30-currentDelta) / 30);
		img.height = Math.floor(imgInitialHeight * (30-currentDelta) / 30);
		img.style.opacity = (30-currentDelta/2) / 30;
	} else {
		img.style.opacity = 0;
		img.hidden = true;	
	}

	
	if (currentDelta > 30 && currentDelta < 80) {
		title.style.opacity = (currentDelta-30)/50;
		title.hidden = false;
	} else {
		title.hidden = true;
		title.style.opacity = 0;
	}


	if (currentDelta > 80 && currentDelta < 100) {
		pageOne.style.opacity = (currentDelta-80)/20;
		pageOne.hidden = false;
	} else if (currentDelta < 100){
		pageOne.hidden = true;
		pageOne.style.opacity = 0;
	}

	if (currentDelta > 100 && currentDelta < 150) {
		pageOne.hidden = false;
		pageOne.style.opacity = 1;
	} else if (currentDelta > 150){
		pageOne.hidden = true;
		pageOne.style.opacity = 0;
	}


	if (currentDelta > 150 && currentDelta < 170) {
		pageTwo.style.opacity = (currentDelta-150)/20;
		pageTwo.hidden = false;
	} else if (currentDelta < 150){
		pageTwo.hidden = true;
		pageTwo.style.opacity = 0;
	}

	if (currentDelta > 170 && currentDelta < 220) {
		pageTwo.hidden = false;
		pageTwo.style.opacity = 1;
	} else if (currentDelta > 220){
		pageTwo.hidden = true;
		pageTwo.style.opacity = 0;
	}
});