const Signal = require('../signal')

class CancelAllSignal extends Signal {
  constructor (parent, meta = {}) {
    if (!parent) throw new TypeError('parent is mandatory')

    super({
      name: 'cancel_all',
      parent,
      meta
    })
  }
}

module.exports = CancelAllSignal
