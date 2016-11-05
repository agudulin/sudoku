/* global describe, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'

import StatusPane from './'

describe('StatusPane', () => {
  it('renders correctly on error', () => {
    const tree = renderer.create(
      <StatusPane />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly on game over', () => {
    const tree = renderer.create(
      <StatusPane gameOver validBoard />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
