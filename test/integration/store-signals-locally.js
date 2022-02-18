/* eslint-disable no-unused-expressions */
/* eslint-env mocha */
'use strict'

const { expect } = require('chai')
const { promises: { unlink, readFile } } = require('fs')
const path = require('path')

const { SignalTracer, LocalStorage } = require('../../index')

describe('store signals locally', () => {
  const dir = __dirname
  const fileName = 'test_output.txt'
  const filePath = path.join(dir, fileName)
  const isEnabled = true

  const storage = new LocalStorage(dir, fileName)
  const tracer = new SignalTracer(isEnabled, storage)

  after(async () => {
    await unlink(filePath)
  })

  it('should create a signal and store it locally', async () => {
    const signal = tracer.createSignal('some_signal', null, { some: 'meta' })
    await tracer.close()

    const content = await readFile(filePath, 'utf-8')
    expect(content.trim()).to.eq(JSON.stringify(signal))
  })
})
