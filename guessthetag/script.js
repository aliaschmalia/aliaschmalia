const form = document.getElementById('query-form');
const query = document.getElementById('query');
const list = document.getElementById('list-data');
const keywords = ['PARIS', 'DONUTS', 'BEYONCE', 'CAT', 'FOX', 'KANYE', 'DARIA', 'BLUE', 'SHELL', 'SKY', 'WEDDING', 'BERLIN', 'TOKYO', 'EAGLE', 'SUNFLOWER', 'BUBBLE', 'PUPPY', 'FRIED', 'WATER', 'BOTTLE', 'TRAFFIC'];
const buttons = document.getElementsByTagName('button');

const chosenKeyword1 = keywords.splice(Math.floor(Math.random()*keywords.length), 1);
const chosenKeyword2 = keywords.splice(Math.floor(Math.random()*keywords.length), 1);
const chosenKeyword3 = keywords.splice(Math.floor(Math.random()*keywords.length), 1);
const chosenKeyword4 = keywords.splice(Math.floor(Math.random()*keywords.length), 1);
console.log(chosenKeyword1[0], chosenKeyword2[0], chosenKeyword3[0], chosenKeyword4[0])

buttons[0].innerHTML = chosenKeyword1[0];
buttons[1].innerHTML = chosenKeyword2[0];
buttons[2].innerHTML = chosenKeyword3[0];
buttons[3].innerHTML = chosenKeyword4[0];

// // Put values in new array
finalKeywords = [chosenKeyword1, chosenKeyword2, chosenKeyword3, chosenKeyword4]

// Randomize array3
const chosenKeyword = finalKeywords[Math.floor(Math.random()*finalKeywords.length)];
console.log(chosenKeyword);


// Displays photos with randomized keywords1
function getTaggedPhotos(){
	fetch('https://api.tumblr.com/v2/tagged?tag=' + chosenKeyword +'&api_key=b48WTucnNkeYsQ7Lr6l9MsxP32IyyIWjg6n2RSx6UI8BsVmWy4').then(function(response){
		return response.json();
	})
	.then(function(result){

		list.innerHTML = '';
		const items = result.response;

		for(let i = 0; i < items.length; i++){

			const item = items[i];

			if(item.photos != undefined){
			const alt_sizes = item.photos[0].alt_sizes
			const imgSrc = alt_sizes[alt_sizes.length - 3].url;
			
			const img = document.createElement('img')
			img.src = imgSrc;

			const li = document.createElement('li')
			li.appendChild(img);
			list.appendChild(li);
			}
		}
	})
}

//display photos
getTaggedPhotos(chosenKeyword);


//If user guesses the right tag keyword, reset game starting from step 2

for(let i = 0; i < buttons.length; i++){
	if(buttons[i].innerHTML == chosenKeyword)
		buttons[i].onclick = function()
			{location.reload()
			}
	if(buttons[i].innerHTML != chosenKeyword){
		buttons[i].onclick = function()
			{alert('The answer is ' + chosenKeyword);
			location.reload();
			}
		}
	}
