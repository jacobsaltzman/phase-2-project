
import React, {useState} from "react"



function Darkmode(){

  const [isDarkMode, setIsDarkMode] = useState(false)

    function handleClick(e){
      setIsDarkMode(!isDarkMode)
    }

    return(
      <div>
          <button onClick={handleClick}>{isDarkMode? 'Darkmode': 'Lightmode'} </button>
      </div>
    )
}

export default Darkmode