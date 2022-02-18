/* eslint-disable no-unused-expressions */
/* eslint-env mocha */
'use strict'

const { expect } = require('chai')

const { SignalTracer, Signal } = require('../../index')

describe('tracer is not enabled', () => {
  const isEnabled = false
  const storage = undefined
  const tracer = new SignalTracer(isEnabled, storage)

  it('should create a signal and store it locally', async () => {
    const signal = tracer.createSignal('some_signal', null, { some: 'meta' })
    await tracer.close()

    expect(tracer.signals).to.be.empty
    expect(signal).to.be.instanceOf(Signal)
  })
})
