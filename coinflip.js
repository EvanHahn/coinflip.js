function coinflip() {
  return Math.random() < 0.5;
}

if (typeof module !== 'undefined') {
  module.exports = coinflip;
}
