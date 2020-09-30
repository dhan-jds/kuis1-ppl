import {
  incrementQty,
  decrementQty,
  total
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subtotal = document.querySelector('#subtotal');

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${total(price.value, qtyInput.value)}`;
});

decrButton.addEventListener('click', () => {
  if (qtyInput.value < 2) {
    qtyInput.value = 1;
  } else {
    qtyInput.value = decrementQty(qtyInput.value);
  }
  subtotal.textContent = `Rp. ${total(price.value, qtyInput.value)}`;
});