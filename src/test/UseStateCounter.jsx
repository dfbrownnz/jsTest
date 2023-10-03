import React, {useState } from 'react'

// https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327055-must-know-hooks/4076826-01-usestate

function 	UseStateCounterApp(){
    
    // function countIntial()    {
    //     console.log('This constructor Runs only when page is rendered like button hit');
    //     return 4
    // }
    // const [count, setCount]=useState(4); // constructor runs  each time buttonw is hit 
    // const [count, setCount]=useState(countIntial()); // constructor runs  each time buttonw is hit 

    function countIntialV2()    {
        console.log('This constructor Runs only when page is loaded');
        return 4
    }
    const [count, setCount]=useState(() => countIntialV2()); // constructor runs  each time buttonw is hit 
    // const [count, setCount]=useState(() =>{
    //     console.log('This constructor Runs only when page is loaded');
    //     return 4
    // }) // constructor only once when page is intially loaded

    
    function counterDecrement(){
        //setCount(count -1)
        setCount( prevCount => prevCount -1 )
    }

    function counterIncrement(){
        //setCount(count +1) this is the count value when render minus one 
        //setCount(count +1) the result is the same even with two of these functions as the render value is the same 
        setCount( prevCount => prevCount +1 )
    }


	return(
		<div>
            <button onClick={counterDecrement}>-</button>
            <span>{count}</span>
            <button onClick={counterIncrement}>+</button>
			
		</div>
	)
}

export default UseStateCounterApp;

