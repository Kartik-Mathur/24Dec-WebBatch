import React, {useRef, useState} from 'react'

const Input = () => {

    // const [name,setName] = useState("");
    // function inputHandler(ev){
    //     console.log("Change detected");
    //     setName(ev.target.value);
    // }
    const nameRef = useRef(null);
    function clickHandler(){
        console.log(nameRef.current);
    }

  return (

    <div>

        {/* <input type='text' placeholder='Enter Name' onChange={inputHandler} /> */}
        <input type='text' placeholder='Enter Name' ref={nameRef} />
        <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default Input