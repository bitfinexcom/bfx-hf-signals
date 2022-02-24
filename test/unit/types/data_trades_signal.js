/* eslint-disable no-unused-expressions */
/* eslint-env mocha */
'use strict'

const { expect } = require('chai')

const { types: { TradeDataSignal } } = require('../../../index')

describe('TradeDataSignal', () => {
  const id = 1012435454
  const mts = 1645639300690
  const amount = 0.05870468
  const price = 39494
  const oneTrade = {
    id,
    mts,
    amount,
    price
  }
  const trades = {
    0: oneTrade,
    length: 1
  }

  it('construct', () => {
    const signal = new TradeDataSignal(trades)
    expect(signal.name).to.eq('data_trades')
    expect(signal.meta).to.eql({
      trades: [[id, mts, price, amount]]
    })
    expect(signal.parent).to.eq(null)
    expect(signal.started_at).to.be.a('number')
  })
})
