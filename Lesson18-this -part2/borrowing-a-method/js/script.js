// export const wallet = {
//   transactions: [15, -9, 48, 53, 0, 29],
//   getMax() {
//     return Math.max.apply(null, this.transactions);
//   },
//   getMin() {
//     return Math.min.apply(null, this.transactions);
//   },
// };

// ----------------------advanced-----------------------

export const wallet = {
  transactions: [15, -9, 48, 53, 0, 29],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
