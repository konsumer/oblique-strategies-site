import React, { useState } from 'react'
import { render } from 'react-dom'
import { getInspirationCard } from '@nessiesnippets/oblique-strategies'

const App = ({ edition = 3 }) => {
  const [text, setText] = useState(getInspirationCard(edition))
  return (
    <div className='card' onClick={e => setText(getInspirationCard(edition))}>
      <div className='text' dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} />
    </div>
  )
}

render(<App />, document.getElementById('root'))
