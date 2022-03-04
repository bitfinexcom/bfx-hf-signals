/* eslint-disable no-unused-expressions */
/* eslint-env mocha */
'use strict'

const { expect } = require('chai')

const { types: { TickSignal } } = require('../../../index')

describe('TickSignal', () => {
  const parent = { id: 1 }

  it('construct', () => {
    const signal = new TickSignal(parent)
    expect(signal.name).to.eq('tick')
    expect(signal.meta).to.eql({})
    expect(signal.parent).to.eq(parent)
    expect(signal.started_at).to.be.a('number')
  })
})
