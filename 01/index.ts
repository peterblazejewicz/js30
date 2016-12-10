/**
 * On keydown event play a sound
 * from matched audio element
 * @param {any} event
 */
function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`) as HTMLAudioElement;
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if(!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

/**
 * When transition ends remove a highlight
 * from audio track
 * @param {any} event
 */
function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
}

//
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);