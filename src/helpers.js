const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;
const total = (qty, price) => qty * price;

module.exports = {
    incrementQty,
    decrementQty,
    total
};