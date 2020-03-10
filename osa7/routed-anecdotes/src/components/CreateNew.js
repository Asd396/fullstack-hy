import React from 'react'
import { useField } from '../hooks/index.js'

const CreateNew = (props) => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')


  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
  }

  const handleReset = (e) => {
    e.preventDefault()
    content.reset()
    author.reset()
    info.reset()
  }

  const WrappedInput = ({reset, ...props}) => <input {...props} />

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <WrappedInput name='content' {...content} />
        </div>
        <div>
          author
          <WrappedInput name='author' {...author} />
        </div>
        <div>
          url for more info
          <WrappedInput name='info' {...info} />
        </div>
        <button>create</button>
        <button onClick={handleReset}>reset</button>
      </form>
    </div>
  )
}

export default CreateNew