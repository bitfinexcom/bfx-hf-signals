'use strict'

class Signal {
  /**
   * @param {string} name
   * @param {Signal?} parent
   * @param {object?} meta
   */
  constructor ({
    name,
    parent = null,
    meta
  }) {
    this.name = name
    this.meta = meta || {}
    this.parent = parent
    this.started_at = Date.now()
  }

  end () {
    if (this.ended_at) {
      throw new Error('signal already closed')
    }
    this.ended_at = Date.now()
  }
}

module.exports = Signal
