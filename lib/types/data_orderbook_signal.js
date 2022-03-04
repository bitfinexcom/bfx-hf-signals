const Signal = require('../signal')

class OrderbookDataSignal extends Signal {
  constructor (orderBook) {
    super({
      name: 'data_orderbook',
      meta: {
        book: {
          raw: orderBook.raw,
          bids: orderBook.bids,
          asks: orderBook.asks
        }
      }
    })
  }
}

module.exports = OrderbookDataSignal
