import React, { useState } from 'react'

function Box() {
  const [color, setColor] = useState('yellow')

  /**
   * width, height
   */

  const handleColor = (e) => {
    setColor(e.target.value)
  }

  return (
    <div>
      <input placeholder="색상 값을 입력해주세요" onChange={handleColor} />
      <div
        style={{
          width: 100,
          height: 100,
          border: '1px solid',
          backgroundColor: color,
        }}
      ></div>
    </div>
  )
}

export default Box
