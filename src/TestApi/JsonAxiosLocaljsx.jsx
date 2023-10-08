import React, {useState, useEffect} from "react";
import axios from 'axios';

 function JsonAxiosLocaljsx() {
    const [users, setUsers] = useState({ hits: [] });

    useEffect(() => {
      const fetchData = async () => {
        const { data } = await axios(
          //"http://localhost:8080", 
            {
              url: "/users?id=2",
              baseURL: "",
              withCredentials: false,
              method: 'POST', // POST doesnt work
              headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Accept': 'application/json', // 'Access-Control-Allow-Origin
                'Content-Type': 'application/json'   
              }, 
              data: JSON.stringify({"age": 1,"name": "Dave Brown yo da man","username": "Bubba", "email": "Sincere@april.biz", "gender": "male"})
            }
        );
        setUsers({ hits: data } );
      };
      fetchData();
      //console.log(users['hits']);
    }, [setUsers]);
  
    return (
      <div>
        <ul>      
              {/* {users.hits}  */}
                <ul>          {users.hits &&             users.hits.map(item => (               <li key={item.id}>                <span>{item.name}</span>               </li>            ))} </ul>
        </ul>
      </div>
    );
  }

  export default JsonAxiosLocaljsx;
