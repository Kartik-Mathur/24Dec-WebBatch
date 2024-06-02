import React, { useEffect, useState } from 'react'

const CleanUp = () => {

    const [name, setName] = useState('');
    useEffect(() => {
        
        let id = setTimeout(()=>{
            console.log(name);
        },500);

        return () => {
            console.log("Cleanup");
            clearTimeout(id);
        }
    }, [name]);

    return (
        <div>
            <input
                value={name}
                type='text'
                placeholder='Enter Username'
                onChange={(ev) => setName(ev.target.value)}
            ></input>
        </div>
    )
}

export default CleanUp