/* eslint-disable no-unused-expressions */
/* eslint-env mocha */
'use strict'

const { expect } = require('chai')

const { types: { OrderSignal } } = require('../../../index')

describe('OrderSignal', () => {
  const parent = { id: 1 }
  const order = {
    symbol: 'symbol',
    price: 123.56,
    lev: '3',
    cid: '123123123',
    amount: 4,
    type: 'LIMIT',
    _some_key: 'some value'
  }

  it('construct', () => {
    const signal = new OrderSignal(order, parent)
    expect(signal.name).to.eq('order')
    expect(signal.meta).to.eql({
      symbol: 'symbol',
      price: 123.56,
      lev: '3',
      cid: '123123123',
      amount: 4,
      type: 'LIMIT'
    })
    expect(signal.parent).to.eq(parent)
    expect(signal.started_at).to.be.a('number')
  })
})
