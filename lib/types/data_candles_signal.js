const Signal = require('../signal')

const format = ({ mts, open, close, high, low, volume }) => {
  return [mts, open, close, high, low, volume]
}

class CandleDataSignal extends Signal {
  constructor ({ candles, longIndicator, shortIndicator }) {
    super({
      name: 'data_candles',
      meta: {
        candles: candles.map(format),
        longIndicator: longIndicator.v(),
        shortIndicator: shortIndicator.v()
      }
    })
  }
}

module.exports = CandleDataSignal
