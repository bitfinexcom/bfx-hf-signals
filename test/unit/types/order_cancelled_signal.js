/* eslint-disable no-unused-expressions */
/* eslint-env mocha */
'use strict'

const { expect } = require('chai')

const { types: { OrderCancelledSignal } } = require('../../../index')

describe('OrderCancelledSignal', () => {
  const order = {
    id: 123,
    cid: 456,
    gid: 789
  }

  it('construct', () => {
    const signal = new OrderCancelledSignal(order)
    expect(signal.name).to.eq('order_cancelled')
    expect(signal.meta).to.eql({
      order: {
        id: order.id,
        cid: order.cid,
        gid: order.gid
      }
    })
    expect(signal.parent).to.eq(null)
    expect(signal.started_at).to.be.a('number')
  })
})
