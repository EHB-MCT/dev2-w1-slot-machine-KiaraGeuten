export const slotMachine = {
  calculateStatus: function () {
    // TODO: check for three similar symbols and update 'win'-boolean
    win = true;
  },
  getRandomSymbol: function () {
    // TODO: return a single random symbol
    const index = Math.floor(Math.random() * this.symbols.length);
    return this.symbols[index];
  },
  reset: function () {
    // TODO: Empty out the slots and reset 'win'-boolean
    this.slots.length = 0;
    win = false;
  },
  symbols: ["♠", "♥", "♣", "♦"],
  slots: [],
  slotsAmount: 3,
  spin: function () {
    // TODO: generate three random symbols, and add them to the slots of the slotMachine
    for (let i = 0; i < this.slotsAmount; i++) {
      this.slots.push(this.getRandomSymbol());
      console.log(this.slots);
    }
  },
  win: true,
};
