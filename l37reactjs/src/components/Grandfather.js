import React from 'react'
import Father from './Father'


const Grandfather = ({goldDetails}) => {
  return (
    <div>
        <h2>Grandfather</h2>
        {/* <Father goldDetails={goldDetails} /> */}
        <Father />
    </div>
  )
}

export default Grandfather