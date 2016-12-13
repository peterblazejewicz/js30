const panels = Array.from(document.querySelectorAll('.panel'));

function toggleOpen(event) {
  panels.forEach(panel => panel.classList.remove('open'));
  event.target.classList.toggle('open');
}

function toggleActive(event) {
  if (event.propertyName.includes('flex')) {
    event.target.classList.toggle('open-active');
  }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
