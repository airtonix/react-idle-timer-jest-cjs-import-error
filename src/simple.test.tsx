import React from 'react'
import "@testing-library/dom"
import { render, screen } from '@testing-library/react';
import { useIdleTimer } from 'react-idle-timer';

describe('react-idle-timer', () => {

  const SessionTimer = () => {
    const timer = useIdleTimer()

    return <h1>{timer.getIdleTime()}</h1>
  }

  it('doesnt explode', () => {
    render(<SessionTimer />);

    expect(screen.getByRole('heading')).toBeDefined()
  });
});
