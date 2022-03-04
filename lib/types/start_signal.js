const Signal = require('../signal')

class StartSignal extends Signal {
  constructor (meta = {}) {
    super({ name: 'start', meta })
  }
}

module.exports = StartSignal
