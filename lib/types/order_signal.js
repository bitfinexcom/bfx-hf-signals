const Signal = require('../signal')

class OrderSignal extends Signal {
  constructor (order, parent) {
    if (!parent) throw new TypeError('parent is mandatory')

    super({
      name: 'order',
      parent,
      meta: {
        symbol: order.symbol,
        price: order.price,
        lev: order.lev,
        cid: order.cid,
        amount: order.amount,
        type: order.type
      }
    })
  }
}

module.exports = OrderSignal
