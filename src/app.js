import {
  incrementQty,
  decrementQty,
  total,
  byr
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subtotal = document.querySelector('#subtotal');
const bayar = document.querySelector('#bayar');
const sisa = document.querySelector('#sisa');

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${total(price.value, qtyInput.value)}`;
  btnBayar.addEventListener('click', () => {
    sisa.textContent = `Rp. ${byr(bayar.value, price.value, qtyInput.value)}`;
  });
});

decrButton.addEventListener('click', () => {
  if (qtyInput.value < 2) {
    qtyInput.value = 1;
  } else {
    qtyInput.value = decrementQty(qtyInput.value);
  }
  subtotal.textContent = `Rp. ${total(price.value, qtyInput.value)}`;
  btnBayar.addEventListener('click', () => {
    sisa.textContent = `Rp. ${byr(bayar.value, price.value, qtyInput.value)}`;
  });
});