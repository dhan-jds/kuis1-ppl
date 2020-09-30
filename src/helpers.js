const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;
const total = (qty, price) => qty * price;
const byr = (bayar, price, qty) => bayar - price * qty;

module.exports = {
    incrementQty,
    decrementQty,
    total,
    byr
};