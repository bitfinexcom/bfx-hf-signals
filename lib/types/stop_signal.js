const Signal = require('../signal')

class StopSignal extends Signal {
  constructor (parent, meta = {}) {
    super({
      name: 'stop',
      parent,
      meta
    })
  }
}

module.exports = StopSignal
