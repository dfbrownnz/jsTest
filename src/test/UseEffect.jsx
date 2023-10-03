import React, {useState, useEffect } from 'react'

// https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327055-must-know-hooks/4076826-01-usestate



function 	UseEffectApp(){

    const [windowWidth, setwindowWidth ] = useState(window.innerWidth)

    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }

    useEffect(() =>{
        // set up code runs second
        window.addEventListener('resize', handleResize )
                
        // Clean up code runs first AND called again when page is unMount
        return () => {             window.removeEventListener('resize', handleResize )         }

    },[])

    return(
		<div>
            {windowWidth}
        </div>
        
	)
}

export default UseEffectApp;

