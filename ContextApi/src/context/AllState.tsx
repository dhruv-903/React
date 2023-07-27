import ThemeContext from "./ThemeContext";
import React, { useEffect, useState } from 'react'

function AllState(props) {
  const [color, setColor] = useState('orange')

  const changeColor = () =>{
    if(color === 'orange'){
      setColor('white')
    }
    else{
      setColor('orange')
    }
  }

  useEffect(() => {
    setInterval(changeColor,2000)
  }, [color])
  

  return (
    <ThemeContext.Provider value={color} >
        {props.children}
    </ThemeContext.Provider>
  )
}

export default AllState;