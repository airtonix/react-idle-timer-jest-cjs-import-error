import { renderHook } from '@testing-library/react';
import { useIdleTimer } from 'react-idle-timer';

describe('react-idle-timer', () => {
  it('doesnt explode', () => {
    const { result } = renderHook(() => {
      return useIdleTimer();
    });
  });
});
