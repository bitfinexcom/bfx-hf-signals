const Signal = require('../signal')

class OrderCancelledSignal extends Signal {
  constructor (order) {
    super({
      name: 'order_cancelled',
      meta: {
        order: {
          id: order.id,
          cid: order.cid,
          gid: order.gid
        }
      }
    })
  }
}

module.exports = OrderCancelledSignal
