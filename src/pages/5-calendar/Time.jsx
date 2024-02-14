import React, { useState } from 'react'

const Time = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)

    return time

}

export default Time