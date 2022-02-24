/* eslint-disable no-unused-expressions */
/* eslint-env mocha */
'use strict'

const { expect } = require('chai')

const { types: { StopSignal } } = require('../../../index')

describe('StopSignal', () => {
  const parent = { id: 1 }

  it('construct', () => {
    const signal = new StopSignal(parent)
    expect(signal.name).to.eq('stop')
    expect(signal.meta).to.eql({})
    expect(signal.parent).to.eq(parent)
    expect(signal.started_at).to.be.a('number')
  })
})
