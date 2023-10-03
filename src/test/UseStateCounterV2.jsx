import React, {useState } from 'react'

// https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327055-must-know-hooks/4076826-01-usestate

function 	UseStateCounterV2App(){

    const [count, setCount]=useState(4)
    const [theme, setTheme]=useState('blue')

    // const [state, setState]= useState({ count: 4, theme: 'blue' })
    // const count = state.count
    // const theme = state.theme

    // function counterDecrement(){
    //     setState(prevState => {
    //         return {...prevState, count: prevState.count -1 } // with out ..prevState you loose theme blue and only have counter
    //     })
    // }

    // function counterIncrement(){
    //    //setCount( prevCount => prevCount +1 )
    //     setState(prevState => {
    //         return {...prevState, count: prevState.count +1 } // with out ..prevState you loose theme blue and only have counter
    //     })
    // }

    function counterDecrement(){
        setCount( prevCount => prevCount -1 )
        setTheme('red')
    }

    function counterIncrement(){
       setCount( prevCount => prevCount +1 )
       setTheme('blue')
    }


	return(
		<div>
            <button onClick={counterDecrement}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={counterIncrement}>+</button>
			
		</div>
	)
}

export default UseStateCounterV2App;

