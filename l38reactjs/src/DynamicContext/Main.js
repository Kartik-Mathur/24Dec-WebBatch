import React from 'react'
import Grandfather from './components/Grandfather'
import GoldContext from './store/GoldContext'

const Main = () => {
    return (
        <div>
            <GoldContext>
                <Grandfather />
            </GoldContext>
        </div>
    )
}

export default Main