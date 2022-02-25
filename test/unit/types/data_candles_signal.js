/* eslint-disable no-unused-expressions */
/* eslint-env mocha */
'use strict'

const { expect } = require('chai')

const { types: { CandleDataSignal } } = require('../../../index')

describe('CandleDataSignal', () => {
  const mts = 1645617060000
  const open = 38899
  const close = 38899
  const high = 38899
  const low = 38899
  const volume = 2
  const candles = [
    {
      mts,
      open,
      close,
      high,
      low,
      volume
    }
  ]
  const longIndicatorValue = 123
  const shortIndicatorValue = 456
  const longIndicator = { v: () => longIndicatorValue }
  const shortIndicator = { v: () => shortIndicatorValue }

  it('construct', () => {
    const signal = new CandleDataSignal({ candles, longIndicator, shortIndicator })
    expect(signal.name).to.eq('data_candles')
    expect(signal.meta).to.eql({
      candles: [[mts, open, close, high, low, volume]],
      longIndicator: longIndicatorValue,
      shortIndicator: shortIndicatorValue
    })
    expect(signal.parent).to.eq(null)
    expect(signal.started_at).to.be.a('number')
  })
})
