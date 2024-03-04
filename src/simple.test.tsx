import React from 'react'
import "@testing-library/dom"
import { render, screen } from '@testing-library/react';
import { Simple } from './simple'

describe('react-idle-timer', () => {

  it('doesnt explode', () => {
    render(<Simple />);

    expect(screen.getByRole('heading')).toBeDefined()
  });
});
