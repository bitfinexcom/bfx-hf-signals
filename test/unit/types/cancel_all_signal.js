/* eslint-disable no-unused-expressions */
/* eslint-env mocha */
'use strict'

const { expect } = require('chai')

const { types: { CancelAllSignal } } = require('../../../index')

describe('CancelAllSignal', () => {
  const parent = { id: 1 }

  it('construct', () => {
    const signal = new CancelAllSignal(parent)
    expect(signal.name).to.eq('cancel_all')
    expect(signal.meta).to.eql({})
    expect(signal.parent).to.eq(parent)
    expect(signal.started_at).to.be.a('number')
  })
})
