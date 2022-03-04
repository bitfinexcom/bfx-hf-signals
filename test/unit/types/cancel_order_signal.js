/* eslint-disable no-unused-expressions */
/* eslint-env mocha */
'use strict'

const { expect } = require('chai')

const { types: { CancelOrderSignal } } = require('../../../index')

describe('CancelOrderSignal', () => {
  const parent = { id: 1 }
  const meta = { gid: 123 }

  it('construct', () => {
    const signal = new CancelOrderSignal(parent, meta)
    expect(signal.name).to.eq('cancel_order')
    expect(signal.meta).to.eql(meta)
    expect(signal.parent).to.eq(parent)
    expect(signal.started_at).to.be.a('number')
  })
})
