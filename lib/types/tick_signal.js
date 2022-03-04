const Signal = require('../signal')

class TickSignal extends Signal {
  constructor (parent, meta = {}) {
    if (!parent) throw new TypeError('parent is mandatory')
    super({
      name: 'tick',
      parent,
      meta
    })
  }
}

module.exports = TickSignal
