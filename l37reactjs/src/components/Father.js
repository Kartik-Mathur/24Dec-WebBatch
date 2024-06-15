import React from 'react'
import Child from './Child'

const Father = ({goldDetails}) => {
  return (
    <div>
        <h2>Father</h2>
        {/* <Child goldDetails={goldDetails} /> */}
        <Child  />
    </div>
  )
}

export default Father