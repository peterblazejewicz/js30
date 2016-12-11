/**
 * rotate hands according to current
 * date value by converting h/m/s into degrees
 */
function setDate() {
  const offset = 90;
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();
  //
  const secondDeg = ((second / 60)  * 360) + offset;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  const minuteDeg = ((minute / 60) * 360) + offset;
  minHand.style.transform = `rotate(${minuteDeg}deg)`;
  const hourDeg = ((hour / 12) * 360) + offset;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  setTimeout(setDate, 1000);
  console.log('hello');
}
const hourHand = document.querySelector('.hand.hour-hand') as HTMLElement;
const minHand = document.querySelector('.hand.min-hand') as HTMLElement;
const secondHand = document.querySelector('.hand.second-hand') as HTMLElement;
//
setDate();
