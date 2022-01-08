// Gets the element from the HTML
const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

// Sets the width and height of the page
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Character pool for animation
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンアァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const korean1 = 'ㅂㅈㅉㄷㄸㄱㄲㅅㅆㅁㄴㅇㄹㅎㅋㅌㅊㅍㅂㅈㅉㄷㄸㄱㄲㅅㅆㅁㄴㅇㄹㅎㅋㅌㅊㅍㅂㅈㅉㄷㄸㄱㄲㅅㅆㅁㄴㅇㄹㅎㅋㅌㅊㅍ';
const korean2 = 'ㅛㅕㅑㅐㅔㅗㅓㅏㅣㅠㅜㅡㅛㅕㅑㅐㅔㅗㅓㅏㅣㅠㅜㅡㅛㅕㅑㅐㅔㅗㅓㅏㅣㅠㅜㅡ';
const korean3 = '일주달년시분후일방것집차말물큰긴짱헐물밥빵집네꽤늘일주달년시분후일방것집차말물큰긴짱헐물밥빵집네꽤늘일주달년시분후일방것집차말물큰긴짱헐물밥빵집네꽤늘';
const korean4 = '안녕하세요주세요죄송합니다아니요아마도도와주세요저기요안녕하세요주세요죄송합니다아니요아마도도와주세요저기요안녕하세요주세요죄송합니다아니요아마도도와주세요저기요';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '012345678901234567890123456789';

// Combining all of the characters into one variable
//const alphabet = korean1 + korean2 + korean3 + korean4 + latin + nums + katakana;
const alphabet = latin + katakana;

// Character font size and number of columns
const fontSize = 25;
const columns = canvas.width/fontSize;

const rainDrops = [];
for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

// Random integer between two given values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  
const draw = () => {
    // Makes the prior characters fade out
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0f0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++) {
        // Randomly selects a char from the alphabet variable
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        let rand = getRandomInt(0,500);
        if (rand === 1) {
            context.fillStyle = '#bfffbf';
        }
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

//Sets the speed of the rain. Higher #, lower speed
setInterval(draw, 50);