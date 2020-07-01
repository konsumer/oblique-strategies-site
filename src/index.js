import React, { useState } from 'react'
import { render } from 'react-dom'
import { getInspirationCard } from '@nessiesnippets/oblique-strategies'

const App = () => {
  const [edition, setEdition] = useState(3)
  const [text, setText] = useState(getInspirationCard(edition))

  const updateEdition = e => () => {
    setEdition(e)
    setText(getInspirationCard(e))
  }

  return (
    <div className='app'>
      <div className='edition'>
        Edition:
        <label><input type='radio' name='edition' onChange={updateEdition(1)} checked={edition === 1} />1</label>
        <label><input type='radio' name='edition' onChange={updateEdition(2)} checked={edition === 2} />2</label>
        <label><input type='radio' name='edition' onChange={updateEdition(3)} checked={edition === 3} />3</label>
        <label><input type='radio' name='edition' onChange={updateEdition(4)} checked={edition === 4} />4</label>
      </div>
      <div className='card' onClick={() => setText(getInspirationCard(edition))}>
        <div className='text' dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} />
      </div>
      {/* <button onClick={() => setText(getInspirationCard(edition))}>ANOTHER</button> */}
      <small>Click card for more</small>
    </div>
  )
}

render(<App />, document.getElementById('root'))
