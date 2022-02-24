/* eslint-disable no-unused-expressions */
/* eslint-env mocha */
'use strict'

const { expect } = require('chai')

const { types: { OrderbookDataSignal } } = require('../../../index')

describe('OrderbookDataSignal', () => {
  const orderBook = {
    raw: true,
    bids: [],
    asks: [],
    _foo: 123123
  }

  it('construct', () => {
    const signal = new OrderbookDataSignal(orderBook)
    expect(signal.name).to.eq('data_orderbook')
    expect(signal.meta).to.eql({
      book: {
        raw: orderBook.raw,
        bids: orderBook.bids,
        asks: orderBook.asks
      }
    })
    expect(signal.parent).to.eq(null)
    expect(signal.started_at).to.be.a('number')
  })
})
