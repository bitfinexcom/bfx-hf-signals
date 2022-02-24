/* eslint-disable no-unused-expressions */
/* eslint-env mocha */
'use strict'

const { expect } = require('chai')
const { stub, assert } = require('sinon')

const { SignalTracer, Signal } = require('../../index')

describe('SignalTracer', () => {
  const isEnabled = true
  const storage = {
    isOpen: false,
    start: stub().resolves(),
    store: stub().resolves(),
    close: stub().resolves()
  }
  const tracer = new SignalTracer(isEnabled, storage)

  let parent, now
  const meta = { foo: 123 }

  before(() => {
    now = stub(Date, 'now').returns(0)
  })

  after(() => {
    now.restore()
  })

  it('collect', () => {
    const signal = new Signal({ name: 'parent', meta })
    expect(signal.id).to.be.undefined

    const result = tracer.collect(signal)
    expect(result).to.eq(signal)
    expect(result.id).to.eq(1)
    expect(tracer.signals).to.have.length(1)

    parent = signal
  })

  it('create signal', () => {
    const signal = tracer.createSignal('child', parent)

    expect(signal.id).to.eq(2)
    expect(tracer.signals).to.have.length(2)
  })

  it('close', async () => {
    console.log(tracer.signals)

    await tracer.close()

    expect(tracer.closed).to.be.true
    assert.calledTwice(storage.store)
    assert.calledWithExactly(storage.store.firstCall, {
      id: 1,
      name: 'parent',
      parent: null,
      meta,
      started_at: 0
    })
    assert.calledWithExactly(storage.store.secondCall, {
      id: 2,
      name: 'child',
      parent: 1,
      meta: {},
      started_at: 0
    })
    assert.calledWithExactly(storage.close)
  })

  describe('tracer is disabled', () => {
    const isEnabled = false
    const storage = undefined
    const tracer = new SignalTracer(isEnabled, storage)

    it('create signal', () => {
      const signal = tracer.createSignal('parent', null, meta)

      expect(signal.id).to.eq(1)
      expect(tracer.signals).to.have.length(0)
    })

    it('close', async () => {
      await tracer.close()
      expect(tracer.closed).to.be.true
    })
  })
})
