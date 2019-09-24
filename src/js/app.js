import domtoimage from 'dom-to-image';

function generate() {
	domtoimage.toJpeg(post, { quality: 0.95 })
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
	headline.innerHTML = hlField.value;
}
function updateStyle()
{
	headline.classList.remove("text-white", "text-red-500");
	headline.classList.add(hlStyle.value);
}

function updateBackground()
{
	post.style.backgroundImage = `url(${bgField.value})`;
}

const headline = document.querySelector('#headline');
const post = document.querySelector('#post');
const hlField = document.querySelector('#hlfield');
const bgField = document.querySelector('#bgfield');
const hlStyle = document.querySelector('#hlstyle');
const btnRandom = document.querySelector('#randomize');
const btnGenerate = document.querySelector('#generate');

hlField.addEventListener('change', updateHeadline);
hlField.addEventListener('keyup', updateHeadline);
hlStyle.addEventListener('change', updateStyle);

bgField.addEventListener('change', updateBackground);
bgField.addEventListener('keyup', updateBackground);
// btnRandom.addEventListener('click', random);
btnGenerate.addEventListener('click', generate);
updateHeadline();
updateBackground();
// random();