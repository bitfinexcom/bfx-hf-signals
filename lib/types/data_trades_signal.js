const Signal = require('../signal')

class TradeDataSignal extends Signal {
  constructor (trades) {
    const size = trades.length || 0
    const formattedTrades = new Array(size)
    for (let i = 0; i < size; i++) {
      const { id, mts, amount, price } = trades[i]
      formattedTrades[i] = [id, mts, price, amount]
    }

    super({
      name: 'data_trades',
      meta: {
        trades: formattedTrades
      }
    })
  }
}

module.exports = TradeDataSignal
