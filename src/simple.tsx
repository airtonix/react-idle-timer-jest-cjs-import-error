import React from 'react'
//@ts-expect-error missing types
import { useIdleTimer } from 'react-idle-timer/dist/index.legacy.cjs.js'

export function Simple() {
    const timer = useIdleTimer()

    return <h1>{timer.getIdleTime()}</h1>

}