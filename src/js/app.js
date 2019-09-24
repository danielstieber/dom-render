import domtoimage from 'dom-to-image';

function generate() {
	const node = document.querySelector('#post');
	domtoimage.toJpeg(node, { quality: 0.95 })
	    .then(function (dataUrl) {
	        var link = document.createElement('a');
	        link.download = 'my-image-name.jpeg';
	        link.href = dataUrl;
	        link.click();
	    });
}


function random()
{
	bgField.value = 'https://source.unsplash.com/random';
	hlField.value = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	updateHeadline();
	updateBackground();
}

function updateHeadline()
{
	const headline = document.querySelector('#headline');
	headline.innerHTML = hlField.value;
}

function updateBackground()
{
	const post = document.querySelector('#post');
	post.style.backgroundImage = `url(${bgField.value})`;
}


const hlField = document.querySelector('#hlfield');
const bgField = document.querySelector('#bgfield');
const btnRandom = document.querySelector('#randomize');
const btnGenerate = document.querySelector('#generate');

hlField.addEventListener('change', updateHeadline);
hlField.addEventListener('keyup', updateHeadline);
bgField.addEventListener('change', updateBackground);
bgField.addEventListener('keyup', updateBackground);
btnRandom.addEventListener('click', random);
btnGenerate.addEventListener('click', generate);
random();