let imgInitialWidth, imgInitialHeight;
let img = document.querySelector('#icon');
let title = document.querySelector('#name_of_product');
let pageOne = document.querySelector('#slide_one');
let pageTwo = document.querySelector('#slide_two');
let pageThree = document.querySelector('#slide_three');
let pageFour = document.querySelector('#slide_four');
let pageFive = document.querySelector('#slide_five');
let pageSix = document.querySelector('#slide_six');

onload = _ => {

	document.body.style.height = window.visualViewport.height + 'px';


	img.width = Math.floor(window.visualViewport.width*.3);
	imgInitialWidth = img.width;
	imgInitialHeight = img.height;

	document.body.style.background = 'radial-gradient(#000, #151515)';


	title.style.opacity = 0;
	title.hidden = true;
	img.style.opacity = 1;
	img.hidden = false;
	
	pageOne.hidden = true;
	pageOne.style.opacity = 0;
	
	pageTwo.style.opacity = 0;
	pageTwo.hidden = true;
	
	pageThree.style.opacity = 0;
	pageThree.hidden = true;
	
	pageFour.style.opacity = 0;
	pageFour.hidden = true;

	pageFive.style.opacity = 0;
	pageFive.hidden = true;

	pageSix.style.opacity = 0;
	pageSix.hidden = true;
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

	if (currentDelta > 100 && currentDelta < 130) {
		pageOne.hidden = false;
		pageOne.style.opacity = 1;
	} else if (currentDelta > 130){
		pageOne.hidden = true;
		pageOne.style.opacity = 0;
	}


	if (currentDelta > 130 && currentDelta < 150) {
		pageTwo.style.opacity = (currentDelta-130)/20;
		pageTwo.hidden = false;
	} else if (currentDelta < 150){
		pageTwo.hidden = true;
		pageTwo.style.opacity = 0;
	}

	if (currentDelta > 150 && currentDelta < 180) {
		pageTwo.hidden = false;
		pageTwo.style.opacity = 1;
	} else if (currentDelta > 180){
		pageTwo.hidden = true;
		pageTwo.style.opacity = 0;
	}

	if (currentDelta > 180 && currentDelta < 200) {
		pageThree.style.opacity = (currentDelta-180)/20;
		pageThree.hidden = false;
	} else if (currentDelta < 200){
		pageThree.hidden = true;
		pageThree.style.opacity = 0;
	}

	if (currentDelta > 200 && currentDelta < 230) {
		pageThree.hidden = false;
		pageThree.style.opacity = 1;
	} else if (currentDelta > 230){
		pageThree.hidden = true;
		pageThree.style.opacity = 0;
	}

	if (currentDelta > 230 && currentDelta < 250) {
		pageFour.style.opacity = (currentDelta-230)/20;
		pageFour.hidden = false;
	} else if (currentDelta < 250){
		pageFour.hidden = true;
		pageFour.style.opacity = 0;
	}

	if (currentDelta > 250 && currentDelta < 280) {
		pageFour.hidden = false;
		pageFour.style.opacity = 1;
	} else if (currentDelta > 280){
		pageFour.hidden = true;
		pageFour.style.opacity = 0;
	}

	if (currentDelta > 280 && currentDelta < 300) {
		pageFive.style.opacity = (currentDelta-280)/20;
		pageFive.hidden = false;
		document.body.style.background = '#FFF';
	} else if (currentDelta < 280){
		pageFive.hidden = true;
		pageFive.style.opacity = 0;
		document.body.style.background = 'radial-gradient(#000, #151515)';
	}

	if (currentDelta > 300 && currentDelta <= 330) {
		pageFive.hidden = false;
		pageFive.style.opacity = 1;
	} else if (currentDelta >= 330){
		pageFive.hidden = true;
		pageFive.style.opacity = 0;
	}

	if (currentDelta > 330 && currentDelta < 350) {
		pageSix.style.opacity = (currentDelta-330)/20;
		pageSix.hidden = false;
	} else if (currentDelta < 330){
		pageSix.hidden = true;
		pageSix.style.opacity = 0;
	}

	if (currentDelta > 350) {
		pageSix.hidden = false;
		pageSix.style.opacity = 1;
	}
});