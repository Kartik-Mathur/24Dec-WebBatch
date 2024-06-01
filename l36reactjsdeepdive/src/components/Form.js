import React from 'react'
import MyFragment from './MyFragment'

const Form = () => {
    return (
        <MyFragment>
            <input type='text' placeholder='Enter username' />
            <button>Submit</button>
        </MyFragment>
    )
}

export default Form