import React from 'react'

const MyFragment = (props) => {
    // props.children ==> [
    // <input type='text' placeholder='Enter username' />,
    // <button>Submit</button>
    // ]
  return (
    props.children.map(item=>item)
  )
}

export default MyFragment