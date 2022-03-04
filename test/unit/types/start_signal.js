/* eslint-disable no-unused-expressions */
/* eslint-env mocha */
'use strict'

const { expect } = require('chai')

const { types: { StartSignal } } = require('../../../index')

describe('StartSignal', () => {
  it('construct', () => {
    const signal = new StartSignal()
    expect(signal.name).to.eq('start')
    expect(signal.meta).to.eql({})
    expect(signal.parent).to.eq(null)
    expect(signal.started_at).to.be.a('number')
  })
})
