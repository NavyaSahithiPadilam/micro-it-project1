let display = document.getElementById('screen');

const wipe = () => {
  display.value = '';
}

const show = (n) => {
  if (display.value === '0') {
    display.value = n;
  } else {
    display.value += n;
  }
}

const calc = () => {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}