import React from 'react'
import Grandfather from './components/Grandfather'
import GoldDynamicContext from './store/GoldDynamicContext'


const DynamicContext = () => {
    return (
        <div>
            <GoldDynamicContext>
                <Grandfather />
            </GoldDynamicContext>
        </div>
    )
}

export default DynamicContext