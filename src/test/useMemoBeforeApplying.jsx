import React, {useState, useEffect, useRef, useMemo } from 'react'

// https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327055-must-know-hooks/4076826-01-usestate

// useMemo save the result of a slow function so it is NOT called every time there is a render. 
// useMemo save the result of a slow function so it is NOT called every time there is a render. 
// useMemo save the result of a slow function so it is NOT called every time there is a render. 


function 	UseMemoApp(){
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = slowFunction(number)
    const themeSytles ={
        backgroundColor : dark ? 'black' : 'white' , 
        color: dark ?  'white' : 'black'
    }
function slowFunction(num){
    console.log('calling slow function')
    for (let i=0; i < 1000000000 ; i++) {}
    return num * 2

}

    useEffect(() => {
        
    }, [])

    return(
		<div>
            <input  type="number" value={number} onChange={e => setNumber( parseInt(e.target.value))}/>
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeSytles}>{doubleNumber}</div>


            {/* <div>My Name is {name} and it used to be {prevName.current} </div> */}
            
        </div>
        
	)
}

export default UseMemoApp;