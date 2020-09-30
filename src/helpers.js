const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;
const total = (qty, price) => qty * price;
const byr = (bayar, price, qty) => bayar - price * qty;
const kode = (price, qty, dis) => qty * price - dis / 100 * (price * qty);
const byrwd = (price, qty, dis) => bayar - (price * qty - dis / 100 * (price * qty));

module.exports = {
    incrementQty,
    decrementQty,
    total,
    byr,
    kode,
    byrwd
};