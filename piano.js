const key_elements = document.getElementsByClassName("key");
// const EXT = '.aiff';
const EXT = '.mp3';
const FOLDER = 'notes';

// https://stackoverflow.com/questions/9012537/how-to-get-the-element-clicked-for-the-whole-document

function playSound(e){
     e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;    
    // console.log(target)
    var octave = target.getAttribute('octave');
    var note = target.getAttribute('note');
    var filename = note + octave + EXT;
    var path = FOLDER + '/' + filename;
    var audio = new Audio(path);
    audio.play();
    console.log(path);
}

for (let i = 0; i < key_elements.length; i++){
    var element = key_elements[i];
    var octave = key_elements[i].getAttribute('octave');
    var note = key_elements[i].getAttribute('note');
    var color = key_elements[i].getAttribute('class').split(' ')[1];
    key_elements[i].addEventListener('mousedown', playSound)
    console.log(octave + '\t' + note + '\t' + color );
}
