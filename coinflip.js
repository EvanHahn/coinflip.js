function coinflip() {
  return +Math.random().toFixed(1) < 0.5;
}

if (typeof module !== 'undefined') {
  module.exports = coinflip;
}
