import React, {useState, useEffect, useRef } from 'react'

// https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327055-must-know-hooks/4076826-01-usestate

// useRef 2nd good use is accessing values between renders using State causes a reRender and you loose your old value. saving values accross renders. 
// useRef 2nd good use is accessing values between renders using State causes a reRender and you loose your old value. saving values accross renders. 
// useRef 2nd good use is accessing values between renders using State causes a reRender and you loose your old value. saving values accross renders. 
// useRef 2nd good use is accessing values between renders using State causes a reRender and you loose your old value. saving values accross renders. 

function 	UseRefApp(){
    const [name, setName ] = useState('')
    const prevName = useRef()

    useEffect(() => {
        prevName.current = name  
    }, [name])

    return(
		<div>
            <input  value={name} onChange={e => setName(e.target.value)}/>
            <div>My Name is {name} and it used to be {prevName.current} </div>
            
        </div>
        
	)
}

export default UseRefApp;

