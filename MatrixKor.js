const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'; //7 * 11 = 77
const korean1 = 'ㅂㅈㅉㄷㄸㄱㄲㅅㅆㅁㄴㅇㄹㅎㅋㅌㅊㅍ'; // 18
const korean2 = 'ㅛㅕㅑㅐㅔㅗㅓㅏㅣㅠㅜㅡ'; // 12
const korean3 = '일주달년시분후일방것집차말물큰긴짱헐물밥빵집네꽤늘'; // 25
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
// 55

//const alphabet = katakana + latin + nums;
const alphabet = korean1 + korean2 + korean3 + latin + nums + katakana;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

//Sets the speed of the rain. Higher #, lower speed
setInterval(draw, 50);