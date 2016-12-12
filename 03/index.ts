const handleUpdate = (event) => {
  let sizing = event.target.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + sizing);
}
const inputs = Array.from(document.querySelectorAll('.controls input'));
inputs.forEach(input => input.addEventListener('change', handleUpdate.bind(input)));

