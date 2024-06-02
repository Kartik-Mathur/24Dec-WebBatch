import React, { useEffect, useState } from 'react'
import CatListItem from './CatListItem';

const CatFacts = () => {
    // const [cnt, SetCnt] = useState(0);
    // console.log("Inside Cat Facts")
    const [Facts, setFacts] = useState([]);
    useEffect(()=>{
        // console.log("Inside use effect");
        // SetCnt(cnt+1);
        fetch('https://cat-fact.herokuapp.com/facts')
        .then(res=>res.json())
        .then((res)=>{
            console.log(res)    
            setFacts(res)
        }).catch((err)=>{
            console.log(err)
        })
    },[]);
  return (
    <ul>
        {/* {cnt} */}
        {/* <button onClick={()=>{SetCnt(cnt+1)}}>Click Me</button> */}
        {Facts.map((fact)=><CatListItem key={fact._id} fact={fact.text} />)}
    </ul>
  )
}

export default CatFacts