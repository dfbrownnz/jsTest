import React, {useState, useEffect } from 'react'

// https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327055-must-know-hooks/4076826-01-usestate



function 	UseEffectV1App(){

    const [resourceType, setResourceType ] = useState('posts')
    const [items, setItems] =useState([])
    
    // useEffect when a resource changes then do this.
    // useEffect(() => {
    //     console.log('resourceType changed') //only runs when a different button is pushed same button pushed only one functon call....good for apis.
    // },[resourceType]) // 1. empty array runs once page onMount 2. if a resource is in [] that changes will cause useEfect function to run.

    useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
       .then(response => response.json())
       .then(json => setItems(json))
       //.then(json => console.log(json))

    },[resourceType]) 

    return(
		<div>
            <span>nothing</span>
            <button onClick={() => setResourceType('posts') }>posts</button>
            <button onClick={() => setResourceType('users') }>users</button>
            <button onClick={() => setResourceType('comments') }>comments</button>

            <h3>{resourceType}</h3>
            {items.map( item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </div>
        
	)
}

export default UseEffectV1App;

