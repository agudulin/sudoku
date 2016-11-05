/* global describe, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'

import Spinner from './'

describe('Spinner', () => {
  it('renders correctly when loading', () => {
    const tree = renderer.create(
      <Spinner loading />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
