// const EXT = '.aiff';
const EXT = '.mp3';
const FOLDER = 'notes';
const PIANO = document.getElementById('piano');

function playSound(e){
     e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;    

    var octave = this.getAttribute('octave');
    var note = this.getAttribute('note');
    var color = this.getAttribute('class').split(' ')[1];
    console.log(octave + '\t' + note + '\t' + color );

    var filename = note + octave + EXT;
    var path = FOLDER + '/' + filename;
    var audio = new Audio(path);

    audio.play();
    console.log(path);
	e.stopPropagation(); // Stops black keys from clicking twice
	if (this.classList.contains('white')){
		this.setAttribute('class', 'key white-pressed');

		setTimeout(() => {
			this.setAttribute('class', 'key white');
		}, 200);
	}
	if (this.classList.contains('black')){
		this.setAttribute('class', 'key black-pressed');
		setTimeout(() => {
			this.setAttribute('class', 'key black');
		}, 200);
	}
}


// start and end must be within a range of 1-7 inclusive
function drawOctaves(start, end){
	for (let octave = start; octave <= end; octave++){
		// C
		const k1 = document.createElement("div");
		k1.classList.add("key");
		k1.classList.add("white");
		k1.setAttribute('note', 'C');
		// Db
		const k2 = document.createElement("div");
		k2.classList.add("key");
		k2.classList.add("black");
		k2.setAttribute('note', 'Db');
		
		k1.appendChild(k2);
		// D
		const k3 = document.createElement("div");
		k3.classList.add("key");
		k3.classList.add("white");
		k3.setAttribute('note', 'D');
		// Eb
		const k4 = document.createElement("div");
		k4.classList.add("key");
		k4.classList.add("black");
		k3.appendChild(k4);
		k4.setAttribute('note', 'Eb');
		// E
		const k5 = document.createElement("div");
		k5.classList.add("key");
		k5.classList.add("white");
		k5.setAttribute('note', 'E');
		// F
		const k6 = document.createElement("div");
		k6.classList.add("key");
		k6.classList.add("white");
		k6.setAttribute('note', 'F');
		// Gb
		const k7 = document.createElement("div");
		k7.classList.add("key");
		k7.classList.add("black");
		k6.appendChild(k7);
		k7.setAttribute('note', 'Gb');
		// G	
		const k8 = document.createElement("div");
		k8.classList.add("key");
		k8.classList.add("white");
		k8.setAttribute('note', 'G');
		// Ab
		const k9 = document.createElement("div");
		k9.classList.add("key");
		k9.classList.add("black");
		k8.appendChild(k9);
		k9.setAttribute('note', 'Ab');
		// A
		const k10 = document.createElement("div");
		k10.classList.add("key");
		k10.classList.add("white");
		k10.setAttribute('note', 'A');
		// Bb
		const k11 = document.createElement("div");
		k11.classList.add("key");
		k11.classList.add("black");
		k10.appendChild(k11);
		k11.setAttribute('note', 'Bb');
		// B
		const k12 = document.createElement("div");
		k12.classList.add("key");
		k12.classList.add("white");
		k12.setAttribute('note', 'B');

		// Set octave attribute	for all octave_keys in the current octave
		const octave_keys = [ k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12 ];
		for (let i = 0; i < octave_keys.length; i++){
			octave_keys[i].setAttribute('octave', octave);
			octave_keys[i].addEventListener('mousedown', playSound);
		}
		
		PIANO.appendChild(k1);
		PIANO.appendChild(k3);
		PIANO.appendChild(k5);
		PIANO.appendChild(k6);
		PIANO.appendChild(k8);
		PIANO.appendChild(k10);
		PIANO.appendChild(k12);
	}
}

drawOctaves(2, 6);

