import React from 'react'
import { ListGroup } from 'react-bootstrap'

const User = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <h3>added blogs</h3>
      <ListGroup>
        {user.blogs.map(blog => <ListGroup.Item key={blog.id}>{blog.title}</ListGroup.Item>)}
      </ListGroup>
    </div>
  )
}

export default User