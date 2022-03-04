const Signal = require('../signal')

class OrderFilledSignal extends Signal {
  constructor (order) {
    super({
      name: 'order_filled',
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

module.exports = OrderFilledSignal
