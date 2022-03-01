const Signal = require('../signal')

class CancelOrderSignal extends Signal {
  constructor (parent, meta = {}) {
    if (!parent) throw new TypeError('parent is mandatory')

    super({
      name: 'cancel_order',
      parent,
      meta
    })
  }
}

module.exports = CancelOrderSignal
