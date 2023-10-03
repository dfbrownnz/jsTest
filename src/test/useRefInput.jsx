import React, {useState, useEffect, useRef } from 'react'

// https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327055-must-know-hooks/4076826-01-usestate

// useRef good for accessing DOM elements like this example
// useRef good for accessing DOM elements like this example
// useRef good for accessing DOM elements like this example
// useRef good for accessing DOM elements like this example

function 	UseRefApp(){
    const [name, setName ] = useState('')
    const inputRef = useRef()

    function focus() {
        console.log('InputFocus')
        inputRef.current.focus()
    }

    return(
		<div>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
            <div>My Name is {name} </div>
            <button onClick={focus}>Focus</button>
        </div>
        
	)
}

export default UseRefApp;

