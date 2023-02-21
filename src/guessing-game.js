class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.guessNumber = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.guessNumber = Math.round((this.min + this.max) / 2);
    return this.guessNumber;
  }

  lower() {
    this.max = this.guessNumber - 1;
  }

  greater() {
    this.min = this.guessNumber + 1;
  }
}

module.exports = GuessingGame;
